import Link from "next/link";
import React from "react";

export function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
