"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function cls(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(() => site.nav, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-[rgb(var(--text))]"
              onClick={() => setMobileOpen(false)}
            >
              {site.name}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 md:flex">
              {navItems
                .filter((it) => it.href !== "/orcamento")
                .map((it) => {
                  const active = isActive(pathname, it.href);
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      className={cls(
                        "text-sm transition",
                        active
                          ? "font-semibold text-[rgb(var(--text))]"
                          : "text-[rgb(var(--text))] opacity-75 hover:opacity-100",
                      )}
                    >
                      {it.label}
                    </Link>
                  );
                })}
            </nav>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden md:inline-flex" />
            <div className="hidden md:block">
              <Button href="/orcamento" variant="accent">
                Pedir orçamento
              </Button>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))]"
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {/* ícone hambúrguer simples */}
              <span className="block h-0.5 w-5 bg-[rgb(var(--text))] opacity-80" />
              <span className="block h-0.5 w-5 bg-[rgb(var(--text))] opacity-80 mt-1.5" />
              <span className="block h-0.5 w-5 bg-[rgb(var(--text))] opacity-80 mt-1.5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-3">
              <nav className="flex flex-col">
                {navItems
                  .filter((it) => it.href !== "/orcamento")
                  .map((it) => {
                    const active = isActive(pathname, it.href);
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setMobileOpen(false)}
                        className={cls(
                          "rounded-xl px-3 py-2 text-sm transition",
                          active
                            ? "bg-[rgb(var(--muted))] font-semibold text-[rgb(var(--text))]"
                            : "text-[rgb(var(--text))] opacity-85 hover:bg-[rgb(var(--muted))]",
                        )}
                      >
                        {it.label}
                      </Link>
                    );
                  })}
              </nav>

              <div className="mt-3">
                <div className="mt-3 flex justify-end">
                  <ThemeToggle />
                </div>
                <Button href="/orcamento" variant="accent" className="w-full">
                  Pedir orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
