export function ThemeInit() {
  // roda ANTES do React hidratar, porque é um <script> direto no HTML
  const code = `
(function () {
  try {
    var key = "theme";
    var saved = localStorage.getItem(key); // "dark" | "light" | null
    var isDark = saved === "dark";
    if (!saved) {
      isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    var root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  } catch (e) {}
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}