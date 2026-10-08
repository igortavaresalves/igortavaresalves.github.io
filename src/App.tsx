import { useState } from "react";
import type { Lang } from "./content";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { ParticleField } from "./components/particles/ParticleField";

function App() {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <div className="min-h-screen bg-void text-bone">
      <ParticleField />
      <Header lang={lang} setLang={setLang} />
      <main className="relative">
        <Hero lang={lang} />
        <About lang={lang} />
        <CaseStudies lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
      </main>
      <div className="relative">
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
