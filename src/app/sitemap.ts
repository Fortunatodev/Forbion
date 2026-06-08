import type { MetadataRoute } from "next";

const BASE = "https://www.forbion.digital";

// Páginas estáticas atuais. Conteúdo novo (por-serviço, guias, FAQ) entra aqui
// conforme for criado, pra entrar no índice do Google.
const PAGES: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return PAGES.map(({ path, priority, freq }) => ({
        url: `${BASE}${path}`,
        lastModified,
        changeFrequency: freq,
        priority,
    }));
}
