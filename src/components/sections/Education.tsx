import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";

export function Education() {
  return (
    <section id="education" className="py-20 space-y-12">
      <SectionHeader title="Academic Background" subtitle="Education" />
      
      <div className="space-y-12 max-w-3xl mx-auto border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 ml-6 md:ml-auto md:mr-auto">
        <TimelineItem 
          year="2024 - 2028"
          title="B.Tech in Computer Science and Engineering (AI & ML)"
          institution="PES University"
          description="CGPA: 9.24/10. Core Coursework: Data Structures and Algorithms, Operating Systems, Computer Networks, Linear Algebra."
        />
        <TimelineItem 
          year="2022 - 2024"
          title="Higher Secondary Education"
          institution="Vivekananda PU College"
          description="Score: 97%. Major in Physics, Chemistry, and Mathematics."
        />
      </div>
    </section>
  );
}
