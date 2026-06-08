import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "Para Quem",
        href: Routes.ParaQuem,
    },
    {
        label: "Como Funciona",
        href: Routes.Workflow,
    },
    {
        label: "Funcionalidades",
        href: Routes.Capabilities,
    },
    {
        label: "Planos",
        href: Routes.Membership,
    },
    {
        label: "FAQ",
        href: Routes.FAQ,
    },
] as const;


export const footerLinks = {
    solutions: [
        { label: "Software para estética automotiva", href: "/software-para-estetica-automotiva" },
        { label: "Agenda online", href: "/agenda-online-estetica-automotiva" },
        { label: "Clube de assinatura", href: "/clube-de-assinatura-estetica-automotiva" },
        { label: "Recall de garantia", href: "/recall-garantia-estetica-automotiva" },
        { label: "Forbion vs CERA", href: "/forbion-vs-cera-comparativo" },
        { label: "Blog", href: "/blog" },
    ],
    product: [
        { label: "Para Quem É", href: "#para-quem" },
        { label: "Como Funciona", href: "#como-funciona" },
        { label: "Funcionalidades", href: "#funcionalidades" },
        { label: "Planos", href: "#planos" },
        { label: "FAQ", href: "#faq" },
    ],
    company: [
        { label: "Sobre a Forbion", href: "#" },
        { label: "Contato", href: Routes.WhatsApp },
        { label: "Política de Privacidade", href: Routes.Privacy },
        { label: "Termos de Uso", href: Routes.Terms },
    ]
};


export const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/forbion.digital", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];
