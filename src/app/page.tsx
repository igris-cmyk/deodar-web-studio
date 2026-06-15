import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Founder } from "@/components/site/founder";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Work } from "@/components/site/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
