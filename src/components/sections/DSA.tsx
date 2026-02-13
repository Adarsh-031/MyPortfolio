import { Trophy } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AchievementItem } from "@/components/ui/achievement-item";
import CompetitiveProgrammingStats from "../ui/Leet";

export function DSA() {
  return (
    <section id="dsa" className="py-20 space-y-12">
      <SectionHeader title="Problem Solving" subtitle="DSA & Competitive Programming" />
      <CompetitiveProgrammingStats/> 
      <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Achievements
        </h3>
        <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <AchievementItem text="Awarded with Dr. M R Doreswamy Merit Scholarship for being amongst the top 5% CGPA in the Department (PES University)" />
          <AchievementItem text="2x Prof.C N R Rao Merit Scholarship Recipient (PES University)" />
          <AchievementItem text="Top 7th Performer in CrackTheCode coding event organized by IIT Madras and sponsored by GeeksForGeeks and CodeChef" />
        </ul>
      </div>
    </section>
  );
}
