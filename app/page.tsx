import { Navbar } from "@/components/navbar";
import { Home } from "@/components/home";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <Projects />
         <Skills />
          <Contact />
        
      </main>
      <Footer />
    </>
  );
}