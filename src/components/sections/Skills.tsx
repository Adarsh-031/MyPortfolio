import { Wrench, Code2, Cpu, Library } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillCard } from "@/components/ui/skill-card";

export function Skills() {
  return (
    <section id="skills" className="py-20 space-y-12">
      <SectionHeader title="Technical Arsenal" subtitle="Tools & Technologies" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard 
          icon={<Code2 className="w-8 h-8 text-red-500" />}
          title="Languages"
          skills={["C", "C++", "Python", "TypeScript", "Rust", "HTML5", "CSS3", "JavaScript"]}
        />
        <SkillCard 
          icon={<Wrench className="w-8 h-8 text-green-500" />}
          title="Tools/ Technologies"
          skills={["Linux","Git", "GitHub", "Docker", "AWS","REST API"]}
        />
        <SkillCard 
          icon={<Library className="w-8 h-8 text-blue-500" />}
          title="Frameworks/ Libraries/ Databases"
          skills={["React.js","Node.js", "Next.js", "Express.js", "MongoDB","PostgreSQL","Pandas","Numpy"]}
        />
        <SkillCard 
          icon={<Cpu className="w-8 h-8 text-orange-500" />}
          title="Core Concepts"
          skills={["Data Structures", "Algorithms", "OOP", "Computer Networks", "Operating Systems", "System Design"]}
        />
      </div>
    </section>
  );
}
