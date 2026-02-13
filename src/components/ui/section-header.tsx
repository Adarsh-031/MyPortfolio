import React from "react";

export function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-blue-500 font-medium tracking-wide uppercase text-sm">{subtitle}</h3>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}
