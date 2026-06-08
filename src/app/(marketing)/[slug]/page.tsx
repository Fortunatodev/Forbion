import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { generateMetadata as baseMeta, cn } from "@/utils";
import { Routes } from "@/constants";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { SEO_PAGES, SEO_SLUGS, getSeoPage } from "@/constants/seo-pages";
import { Check } from "lucide-react";

const BASE = "https://www.forbion.digital";

export function generateStaticParams() {
    return SEO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const page = getSeoPage(slug);
    if (!page) return {};
    return baseMeta({ title: page.title, description: page.description, path: `/${slug}` });
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = getSeoPage(slug);
    if (!page) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Início", item: BASE },
                    { "@type": "ListItem", position: 2, name: page.h1, item: `${BASE}/${slug}` },
                ],
            },
            ...(page.faq.length
                ? [{
                    "@type": "FAQPage",
                    mainEntity: page.faq.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                }]
                : []),
        ],
    };

    return (
        <article className="w-full pt-28 lg:pt-36 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Wrapper className="max-w-3xl">
                <nav className="text-sm text-muted-foreground mb-6" aria-label="Trilha">
                    <Link href="/" className="hover:text-foreground">Início</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground/80">{page.h1}</span>
                </nav>

                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight font-heading">{page.h1}</h1>
                <p className="text-lg text-foreground/70 mt-5 leading-relaxed">{page.lead}</p>

                {page.sections.map((s, i) => (
                    <section key={i} className="mt-10">
                        <h2 className="text-2xl font-semibold font-heading">{s.h2}</h2>
                        {s.paragraphs.map((p, j) => (
                            <p key={j} className="text-base text-foreground/75 mt-4 leading-relaxed">{p}</p>
                        ))}
                        {s.bullets && (
                            <ul className="mt-5 flex flex-col gap-3">
                                {s.bullets.map((b, k) => (
                                    <li key={k} className="flex items-start gap-3 text-foreground/80">
                                        <Check className="size-5 text-primary shrink-0 mt-0.5" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}

                {page.faq.length > 0 && (
                    <section className="mt-14">
                        <h2 className="text-2xl font-semibold font-heading">Perguntas frequentes</h2>
                        <div className="mt-6 flex flex-col gap-6">
                            {page.faq.map((f, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-medium text-foreground">{f.q}</h3>
                                    <p className="text-base text-foreground/70 mt-2 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA */}
                <div className="mt-14 rounded-2xl border border-foreground/10 bg-foreground/5 p-8 text-center">
                    <p className="text-xl font-semibold font-heading">Pronto pra organizar sua estética?</p>
                    <p className="text-foreground/70 mt-2">Teste o Forbion 7 dias grátis. Planos a partir de R$79/mês.</p>
                    <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
                        <Link href={Routes.AppLogin} target="_blank" rel="noopener noreferrer">
                            <Button size="lg">Começar 7 dias grátis</Button>
                        </Link>
                        <Link href="/#planos">
                            <Button size="lg" variant="outline">Ver planos</Button>
                        </Link>
                    </div>
                </div>

                {/* Páginas relacionadas (internal linking) */}
                {page.related.length > 0 && (
                    <nav className="mt-12" aria-label="Páginas relacionadas">
                        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-3">Veja também</p>
                        <div className="flex flex-col gap-2">
                            {page.related.map((rs) => {
                                const r = getSeoPage(rs);
                                if (!r) return null;
                                return (
                                    <Link key={rs} href={`/${rs}`} className={cn("text-primary hover:underline")}>
                                        {r.h1} →
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>
                )}
            </Wrapper>
        </article>
    );
}
