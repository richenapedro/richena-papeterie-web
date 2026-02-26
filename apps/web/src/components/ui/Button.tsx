import Link from "next/link";
import React from "react";

type Variant = "primary" | "accent" | "ghost";

function cls(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export function Button(props: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const v = props.variant ?? "primary";

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[rgb(var(--primary))] text-[rgb(var(--bg))] hover:opacity-90 border border-[rgb(var(--primary))]",
    accent:
      "bg-[rgb(var(--accent))] text-[rgb(var(--bg))] hover:opacity-90 border border-[rgb(var(--accent))]",
    ghost:
      "bg-transparent text-[rgb(var(--text))] hover:bg-[rgb(var(--muted))] border border-[rgb(var(--border))]",
  };

  const className = cls(base, variants[v], props.className);

  if (props.href) {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={className}
    >
      {props.children}
    </button>
  );
}
