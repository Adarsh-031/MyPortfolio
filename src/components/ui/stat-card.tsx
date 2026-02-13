import React from "react";

export function StatCard({ label, value, sub, color }: { label: string, value: string, sub: string, color: string }) {
  return (
    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
      <h4 className="text-zinc-500 font-medium mb-2">{label}</h4>
      <div className={`text-3xl font-bold mb-1 ${color}`}>{value}</div>
      <div className="text-3xl text-zinc-400">{sub}</div>
    </div>
  );
}
