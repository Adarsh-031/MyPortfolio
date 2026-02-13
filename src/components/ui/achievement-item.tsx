import React from "react";

export function AchievementItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
      <span>{text}</span>
    </li>
  );
}
