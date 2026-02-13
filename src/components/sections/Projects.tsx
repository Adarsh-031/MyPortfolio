import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-10 space-y-12">
      <SectionHeader title="Featured Work" subtitle="Projects & Research" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          title="DevEduAI"
          description="Interactive engineering mastery through AI."
          tags={["Next.js", "TypeScript", "TailwindCSS", "Tambo-ai SDK", "Generative UI"]}
          link="https://dev-edu-ai.vercel.app/"
        />
          <ProjectCard 
            title="KrishiMithra"
            description="An AI powered personal farming assistant."
            tags={["Next.js", "MongoDB", "Firebase Auth", "Gemini API","TailwindCSS"]}
            link="https://krishi-mithra.vercel.app/"
          />
        <ProjectCard 
          title="Buildit"
          description="An AI website generator capable of generating production grade websites using HTML, CSS and JavaScript."
          tags={["HTML5", "CSS3", "JavaScript", "Gemini API"]}
          link="https://www.getmeachai.dev/"
        />
        <ProjectCard 
          title="AI-Generated Text Detection"
          description="A Machine Learning model for detecting AI-Generated text in English articles"
          tags={["Pandas", "Scikit-Learn", "Logistic Regression"]}
          link="https://colab.research.google.com/drive/1Yx1cAnKd403v_RoljaX4Yhx3g67sQax-#scrollTo=zh21ls9O1qqy"
        />
      </div>
    </section>
  );
}
