"""Browser smoke checks using installed Chrome and websocket-client. Run against next start."""
import base64, json, os, pathlib, subprocess, tempfile, time, urllib.request
import websocket
base = "http://localhost:3012"
chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
artifacts = pathlib.Path("artifacts/browser")
artifacts.mkdir(parents=True, exist_ok=True)
with tempfile.TemporaryDirectory(prefix="portfolio-browser-") as profile:
    process = subprocess.Popen([chrome, "--headless=new", "--disable-gpu", "--remote-debugging-port=9334", "--remote-allow-origins=http://localhost:9334", "--user-data-dir="+profile, "about:blank"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=subprocess.CREATE_NO_WINDOW)
    try:
        for _ in range(50):
            try:
                tabs = json.load(urllib.request.urlopen("http://localhost:9334/json", timeout=1)); break
            except Exception: time.sleep(.1)
        tab = next(item for item in tabs if item["type"] == "page")
        ws = websocket.create_connection(tab["webSocketDebuggerUrl"].replace("localhost", "127.0.0.1"), origin="http://localhost:9334", timeout=20)
        sequence = 0
        def call(method, params=None):
            global sequence
            sequence += 1
            ws.send(json.dumps({"id": sequence, "method": method, "params": params or {}}))
            while True:
                result = json.loads(ws.recv())
                if result.get("id") == sequence:
                    if "error" in result: raise RuntimeError(result["error"])
                    return result.get("result", {})
        def evaluate(expression):
            result = call("Runtime.evaluate", {"expression": expression, "returnByValue": True})
            if "exceptionDetails" in result: raise RuntimeError(result["exceptionDetails"])
            return result["result"].get("value")
        call("Page.enable")
        for width in [390, 768, 1024, 1440, 1895]:
            call("Emulation.setDeviceMetricsOverride", {"width": width, "height": 900, "deviceScaleFactor": 1, "mobile": width < 768})
            for route in ["/", "/about", "/services", "/contact", "/portfolio", "/portfolio/sme-operations-crm", "/portfolio/dentalflow", "/portfolio/landvault", "/portfolio/cozy-pantry", "/portfolio/april-rose-alpha"]:
                call("Page.navigate", {"url": base+route})
                for _ in range(100):
                    if evaluate("document.readyState === 'complete' && location.pathname === "+json.dumps(route)): break
                    time.sleep(.05)
                assert evaluate("document.querySelectorAll('main').length") == 1, route
                assert evaluate("document.documentElement.scrollWidth <= innerWidth"), (width, route, "horizontal overflow")
                assert evaluate("!!document.querySelector('h1')"), route
                assert evaluate("Array.from(document.images).filter(image => image.complete).every(image => image.naturalWidth > 0)"), (width, route, "broken image")
                if width == 390 and route == "/":
                    evaluate("document.querySelector('[aria-controls=mobile-navigation]').click()")
                    assert evaluate("document.querySelector('[aria-controls=mobile-navigation]').getAttribute('aria-expanded')") == "true"
                    evaluate("document.querySelector('#mobile-navigation a').focus()")
                    call("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Escape", "code": "Escape", "windowsVirtualKeyCode": 27})
                    assert evaluate("document.querySelector('[aria-controls=mobile-navigation]').getAttribute('aria-expanded')") == "false"
                    assert evaluate("document.activeElement === document.querySelector('[aria-controls=mobile-navigation]')")
                if route == "/portfolio":
                    assert evaluate("document.querySelectorAll('main a[href^=\"/portfolio/\"]').length") == 5, "project links"
                if route == "/contact": assert evaluate("document.querySelector('form') ? !document.querySelector('form').checkValidity() : !!document.querySelector('#contact-options a[href^=\"mailto:\"]')")
                if route == "/" or (route == "/portfolio" and width in [390,1440]):
                    shot = call("Page.captureScreenshot", {"format": "png"})
                    (artifacts / (("home-" if route == "/" else "portfolio-")+str(width)+".png")).write_bytes(base64.b64decode(shot["data"]))
                print(width, route, "PASS", flush=True)
        call("Browser.close")
        ws.close()
    finally:
        process.terminate(); process.wait(timeout=10)
