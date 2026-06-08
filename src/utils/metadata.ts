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
    path = "/",
    keywords = [
        "sistema para estética automotiva",
        "software de gestão estética automotiva",
        "agenda online estética automotiva",
        "gestão de lava rápido",
        "sistema para detailing",
        "controle de garantia automotiva",
        "clube de assinatura estética automotiva",
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    path?: string;
    keywords?: string[];
    noIndex?: boolean;
} = {}): Metadata => ({
    metadataBase: new URL("https://www.forbion.digital"),
    title,
    description,
    keywords,
    icons,
    alternates: { canonical: path },

    openGraph: {
        title,
        description,
        url: path,
        siteName: "Forbion",
        locale: "pt_BR",
        type: "website",
        images: image ? [{ url: image, width: 1200, height: 630, alt: "Forbion — gestão para estética automotiva" }] : undefined,
    },

    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : undefined,
    },

    robots: noIndex
        ? { index: false, follow: false }
        : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
});
