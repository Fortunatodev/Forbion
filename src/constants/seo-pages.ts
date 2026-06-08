/**
 * Fonte única das páginas de conteúdo (SEO). Cada página é renderizada pelo
 * template (marketing)/[slug]/page.tsx (SSG), entra no sitemap e no footer.
 * Conteúdo REAL e útil — sem depoimento inventado, sem página fina/doorway.
 */
export interface SeoSection {
    h2: string;
    paragraphs: string[];
    bullets?: string[];
}
export interface SeoFaq {
    q: string;
    a: string;
}
export interface SeoPage {
    slug: string;
    title: string;        // <title> SEO
    description: string;  // meta description
    h1: string;
    lead: string;         // parágrafo de abertura
    sections: SeoSection[];
    faq: SeoFaq[];
    related: string[];    // slugs relacionados (internal linking)
    tier: 1 | 2 | 3;
}

export const SEO_PAGES: SeoPage[] = [
    // ── TIER 1 — alta intenção ────────────────────────────────────────────────
    {
        slug: "software-para-estetica-automotiva",
        tier: 1,
        title: "Software para Estética Automotiva | Agenda, Loja Online e Recorrência — Forbion",
        description: "Sistema de gestão para estética automotiva: agendamento online, clube de assinatura, recall de garantia, vistoria com fotos e relatórios. Planos a partir de R$79/mês.",
        h1: "Software de gestão para estética automotiva",
        lead: "O Forbion reúne agenda, loja de agendamento online, clube de assinatura e relatórios num só lugar — feito para quem toca estética automotiva, detailing e lava-rápido e quer sair do caos do WhatsApp e da planilha.",
        sections: [
            {
                h2: "Tudo que sua estética precisa, sem gambiarra",
                paragraphs: [
                    "Gerir uma estética automotiva no WhatsApp e no caderno funciona até o segundo carro do dia. O Forbion organiza a operação de ponta a ponta: o cliente agenda sozinho pela sua loja online, você acompanha o pátio do dia, fecha a comanda com o pagamento e ainda registra a vistoria do veículo na entrada.",
                ],
                bullets: [
                    "Agenda e agendamento online com a sua loja pública",
                    "Cadastro de clientes, veículos e histórico de serviços",
                    "Catálogo de serviços com preço por porte de veículo",
                    "Pátio do dia, estoque e orçamentos",
                    "Lembrete e confirmação por WhatsApp",
                ],
            },
            {
                h2: "Receita recorrente, não só serviço avulso",
                paragraphs: [
                    "O que separa a estética que cresce da que vive de altos e baixos é a recorrência. Com o clube de assinatura do Forbion você transforma lavagem e manutenção em mensalidade — receita previsível todo mês. E o recall de garantia avisa o cliente automaticamente quando a vitrificação ou o polimento precisa de revisão, trazendo ele de volta sem você correr atrás.",
                ],
            },
            {
                h2: "Decida com número, não no achismo",
                paragraphs: [
                    "Relatórios de faturamento e a análise de retenção (RFM) mostram quem são seus melhores clientes, quem está sumindo e quanto cada serviço rende. No plano Pro, a assistente de IA e a emissão de NF-e deixam a operação ainda mais no automático.",
                ],
            },
        ],
        faq: [
            { q: "O Forbion serve para lava-rápido e detailing?", a: "Sim. O Forbion foi feito para estética automotiva, detailing e lava-rápido — dos serviços simples (lavagem, aspiração) aos de ticket alto (vitrificação, polimento, PPF)." },
            { q: "Quanto custa o Forbion?", a: "São três planos: Essencial a R$79/mês, Premium a R$179/mês e Pro a R$197/mês, com 7 dias grátis para testar. O plano anual sai mais barato." },
            { q: "Preciso instalar alguma coisa?", a: "Não. O Forbion roda no navegador (computador e celular) e o seu cliente agenda pela sua loja online, sem instalar app." },
        ],
        related: ["agenda-online-estetica-automotiva", "clube-de-assinatura-estetica-automotiva", "recall-garantia-estetica-automotiva"],
    },
    {
        slug: "agenda-online-estetica-automotiva",
        tier: 1,
        title: "Agenda Online para Estética Automotiva | Agendamento sem WhatsApp — Forbion",
        description: "Organize a agenda da sua estética automotiva: o cliente agenda sozinho pela loja online, sem troca de mensagens. Horários, duração por serviço e preço por porte.",
        h1: "Agenda online para estética automotiva",
        lead: "Pare de marcar horário no WhatsApp e no caderno. Com a agenda online do Forbion, o cliente vê seus horários livres e agenda sozinho — você só recebe o carro.",
        sections: [
            {
                h2: "O cliente agenda sozinho",
                paragraphs: [
                    "Você divulga o link da sua loja online (na bio do Instagram, no Google, no WhatsApp) e o cliente escolhe o serviço, o horário e confirma. Sem ida e volta de mensagem, sem horário marcado em dois lugares ao mesmo tempo.",
                ],
                bullets: [
                    "Horários livres calculados pela duração de cada serviço",
                    "Bloqueio automático de horário já ocupado",
                    "Duração e preço por porte de veículo (hatch, SUV, picape…)",
                    "Lembrete e confirmação por WhatsApp pra reduzir o no-show",
                ],
            },
            {
                h2: "Sua operação do dia, organizada",
                paragraphs: [
                    "Tudo que entra na agenda aparece no pátio do dia: o que está aguardando, em atendimento e pronto. No fim, você fecha a comanda com a forma de pagamento e o faturamento já entra nos relatórios.",
                ],
            },
        ],
        faq: [
            { q: "O cliente precisa baixar app pra agendar?", a: "Não. Ele agenda pela sua loja online, direto no navegador do celular." },
            { q: "Dá pra ter mais de um profissional na agenda?", a: "Sim. Você pode ter a equipe com horários próprios e até vincular o Google Calendar de cada um." },
            { q: "E se dois clientes tentarem o mesmo horário?", a: "O sistema bloqueia: assim que um horário é reservado, ele some pros outros — sem agendamento duplicado." },
        ],
        related: ["software-para-estetica-automotiva", "loja-online-agendamento-estetica", "recall-garantia-estetica-automotiva"],
    },
    {
        slug: "loja-online-agendamento-estetica",
        tier: 1,
        title: "Loja Online de Agendamento para Estética Automotiva | Link na Bio — Forbion",
        description: "Crie a página pública da sua estética para o cliente agendar e ver serviços e preços. Link pronto pra colocar na bio do Instagram e no Google.",
        h1: "Loja online de agendamento para sua estética",
        lead: "Sua estética com endereço próprio na internet: uma página onde o cliente vê seus serviços, preços e horários — e agenda na hora.",
        sections: [
            {
                h2: "Um link que vende por você",
                paragraphs: [
                    "A loja online é a sua vitrine: serviços, preços, horário de funcionamento e o botão de agendar. Você coloca o link na bio do Instagram, no Google e no WhatsApp, e o cliente resolve sozinho — inclusive fora do horário comercial.",
                ],
                bullets: [
                    "Página própria com sua marca e seus serviços",
                    "Cliente vê preço e duração antes de agendar",
                    "Funciona 24h — agendamento mesmo com você ocupado",
                    "Pronta pra divulgar na bio e nos anúncios",
                ],
            },
        ],
        faq: [
            { q: "A loja online tem custo extra?", a: "Não. Ela já vem em todos os planos do Forbion, inclusive no Essencial." },
            { q: "Posso mostrar preços diferentes por tamanho de carro?", a: "Sim. Você define preço por porte de veículo, então um SUV pode custar mais que um hatch automaticamente." },
        ],
        related: ["agenda-online-estetica-automotiva", "software-para-estetica-automotiva"],
    },
    {
        slug: "clube-de-assinatura-estetica-automotiva",
        tier: 1,
        title: "Clube de Assinatura para Estética Automotiva | Receita Recorrente — Forbion",
        description: "Transforme lavagem e manutenção em receita recorrente. Monte planos mensais e fidelize o cliente com o clube de assinatura do Forbion.",
        h1: "Clube de assinatura para estética automotiva",
        lead: "Receita previsível todo mês, não só serviço avulso. Com o clube de assinatura, seu cliente paga uma mensalidade e você garante o faturamento na largada do mês.",
        sections: [
            {
                h2: "Transforme serviço avulso em mensalidade",
                paragraphs: [
                    "Em vez de torcer pra o cliente voltar, você cria planos — por exemplo, 4 lavagens por mês ou manutenção da vitrificação — e ele assina. A recorrência estabiliza o caixa e aumenta o valor de cada cliente ao longo do tempo.",
                ],
                bullets: [
                    "Planos mensais com serviços inclusos (ex.: 4 lavagens/mês)",
                    "Controle de quantos usos o cliente já consumiu no mês",
                    "Base de assinantes e receita recorrente no relatório",
                ],
            },
            {
                h2: "Fidelização que se paga",
                paragraphs: [
                    "Cliente de assinatura volta mais, indica mais e some menos. Junto com o recall de garantia, o clube cria um motivo recorrente pro cliente estar sempre na sua estética — e não na do concorrente.",
                ],
            },
        ],
        faq: [
            { q: "O clube de assinatura está em qual plano?", a: "A partir do plano Premium (R$179/mês), que inclui recorrência, recall de garantia e relatórios." },
            { q: "Consigo limitar quantas lavagens entram no plano?", a: "Sim. Você define os serviços e a quantidade incluída, e o sistema controla o consumo no mês." },
        ],
        related: ["software-para-estetica-automotiva", "recall-garantia-estetica-automotiva", "relatorios-retencao-clientes-rfm-estetica"],
    },
    {
        slug: "recall-garantia-estetica-automotiva",
        tier: 1,
        title: "Recall de Garantia para Estética Automotiva | Traga o Cliente de Volta — Forbion",
        description: "Avise o cliente automaticamente quando a vitrificação ou o polimento precisa de revisão. Controle de garantia que gera retorno e protege seu serviço.",
        h1: "Recall de garantia para estética automotiva",
        lead: "Serviço de ticket alto como vitrificação e PPF tem prazo de garantia. O Forbion avisa você (e o cliente) na hora certa de chamar pra revisão — e isso vira retorno de receita.",
        sections: [
            {
                h2: "A garantia que trabalha a seu favor",
                paragraphs: [
                    "Você define o prazo de garantia de cada serviço (ex.: vitrificação 180 dias). Quando o prazo se aproxima, o cliente entra na lista de recall — e você o chama de volta pra revisão pelo WhatsApp, com um clique. É o motor de recompra do detailing premium.",
                ],
                bullets: [
                    "Prazo de garantia por serviço",
                    "Lista de retornos a cobrar, atualizada sozinha",
                    "Chamada pelo WhatsApp pra trazer o cliente de volta",
                ],
            },
        ],
        faq: [
            { q: "Como o recall sabe a hora de avisar?", a: "Ao fechar a comanda de um serviço com garantia, o Forbion calcula a data de revisão. Quando ela se aproxima, o cliente aparece na lista de recall." },
            { q: "O recall está em qual plano?", a: "A partir do Premium (R$179/mês), junto com clube de assinatura e relatórios." },
        ],
        related: ["clube-de-assinatura-estetica-automotiva", "software-para-estetica-automotiva"],
    },
];

export const SEO_SLUGS = SEO_PAGES.map((p) => p.slug);
export const getSeoPage = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);
