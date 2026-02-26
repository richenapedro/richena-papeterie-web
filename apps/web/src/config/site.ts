export type NavItem = {
  href: string;
  label: string;
};

export type SocialLinks = {
  instagram: string;
  whatsapp: string;
};

export type SiteConfig = {
  name: string;
  nav: NavItem[];
  social: SocialLinks;
};

export const site: SiteConfig = {
  name: "Richena Papeterie",
  nav: [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/como-funciona", label: "Como funciona" },
    { href: "/orcamento", label: "Orçamento" },
    { href: "/contato", label: "Contato" },
  ],
  social: {
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/",
  },
};
