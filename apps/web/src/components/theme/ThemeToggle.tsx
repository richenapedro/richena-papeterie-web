"use client";

import React, { useState } from "react";

function readDarkFromDom() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle(props: { className?: string }) {
  const [dark, setDark] = useState<boolean>(() => readDarkFromDom());

  function toggle() {
    const nextDark = !readDarkFromDom();
    const root = document.documentElement;

    if (nextDark) root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {}

    setDark(nextDark);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={[
        "inline-flex h-10 items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 text-sm text-[rgb(var(--text))] transition hover:opacity-90",
        props.className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Trocar tema"
      title="Trocar tema"
    >
      <span className="text-base leading-none">{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
