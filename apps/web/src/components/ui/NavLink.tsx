"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function cls(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export function NavLink(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const active = pathname === props.href;

  return (
    <Link
      href={props.href}
      className={cls(
        "text-sm transition",
        active
          ? "text-[rgb(var(--text))] font-semibold"
          : "text-[rgb(var(--text))] opacity-80 hover:opacity-100",
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
}
