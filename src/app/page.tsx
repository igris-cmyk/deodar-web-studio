import { Contact } from "@/components/site/contact";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { WhoWeHelp } from "@/components/site/who-we-help";
import { WhyItMatters } from "@/components/site/why-it-matters";
import { Work } from "@/components/site/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <WhyItMatters />
        <Work />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
