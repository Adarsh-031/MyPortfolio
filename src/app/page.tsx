import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { DSA } from "@/components/sections/DSA";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <Skills />
        <Projects />
        <DSA />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
