import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { generateMetadata as baseMeta } from "@/utils";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_SLUGS, getBlogPost } from "@/constants/blog-posts";
import { getSeoPage } from "@/constants/seo-pages";

const BASE = "https://www.forbion.digital";

export function generateStaticParams() {
    return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};
    return baseMeta({ title: post.title, description: post.description, path: `/blog/${slug}` });
}

function relatedHref(slug: string): { href: string; label: string } | null {
    const post = getBlogPost(slug);
    if (post) return { href: `/blog/${slug}`, label: post.title };
    const page = getSeoPage(slug);
    if (page) return { href: `/${slug}`, label: page.h1 };
    return null;
}

function fmtDate(iso: string): string {
    const d = new Date(iso + "T12:00:00");
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.datePublished,
                dateModified: post.datePublished,
                author: { "@type": "Organization", name: post.author || "Forbion" },
                publisher: { "@type": "Organization", name: "Forbion", url: BASE },
                mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${slug}` },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Início", item: BASE },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
                    { "@type": "ListItem", position: 3, name: post.h1, item: `${BASE}/blog/${slug}` },
                ],
            },
            ...(post.faq && post.faq.length
                ? [{
                    "@type": "FAQPage",
                    mainEntity: post.faq.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                }]
                : []),
        ],
    };

    const related = post.related.map(relatedHref).filter(Boolean) as { href: string; label: string }[];

    return (
        <article className="w-full pt-28 lg:pt-36 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Wrapper className="max-w-3xl">
                <nav className="text-sm text-muted-foreground mb-6" aria-label="Trilha">
                    <Link href="/" className="hover:text-foreground">Início</Link>
                    <span className="mx-2">/</span>
                    <Link href="/blog" className="hover:text-foreground">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground/80">{post.h1}</span>
                </nav>

                <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <span>{fmtDate(post.datePublished)}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-semibold mt-3">{post.h1}</h1>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{post.excerpt}</p>

                <div className="mt-10 space-y-10">
                    {post.sections.map((s, i) => (
                        <section key={i}>
                            <h2 className="text-2xl font-semibold">{s.h2}</h2>
                            {s.paragraphs.map((p, j) => (
                                <p key={j} className="text-muted-foreground mt-3 leading-relaxed">{p}</p>
                            ))}
                            {s.bullets && s.bullets.length > 0 && (
                                <ul className="mt-4 space-y-2">
                                    {s.bullets.map((b, k) => (
                                        <li key={k} className="flex gap-2 text-muted-foreground">
                                            <span className="text-primary">•</span><span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>

                {post.faq && post.faq.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
                        <div className="mt-4 space-y-4">
                            {post.faq.map((f, i) => (
                                <div key={i} className="rounded-xl bg-cardbox p-5">
                                    <div className="font-medium">{f.q}</div>
                                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-12 rounded-2xl bg-cardbox p-7 text-center">
                    <h3 className="text-xl font-semibold">Organize sua estética com o Forbion</h3>
                    <p className="text-sm text-muted-foreground mt-2">Agenda, loja online, recorrência e relatórios num só lugar. 7 dias grátis, sem cartão.</p>
                    <Link href="/#planos"><Button className="mt-4">Começar agora</Button></Link>
                </div>

                {related.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-lg font-semibold mb-3">Continue lendo</h3>
                        <div className="grid gap-2">
                            {related.map((r) => (
                                <Link key={r.href} href={r.href} className="text-primary hover:underline text-sm">{r.label} →</Link>
                            ))}
                        </div>
                    </div>
                )}
            </Wrapper>
        </article>
    );
}
