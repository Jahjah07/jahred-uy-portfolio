export default function CrmCaseStudy() {
  return <div className="mt-10 space-y-10">
    <section><h2 className="text-2xl font-bold">The problem</h2><p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">Small-business operations span leads, proposals, projects, and follow-up tasks. The platform brings those records together and connects business transitions to external automation.</p></section>
    <section><h2 className="text-2xl font-bold">Implementation</h2><p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">The Next.js client calls a NestJS API. Authentication and capability checks protect domain operations; Prisma manages PostgreSQL records. Matching workflow subscriptions publish automation runs and outbox events within the same transaction as the business change.</p></section>
    <figure className="border border-[var(--border-strong)] bg-[var(--blueprint-light)] p-6">
      <figcaption className="font-semibold">Business writes and automation delivery</figcaption>
      <div className="mt-5 space-y-4 text-sm leading-7">
        <p><strong>Next.js client → NestJS API</strong><br />Session authentication → CSRF checks → capability authorization → domain services</p>
        <p><strong>Domain transaction → PostgreSQL via Prisma</strong><br />Business records + automation run + outbox event commit together.</p>
        <p><strong>Outbox worker → n8n webhook</strong><br />Claim a delivery lease → dispatch a stable delivery ID → record the outcome.</p>
        <p><strong>Failure → retry or operator review</strong><br />Expired leases can be recovered. Callbacks and synchronization update the recorded run state.</p>
      </div>
    </figure>
    <section><h2 className="text-2xl font-bold">Engineering challenges</h2><ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 leading-7 text-[var(--muted)]"><li>Keep business changes and automation publishing atomic without making network calls inside the transaction.</li><li>Recover interrupted deliveries while preventing stale workers from overwriting a newer claim.</li><li>Restrict integration views and payloads so automation does not disclose unauthorized business data.</li><li>Handle at-least-once delivery honestly: downstream n8n workflows need persistent deduplication before side effects.</li></ul></section>
    <section><h2 className="text-2xl font-bold">Current result</h2><p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">Current source includes CRM domain modules, dashboard endpoints, tasks and activity tracking, n8n integration management, and an outbox worker. The system is implemented in local development. Production rollout and real-client business impact have not yet been verified.</p></section>
  </div>;
}
