import Link from "next/link";
import { ExternalLink } from "lucide-react";
import React from "react";

export function ProjectCard({ title, description, tags, link }: { title: string, description: string, tags: string[], link: string }) {
  return (
    <div className="group p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{title}</h3>
        <Link href={link} target="_blank" className="text-zinc-400 hover:text-foreground">
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
