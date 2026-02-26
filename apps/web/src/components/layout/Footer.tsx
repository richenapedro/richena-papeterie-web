import React from "react";
import Link from "next/link";

import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

function yearNow() {
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-sm font-semibold text-[rgb(var(--text))]">
              {site.name}
            </div>
            <p className="mt-2 text-sm text-[rgb(var(--text))] opacity-70">
              Personalizados para momentos especiais — com acabamento premium e
              atenção aos detalhes.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-[rgb(var(--text))]">
              Navegação
            </div>
            <ul className="mt-2 space-y-2 text-sm">
              {site.nav.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="text-[rgb(var(--text))] opacity-75 hover:opacity-100 transition"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <div className="text-sm font-semibold text-[rgb(var(--text))]">
              Contato
            </div>

            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-[rgb(var(--text))] opacity-75 hover:opacity-100 transition"
              >
                Instagram
              </a>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[rgb(var(--text))] opacity-75 hover:opacity-100 transition"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-[rgb(var(--text))] opacity-60">
              Atendimento por mensagem. Resposta em horário comercial.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[rgb(var(--border))] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-[rgb(var(--text))] opacity-60">
            © {yearNow()} {site.name}. Todos os direitos reservados.
          </div>

          <div className="text-xs text-[rgb(var(--text))] opacity-60">
            Feito com carinho — e com código.
          </div>
        </div>
      </Container>
    </footer>
  );
}
