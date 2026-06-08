import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/constants/seo-pages";

const BASE = "https://www.forbion.digital";

const STATIC: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const staticEntries = STATIC.map(({ path, priority, freq }) => ({
        url: `${BASE}${path}`, lastModified, changeFrequency: freq, priority,
    }));
    // páginas de conteúdo (SEO) — pilar com prioridade maior
    const contentEntries: MetadataRoute.Sitemap = SEO_PAGES.map((p) => ({
        url: `${BASE}/${p.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: p.tier === 1 ? 0.8 : 0.6,
    }));
    return [...staticEntries, ...contentEntries];
}
