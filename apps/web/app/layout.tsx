import "./globals.css";
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeInit } from "@/components/theme/ThemeInit";

const themeInitCode = `
(function() {
  try {
    var t = localStorage.getItem("theme");
    var isDark = (t === "dark");
    var root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  } catch (e) {}
})();`;

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitCode }} />
      </head>
      <body className="min-h-dvh bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
        <ThemeInit />
        <Header />
        <main className="py-10">{props.children}</main>
        <Footer />
      </body>
    </html>
  );
}
