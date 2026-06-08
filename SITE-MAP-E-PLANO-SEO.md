# forbion.digital — mapa do site + plano de SEO/performance (legítimo)

## O que é
- **Pasta:** `products/forbiontech/` · **Domínio:** https://www.forbion.digital · **Stack:** Next.js App Router (SSG por padrão) · **Repo:** Fortunatodev/Forbion.
- **Páginas hoje:** `(marketing)/page.tsx` (home), `privacy`, `terms`, `dashboard` (redirect). **Só 3 páginas reais.**

## Diagnóstico (por que não rankeia / parece lento)
1. **Pouco conteúdo indexável** — 1 página real. Google e ChatGPT precisam de páginas com conteúdo útil pra indexar/citar.
2. **SEO técnico ausente** — sem `sitemap.xml`, `robots.txt`, JSON-LD (structured data), OG completo, canonical.
3. **Animação tardia** — framer-motion `whileInView` (54×) deixa o conteúdo invisível até o scroll → "pipoca" atrasado = impressão de lentidão. Above-the-fold não deveria depender de animação.
4. **Preço desatualizado** — R$97/197 BASIC/PRO; precisa virar Essencial 79 / Premium 179 / Pro 197 + **plano anual**.
5. **Imagens** — 11 em `public/`, algumas stock aleatório (Notion). Trocar por melhores.

## Plano (legítimo — rankeia de verdade e sustenta)
**Fase 1 — Performance/animação (perceived-speed):** above-the-fold sem animação bloqueante; `whileInView` com margem maior + `once`; respeitar `prefers-reduced-motion`; reduzir framer onde gsap/CSS resolve. Meta: conteúdo visível instantâneo.
**Fase 2 — SEO técnico:** `app/sitemap.ts`, `app/robots.ts`, metadata completa (title/desc/OG/Twitter/canonical) por página, JSON-LD (Organization, SoftwareApplication, FAQPage, Product/Offer com os preços).
**Fase 3 — Páginas de conteúdo REAL (as "várias páginas", do jeito certo):** uma por serviço/uso (agenda online p/ estética, controle de vitrificação/garantia, recorrência, relatórios), comparativo honesto, FAQ rica, guias de gestão. Conteúdo útil = ranking + citação no ChatGPT (GEO).
**Fase 4 — Pricing + polish:** 3 tiers 79/179/197 + plano anual; home mais intuitiva; fotos melhores (placeholders/Unsplash — não gero foto).

## Linha que NÃO cruzo (te protege)
- **Sem depoimentos inventados** (CDC art. 37 = propaganda enganosa; Google penaliza fake reviews).
- **Sem doorway/páginas finas em massa** (Google "scaled content abuse" → desindexa). As páginas extras serão de conteúdo REAL.
- Depoimentos: dos clientes reais (quando tiver) ou enquadre honesto "acesso antecipado".
