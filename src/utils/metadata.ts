import { Metadata } from "next";

export const generateMetadata = ({
    title = `Forbion | Sistema de Gestão para Estética Automotiva`,
    description = `Agenda online, planos de assinatura e relatórios para donos de estética automotiva e lavação. Organize sua operação e crie receita recorrente com o Forbion.`,
    image = "https://www.forbion.digital/images/og-image.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,

    openGraph: {
        title,
        description,
        images: image ? [{ url: image }] : undefined,
    },

    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : undefined,
    },

    ...(noIndex && { robots: { index: false, follow: false } }),
});
