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

    // ── TIER 2 — consideração ──────────────────────────────────────────────────
    {
        slug: "vistoria-veiculo-com-fotos-assinatura",
        tier: 2,
        title: "Vistoria de Veículo com Fotos e Assinatura | Proteção contra Reclamação — Forbion",
        description: "Registre o estado do veículo na entrada com fotos e assinatura do cliente. Evite discussão sobre arranhão que já estava lá e profissionalize a entrega.",
        h1: "Vistoria do veículo com fotos e assinatura",
        lead: "Toda estética já passou por isso: o cliente jura que o risco não estava lá antes. A vistoria de entrada do Forbion registra o estado do carro com fotos e assinatura — e acaba com a discussão.",
        sections: [
            {
                h2: "Prova do estado de entrada",
                paragraphs: [
                    "Na chegada do veículo, você tira fotos, marca as avarias no diagrama do carro e colhe a assinatura do cliente. Fica tudo registrado e ligado àquele atendimento. Quando o serviço fecha, a vistoria é travada — vira um registro imutável que protege você juridicamente.",
                ],
                bullets: [
                    "Fotos do estado de chegada",
                    "Marcação de avarias (risco, amassado, arranhão) no diagrama",
                    "Assinatura do cliente na tela",
                    "Trava após o fechamento (registro imutável)",
                ],
            },
        ],
        faq: [
            { q: "A vistoria está em qual plano?", a: "No plano Pro (R$197/mês), junto com a assistente de IA e a emissão de NF-e." },
            { q: "Serve como prova contra reclamação?", a: "Sim. Com fotos, marcação de avarias e assinatura do cliente travadas no fechamento, você tem o registro do estado de entrada do veículo." },
        ],
        related: ["software-para-estetica-automotiva", "assistente-ia-estetica-automotiva"],
    },
    {
        slug: "relatorios-retencao-clientes-rfm-estetica",
        tier: 2,
        title: "Relatórios e Retenção de Clientes (RFM) para Estética Automotiva — Forbion",
        description: "Saiba quem são seus melhores clientes, quem está sumindo e quanto cada serviço fatura. Relatórios e análise RFM para decidir na sua estética automotiva.",
        h1: "Relatórios e retenção de clientes (RFM)",
        lead: "Faturar bem é importante, mas saber DE ONDE vem o faturamento e quem está prestes a sumir é o que faz a estética crescer com previsibilidade. É isso que os relatórios do Forbion entregam.",
        sections: [
            {
                h2: "Quem volta, quem some, quanto rende",
                paragraphs: [
                    "A análise de retenção (RFM — recência, frequência e valor) separa seus clientes em grupos: os fiéis, os que estão esfriando e os que já sumiram. Você vê a receita em risco e a lista de clientes pra recuperar — e age antes de perder.",
                ],
                bullets: [
                    "Faturamento por período e por serviço",
                    "Segmentação RFM (melhores clientes x em risco)",
                    "Receita em risco e clientes a recuperar",
                ],
            },
        ],
        faq: [
            { q: "Preciso entender de dados pra usar?", a: "Não. O Forbion já mostra os grupos prontos e a lista de quem chamar de volta — é só agir." },
            { q: "Relatórios estão em qual plano?", a: "A partir do Premium (R$179/mês)." },
        ],
        related: ["clube-de-assinatura-estetica-automotiva", "recall-garantia-estetica-automotiva"],
    },
    {
        slug: "orcamento-estoque-preco-por-porte-estetica",
        tier: 2,
        title: "Orçamento, Estoque e Preço por Porte para Estética Automotiva — Forbion",
        description: "Monte orçamentos rápidos, controle insumos e cobre o preço certo por porte do veículo. Gestão operacional da estética automotiva no Forbion.",
        h1: "Orçamento, estoque e preço por porte",
        lead: "A operação no controle: orçamento de ticket alto montado em segundos, estoque de insumos sob controle e o preço certo pra cada tamanho de veículo.",
        sections: [
            {
                h2: "Cobre o preço certo por veículo",
                paragraphs: [
                    "Vitrificar um SUV dá mais trabalho que um hatch — e o preço tem que refletir isso. No Forbion você define o valor por porte do veículo, e o sistema já cobra o certo no agendamento e no orçamento.",
                ],
                bullets: [
                    "Preço por porte (hatch, sedan, SUV, picape)",
                    "Orçamentos de serviços de ticket alto, enviáveis por WhatsApp",
                    "Estoque de insumos com entrada/saída e alerta de mínimo",
                ],
            },
        ],
        faq: [
            { q: "Dá pra enviar o orçamento pro cliente?", a: "Sim. Você monta o orçamento com os itens e envia a proposta pelo WhatsApp; depois acompanha aprovado/recusado/vendido." },
            { q: "Em qual plano está?", a: "Orçamento, estoque e preço por porte já estão no Essencial (R$79/mês)." },
        ],
        related: ["software-para-estetica-automotiva", "agenda-online-estetica-automotiva"],
    },
    {
        slug: "assistente-ia-estetica-automotiva",
        tier: 2,
        title: "Assistente de IA para Estética Automotiva (Carla) | Plano Pro — Forbion",
        description: "Conheça a Carla, a assistente de IA do Forbion no plano Pro, que ajuda no atendimento e nas dúvidas dos clientes da sua estética automotiva.",
        h1: "Carla, a assistente de IA do Forbion",
        lead: "A Carla é a assistente de inteligência artificial do Forbion, disponível no plano Pro. Ela ajuda a tirar dúvidas de serviço e a orientar o atendimento — uma camada de IA nativa dentro do sistema.",
        sections: [
            {
                h2: "IA dentro da sua operação",
                paragraphs: [
                    "Diferente de ferramentas soltas, a Carla vive dentro do Forbion, com o contexto da sua estética. Ela ajuda no atendimento e nas dúvidas do dia a dia. É um recurso do plano Pro — pensado pra evoluir junto com a sua operação.",
                ],
            },
        ],
        faq: [
            { q: "A Carla está em qual plano?", a: "No plano Pro (R$197/mês)." },
            { q: "Ela substitui meu atendimento?", a: "Não — ela é uma ajuda dentro do sistema. O atendimento continua seu; a Carla acelera e tira dúvidas." },
        ],
        related: ["software-para-estetica-automotiva", "vistoria-veiculo-com-fotos-assinatura"],
    },

    // ── TIER 3 — comparativo / marca ───────────────────────────────────────────
    {
        slug: "forbion-vs-cera-comparativo",
        tier: 3,
        title: "Forbion vs CERA: Comparativo Honesto de Software para Estética Automotiva",
        description: "Comparação transparente entre Forbion e CERA: preço, IA, recorrência e o que cada um faz melhor — inclusive onde o concorrente leva vantagem.",
        h1: "Forbion vs CERA: comparativo honesto",
        lead: "Em vez de só dizer que somos melhores, aqui vai uma comparação transparente — inclusive nos pontos onde a CERA tem vantagem. Você decide com a informação na mesa.",
        sections: [
            {
                h2: "Onde o Forbion se destaca",
                paragraphs: [
                    "O Forbion aposta em três coisas: preço transparente e publicado (a partir de R$79/mês), recorrência embutida com clube de assinatura, e uma assistente de IA nativa no plano Pro. Some a isso a vistoria do veículo com fotos e assinatura e o recall de garantia, e você tem uma operação pensada pro detailing que quer crescer com previsibilidade.",
                ],
            },
            {
                h2: "Onde a CERA pode ser melhor pra você",
                paragraphs: [
                    "Sendo honesto: ferramentas mais maduras costumam ter mais profundidade em alguns relatórios financeiros e contábeis. Se o seu critério número um é volume de funcionalidade financeira, vale comparar de perto. Se é preço claro, recorrência e IA, o Forbion tende a ganhar. Não citamos o preço do concorrente porque ele não é publicado abertamente — confirme direto com eles.",
                ],
            },
        ],
        faq: [
            { q: "Posso testar o Forbion antes de migrar?", a: "Sim, são 7 dias grátis. Dá pra rodar na sua operação real antes de decidir." },
            { q: "Quanto custa o Forbion?", a: "Essencial R$79, Premium R$179 e Pro R$197 por mês, com plano anual mais barato." },
        ],
        related: ["por-que-forbion", "software-para-estetica-automotiva"],
    },
    {
        slug: "por-que-forbion",
        tier: 3,
        title: "Por que Forbion | Software de Estética Automotiva com Preço Aberto e IA",
        description: "Por que escolher o Forbion: preço transparente, clube de recorrência e assistente de IA pensados para estética automotiva.",
        h1: "Por que escolher o Forbion",
        lead: "O Forbion nasceu pra ser o sistema simples, transparente e completo que a estética automotiva brasileira merece — sem letra miúda e sem enrolação.",
        sections: [
            {
                h2: "Três motivos que fazem diferença",
                paragraphs: [
                    "Preço aberto: você vê quanto custa antes de falar com vendedor. Recorrência de verdade: o clube de assinatura transforma cliente avulso em mensalidade. E uma operação completa: agenda, loja online, pátio, vistoria, recall e relatórios num lugar só.",
                ],
                bullets: [
                    "Preço transparente, publicado, a partir de R$79/mês",
                    "Clube de assinatura pra receita recorrente",
                    "IA (Carla) e NF-e no plano Pro",
                    "7 dias grátis pra testar na sua operação",
                ],
            },
        ],
        faq: [
            { q: "O Forbion é novo? Posso confiar?", a: "É um sistema novo e em evolução rápida, com suporte próximo. Por isso o teste grátis de 7 dias existe — pra você validar na prática antes de assinar." },
        ],
        related: ["forbion-vs-cera-comparativo", "software-para-estetica-automotiva"],
    },
];

export const SEO_SLUGS = SEO_PAGES.map((p) => p.slug);
export const getSeoPage = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);
