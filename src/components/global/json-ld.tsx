/**
 * Structured data (JSON-LD) — Organization + WebSite + SoftwareApplication com os
 * 3 planos como Offers. É o que o Google e as buscas de IA (ChatGPT/Perplexity/AI
 * Overviews) leem pra entender e citar a Forbion. Server component (renderiza no HTML).
 */
const BASE = "https://www.forbion.digital";

const OFFERS = [
    { name: "Essencial", price: "79.00" },
    { name: "Pro", price: "129.00" },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${BASE}/#organization`,
            name: "Forbion",
            url: BASE,
            logo: `${BASE}/icons/icon.svg`,
            description: "Sistema de gestão para estética automotiva: agenda online, clube de assinatura, controle de garantia e relatórios.",
            sameAs: ["https://instagram.com/forbion.digital"],
        },
        {
            "@type": "WebSite",
            "@id": `${BASE}/#website`,
            url: BASE,
            name: "Forbion",
            inLanguage: "pt-BR",
            publisher: { "@id": `${BASE}/#organization` },
        },
        {
            "@type": "SoftwareApplication",
            name: "Forbion",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: BASE,
            inLanguage: "pt-BR",
            description: "Software de gestão para estética automotiva, detailing e lava-rápido: agendamento online, loja pública, clube de assinatura (receita recorrente), recall de garantia, relatórios e vistoria do veículo com fotos.",
            offers: OFFERS.map((o) => ({
                "@type": "Offer",
                name: `Plano ${o.name}`,
                price: o.price,
                priceCurrency: "BRL",
                category: "subscription",
                availability: "https://schema.org/InStock",
            })),
        },
    ],
};

export default function JsonLd() {
    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
