import React from "react";

export function TimelineItem({ year, title, institution, description }: { year: string, title: string, institution: string, description: string }) {
  return (
    <div className="relative pl-0">
      <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-background bg-blue-500 z-10" />
      <span className="text-sm text-blue-500 font-mono mb-1 block">{year}</span>
      <h3 className="text-xl font-bold leading-tight">{title}</h3>
      <h4 className="text-zinc-500 dark:text-zinc-400 mb-2 font-medium">{institution}</h4>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}
