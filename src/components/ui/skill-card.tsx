import React from "react";

export function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-sm border border-zinc-200 dark:border-zinc-700">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
