import React from "react";

export function Card(props: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5",
        props.className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {props.children}
    </div>
  );
}
