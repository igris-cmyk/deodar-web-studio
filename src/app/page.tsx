import { Contact } from "@/components/site/contact";
import { EngagementPreview } from "@/components/site/engagement-preview";
import { Footer } from "@/components/site/footer";
import { Founder } from "@/components/site/founder";
import { Hero } from "@/components/site/hero";
import { IdealClients } from "@/components/site/ideal-clients";
import { Navbar } from "@/components/site/navbar";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Work } from "@/components/site/work";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Work />
        <IdealClients />
        <Founder />
        <Process />
        <EngagementPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
