import dentalBooking from "@/public/images/dentalflow/Booking Page.png";
import dentalIntake from "@/public/images/dentalflow/Demo 1.png";
import dentalWorkflows from "@/public/images/dentalflow/Workflows.png";
import smeDashboard from "@/public/images/SME_System/Dashboard.png";
import smeLeads from "@/public/images/SME_System/Leads.png";
import smeCompanies from "@/public/images/SME_System/Companies.png";
import smeLogin from "@/public/images/SME_System/Login.png";
import type { StaticImageData } from "next/image";
import citizen from "@/public/images/land_vault/Citizen_Page.png";
import admin from "@/public/images/land_vault/Admin_Page.png";
import surveyor from "@/public/images/land_vault/Surveyor_Page.png";
import login from "@/public/images/land_vault/Login_Page.png";
import cozyHome from "@/public/images/cozy_pantry/Home_Page.jpeg";
import cozyRecipe from "@/public/images/cozy_pantry/Recipe_Page.jpeg";
import cozyPlanner from "@/public/images/cozy_pantry/Planner_Page.jpeg";
import cozyProfile from "@/public/images/cozy_pantry/Profile_Page.jpeg";
import aprilHome from "@/public/images/april_portfolio/Home_Page.png";
import aprilPortfolio from "@/public/images/april_portfolio/Portfolio_Page.png";
import aprilServices from "@/public/images/april_portfolio/Service_Page.png";
import aprilAbout from "@/public/images/april_portfolio/About_Me_Page.png";
export const screenshots: Record<string, { image: StaticImageData; caption: string }[]> = {
  "dentalflow": [
    { image: dentalBooking, caption: "Patient booking form for the BrightSmile clinic demo" },
    { image: dentalIntake, caption: "n8n intake workflow with validation, duplicate checks, Google Sheets storage, and slot pre-check dispatch" },
    { image: dentalWorkflows, caption: "n8n workflow collection for intake, receptionist approval, alternative slots, reminders, and cancellation" },
  ],
  "sme-operations-crm": [
    { image: smeDashboard, caption: "Dashboard with lead operations, sales pipeline, and project metrics" },
    { image: smeLeads, caption: "Lead management workspace" },
    { image: smeCompanies, caption: "Company management workspace" },
    { image: smeLogin, caption: "CRM sign-in page" },
  ],
  "landvault": [
    { image: citizen, caption: "Citizen workspace with parcel polygons and ownership details" },
    { image: surveyor, caption: "Surveyor workspace" },
    { image: admin, caption: "Government administrator workspace" },
    { image: login, caption: "LandVault sign-in page" },
  ],
  "cozy-pantry": [
    { image: cozyHome, caption: "Home and recently saved recipes" },
    { image: cozyRecipe, caption: "Personal recipe collection" },
    { image: cozyPlanner, caption: "Meal planner" },
    { image: cozyProfile, caption: "Profile and Pantry settings" },
  ],
  "april-rose-alpha": [
    { image: aprilHome, caption: "Personal branding and homepage" },
    { image: aprilPortfolio, caption: "Creative portfolio gallery" },
    { image: aprilServices, caption: "Virtual assistance services" },
    { image: aprilAbout, caption: "Professional background" },
  ],
};
