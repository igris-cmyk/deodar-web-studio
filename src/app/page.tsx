import { Contact } from "@/components/site/contact";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Founder } from "@/components/site/founder";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Packages } from "@/components/site/packages";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { TrustBar } from "@/components/site/trust-bar";
import { WhoWeHelp } from "@/components/site/who-we-help";
import { WhyCedar } from "@/components/site/why-cedar";
import { Work } from "@/components/site/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Founder />
        <Services />
        <WhoWeHelp />
        <Packages />
        <Work />
        <Process />
        <WhyCedar />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
