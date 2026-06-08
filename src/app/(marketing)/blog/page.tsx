import Link from "next/link";
import type { Metadata } from "next";
import { generateMetadata as baseMeta } from "@/utils";
import Wrapper from "@/components/global/wrapper";
import { BLOG_POSTS } from "@/constants/blog-posts";

const BASE = "https://www.forbion.digital";

export const metadata: Metadata = baseMeta({
    title: "Blog Forbion | Gestão de estética automotiva, detailing e lava-rápido",
    description: "Guias práticos para quem toca estética automotiva: precificação, agenda, recorrência, NF-e, clube de assinatura e mais. Conteúdo direto ao ponto.",
    path: "/blog",
});

function fmtDate(iso: string): string {
    const d = new Date(iso + "T12:00:00");
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogIndex() {
    const posts = [...BLOG_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog Forbion",
        url: `${BASE}/blog`,
        blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.datePublished,
            url: `${BASE}/blog/${p.slug}`,
        })),
    };

    return (
        <section className="w-full pt-28 lg:pt-36 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Wrapper className="max-w-4xl">
                <h1 className="text-3xl lg:text-4xl font-semibold">Blog Forbion</h1>
                <p className="text-muted-foreground mt-3 max-w-2xl">
                    Guias práticos pra quem toca estética automotiva, detailing e lava-rápido — sem enrolação.
                </p>

                {posts.length === 0 ? (
                    <p className="text-muted-foreground mt-12">Em breve, os primeiros artigos.</p>
                ) : (
                    <div className="mt-10 grid gap-4">
                        {posts.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/blog/${p.slug}`}
                                className="block rounded-2xl bg-cardbox p-6 transition-colors hover:bg-cardbox/70"
                            >
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                    <span>{fmtDate(p.datePublished)}</span>
                                    {p.tags?.[0] && (<><span>·</span><span>{p.tags[0]}</span></>)}
                                </div>
                                <h2 className="text-xl font-semibold mt-2">{p.title}</h2>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
                                <span className="inline-block text-sm text-primary mt-3">Ler artigo →</span>
                            </Link>
                        ))}
                    </div>
                )}
            </Wrapper>
        </section>
    );
}
