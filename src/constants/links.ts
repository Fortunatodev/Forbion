import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "Visão Geral",
        href: Routes.Difference,
    },
    {
        label: "Processo",
        href: Routes.Workflow,
    },
    {
        label: "Soluções",
        href: Routes.Capabilities,
    },
    {
        label: "Integrações",
        href: Routes.Integrations,
    },
    {
        label: "Planos",
        href: Routes.Membership,
    },
] as const;


export const footerLinks = {
    product: [
        { label: "Como funciona", href: "#workflow" },
        { label: "Recursos", href: "#capabilities" },
        { label: "Integrações", href: "#integrations" },
        { label: "Planos", href: "#membership" }
    ],
    resources: [
        { label: "Demonstração", href: "#" },
        { label: "Fale com um", href: "#" },
        { label: "Central de ajuda", href: "#" },
        { label: "Documentação", href: "#" },
    ]
    ,
    company: [
        { label: "Sobre a empresa", href: "#" },
        { label: "Metodologia", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Política de privacidade", href: "#" }
    ]
};


export const socialLinks = [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];
