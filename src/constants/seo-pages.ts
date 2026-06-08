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

    // ── Lote 2 — use-cases (lava-rápido, detailing), comissão, guias e features ──
    {
        slug: "sistema-para-lava-rapido",
        tier: 1,
        title: "Sistema para Lava-Rápido | Agenda, Fila do Pátio e Recorrência — Forbion",
        description: "Sistema de gestão para lava-rápido e lava-jato: agendamento online, fila do pátio, clube de lavagem mensal, preço por porte e relatórios. A partir de R$79/mês.",
        h1: "Sistema para lava-rápido e lava-jato",
        lead: "Lava-rápido é volume: muitos carros, fila no pátio e ticket apertado. O Forbion organiza a entrada, o agendamento e o pagamento — e ainda transforma a lavagem avulsa em mensalidade com o clube de assinatura.",
        sections: [
            {
                h2: "Controle a fila do pátio, não só a agenda",
                paragraphs: ["No lava-rápido o problema não é marcar horário — é dar conta do movimento sem perder carro e sem confusão de quem chegou primeiro. No Forbion, tudo que entra (agendado ou na hora) cai no pátio do dia, com o status de cada veículo: aguardando, em lavagem e pronto. No fim, você fecha a comanda com a forma de pagamento e o valor já entra no faturamento.", "E o cliente que prefere marcar antes agenda sozinho pela sua loja online, sem ocupar ninguém no telefone — ideal pra horário de pico de fim de semana."],
                bullets: ["Pátio do dia com aguardando / em lavagem / pronto", "Agendamento online pra evitar fila e furo de horário", "Fechamento de comanda com a forma de pagamento", "Cadastro de cliente e veículo pra atender mais rápido na volta"],
            },
            {
                h2: "Preço por porte: cobre o certo de cada carro",
                paragraphs: ["Lavar uma picape grande dá mais trabalho que um hatch — e o caixa precisa refletir isso. No Forbion você define o preço por porte do veículo (hatch, sedan, SUV, picape) e o sistema já aplica o valor certo no agendamento e no fechamento, sem você recalcular na cabeça a cada carro."],
            },
            {
                h2: "Clube de lavagem: receita que entra todo mês",
                paragraphs: ["O que tira o lava-rápido da montanha-russa de movimento é a recorrência. Com o clube de assinatura você cria planos como '4 lavagens por mês' ou 'lavagem ilimitada do mês', o cliente paga a mensalidade e o sistema controla quantos usos ele já consumiu. É faturamento garantido na largada do mês e cliente que sempre volta na sua mão, não na do concorrente da esquina."],
                bullets: ["Planos mensais com quantidade de lavagens inclusa", "Controle de quantos usos o cliente já gastou no mês", "Receita recorrente acompanhada no relatório"],
            },
        ],
        faq: [
            { q: "O Forbion serve mesmo pra lava-rápido de muito volume?", a: "Sim. O pátio do dia foi feito pra acompanhar vários carros ao mesmo tempo com status (aguardando, em lavagem, pronto), e o cliente pode agendar online pra desafogar o pico do fim de semana." },
            { q: "Dá pra cobrar valores diferentes por tamanho de carro?", a: "Sim. Você define preço por porte do veículo e o sistema cobra automaticamente o valor de cada tamanho no agendamento e na comanda." },
            { q: "Consigo montar um plano de lavagem mensal?", a: "Sim, com o clube de assinatura (a partir do plano Premium). Você define os serviços e a quantidade inclusa e o sistema controla o consumo do mês." },
            { q: "Quanto custa?", a: "Essencial R$79, Premium R$179 e Pro R$197 por mês, com 7 dias grátis e plano anual mais barato." },
        ],
        related: ["software-para-estetica-automotiva", "clube-de-assinatura-estetica-automotiva", "agenda-online-estetica-automotiva"],
    },
    {
        slug: "software-para-detailing-automotivo",
        tier: 1,
        title: "Software para Detailing Automotivo | Orçamento, Recall e Vistoria — Forbion",
        description: "Software de gestão para detailing e detalhamento automotivo: orçamento de ticket alto, recall de garantia de vitrificação, vistoria com fotos e clube de manutenção.",
        h1: "Software para detailing e detalhamento automotivo",
        lead: "Detailing é ticket alto, garantia longa e cliente exigente. O Forbion cobre o ciclo inteiro do serviço premium: orçamento profissional, vistoria de entrada com fotos, recall de garantia da vitrificação e clube de manutenção pra trazer o cliente de volta.",
        sections: [
            {
                h2: "Do orçamento ao recall: o ciclo do serviço premium",
                paragraphs: ["Vitrificação, polimento técnico, PPF e higienização interna não se vendem no balcão — se vendem com orçamento. No Forbion você monta a proposta com os itens, define o preço por porte do veículo e envia pelo WhatsApp, acompanhando depois o que foi aprovado, recusado ou fechado.", "Depois do serviço entregue, o recall de garantia faz o trabalho de recompra: você define o prazo de garantia de cada serviço (ex.: vitrificação 180 dias) e, quando a data se aproxima, o cliente entra automaticamente na lista de retornos a cobrar — e você o chama pra revisão com um clique."],
                bullets: ["Orçamento de ticket alto enviável por WhatsApp (aprovado / recusado / vendido)", "Preço por porte do veículo (hatch, SUV, picape…)", "Prazo de garantia por serviço e lista de recall automática", "Estoque de insumos (ceras, selantes, microfibras) com alerta de mínimo"],
            },
            {
                h2: "Vistoria com fotos e assinatura: prova antes de encostar no carro",
                paragraphs: ["No detailing o carro fica horas na sua mão e qualquer arranhão vira discussão. A vistoria de entrada do Forbion registra o estado do veículo com fotos, marca as avarias (risco, amassado, arranhão) no diagrama do carro e colhe a assinatura do cliente na tela. Ao fechar o serviço, a vistoria é travada e vira um registro imutável que protege você se o cliente reclamar de algo que já estava lá."],
            },
            {
                h2: "Clube de manutenção: recorrência no detailing",
                paragraphs: ["Quem vitrifica precisa manter. Com o clube de assinatura você cria planos de manutenção mensal da proteção e transforma o serviço pontual em receita recorrente — combinado com o recall, é o motor que faz o cliente premium voltar sempre. A análise de retenção (RFM) ainda mostra seus melhores clientes e quem está esfriando, pra você agir antes de perder."],
            },
        ],
        faq: [
            { q: "O Forbion controla a garantia da vitrificação e do PPF?", a: "Sim. Você define o prazo de garantia de cada serviço e o cliente entra automaticamente na lista de recall quando a revisão se aproxima — funciona como motor de recompra no detailing premium." },
            { q: "A vistoria com fotos e assinatura está em qual plano?", a: "No plano Pro (R$197/mês). Ela registra fotos, marcação de avarias e a assinatura do cliente, e trava esse registro no fechamento do serviço." },
            { q: "Dá pra enviar orçamento de ticket alto pro cliente?", a: "Sim. Você monta o orçamento com os itens, envia a proposta pelo WhatsApp e acompanha o status (aprovado, recusado, vendido). Orçamento e estoque já estão no plano Essencial." },
            { q: "Tem como criar plano de manutenção recorrente?", a: "Sim, com o clube de assinatura a partir do plano Premium (R$179/mês), que também inclui recall de garantia e relatórios." },
        ],
        related: ["recall-garantia-estetica-automotiva", "vistoria-veiculo-com-fotos-assinatura", "orcamento-estoque-preco-por-porte-estetica"],
    },
    {
        slug: "controle-comissao-repasse-funcionario-estetica",
        tier: 2,
        title: "Controle de Comissão e Repasse de Funcionário em Estética Automotiva — Forbion",
        description: "Calcule a comissão de cada funcionário automaticamente por serviço, acompanhe o que está a pagar e marque os repasses como pagos. Sem planilha no fim do mês.",
        h1: "Controle de comissão e repasse de funcionário",
        lead: "No fim do mês a conta da comissão sempre dá dor de cabeça: quem fez o quê, quanto recebe e quanto já foi pago. O Forbion calcula o repasse de cada funcionário automaticamente a cada serviço fechado — você só confere e marca como pago.",
        sections: [
            {
                h2: "Comissão calculada sozinha, serviço a serviço",
                paragraphs: ["Você define o percentual de repasse padrão de cada serviço (ex.: 30% na higienização interna) e, quando um agendamento atendido por um funcionário é fechado, o Forbion já cria o repasse: o valor é calculado sobre o preço do serviço fechado, sem você abrir planilha. Serviço executado pelo próprio dono não gera repasse.", "Precisa de exceção pra um funcionário específico? Dá pra cadastrar uma regra própria pra ele num serviço — que sobrepõe o percentual padrão. Assim o veterano pode receber um percentual diferente do iniciante no mesmo serviço."],
                bullets: ["Percentual de repasse padrão por serviço", "Regra de exceção por funcionário (sobrepõe o padrão)", "Cálculo automático no fechamento do agendamento", "Sem repasse quando o dono executa o serviço"],
            },
            {
                h2: "Acompanhe o que está a pagar e quite com um clique",
                paragraphs: ["O relatório de repasses mostra, por funcionário, o total a pagar (pendente), o que já foi pago e o que foi estornado. Cada repasse aparece com o serviço, a data do agendamento, o preço base, o percentual e o valor — e você marca tudo o que está pendente como pago de uma vez, registrando a data. Se um agendamento é cancelado, os repasses pendentes daquele atendimento viram estornados automaticamente, então você não paga por serviço que não aconteceu."],
                bullets: ["Totais por funcionário: a pagar, pago e estornado", "Marcar repasses pendentes como pagos com a data registrada", "Estorno automático quando o agendamento é cancelado", "Exportação em CSV pra fechar com o financeiro"],
            },
            {
                h2: "Transparência pra você e pra equipe",
                paragraphs: ["Com o repasse registrado por serviço, a conversa com a equipe deixa de ser no 'eu acho'. Cada funcionário tem o histórico do que executou e do que recebe, e você fecha o mês com número, não com memória. É o tipo de organização que segura bom profissional e evita ruído sobre quanto cada um ganhou."],
            },
        ],
        faq: [
            { q: "Como o Forbion calcula a comissão?", a: "Você define o percentual de repasse de cada serviço. Quando um agendamento atendido por um funcionário é fechado, o sistema calcula o valor sobre o preço do serviço e registra o repasse como pendente, automaticamente." },
            { q: "Posso dar percentual diferente pra cada funcionário?", a: "Sim. Além do percentual padrão por serviço, você pode cadastrar uma regra de exceção por funcionário num serviço específico, que sobrepõe o padrão." },
            { q: "E se o cliente cancelar o atendimento?", a: "Os repasses pendentes daquele agendamento viram estornados automaticamente, então você não paga comissão por serviço que não foi realizado. Repasses já pagos permanecem pagos." },
            { q: "Consigo ver quanto tenho a pagar e marcar como pago?", a: "Sim. O relatório de repasses mostra o total a pagar por funcionário, e você marca os pendentes como pagos com a data registrada. Também dá pra exportar em CSV." },
        ],
        related: ["software-para-estetica-automotiva", "relatorios-retencao-clientes-rfm-estetica", "orcamento-estoque-preco-por-porte-estetica"],
    },
    {
        slug: "como-precificar-servicos-de-estetica-automotiva",
        tier: 3,
        title: "Como Precificar Serviços de Estética Automotiva — Guia Forbion",
        description: "Aprenda a precificar lavagem, polimento e vitrificação com base na hora técnica, no custo de material e na margem certa. Guia prático com fórmula e exemplos.",
        h1: "Como precificar serviços de estética automotiva",
        lead: "Precificar no olhômetro é o erro que faz a estética trabalhar muito e sobrar pouco. Este guia mostra o método que profissionais sérios usam: descobrir sua hora técnica, somar o material e aplicar a margem certa — para cada serviço dar lucro de verdade.",
        sections: [
            {
                h2: "Comece pela sua hora técnica (o número que muda tudo)",
                paragraphs: ["Antes de definir o preço de qualquer serviço, você precisa saber quanto custa uma hora do seu box aberto. Se não sabe esse número, não sabe se está ganhando ou perdendo dinheiro — está apenas chutando.", "A fórmula é simples: some seus custos fixos (aluguel, luz, água, internet, sistema), o seu pró-labore (quanto você precisa tirar por mês) e a meta de lucro do negócio. Divida esse total pelas horas que você realmente consegue faturar no mês."],
                bullets: ["Exemplo: R$4.000 de custo fixo + R$4.000 de pró-labore + R$2.000 de lucro = R$10.000/mês", "Com 160 horas faturáveis no mês, a hora técnica fica em R$62,50", "Um serviço que leva 10 horas não pode custar menos de R$625 só para cobrir a estrutura — antes de pagar o material", "Atenção: \"horas faturáveis\" não é o mês inteiro; desconte tempo de orçamento, limpeza e administração"],
            },
            {
                h2: "Some o material e aplique a margem",
                paragraphs: ["Com a hora técnica na mão, calcule o material consumido em cada serviço de forma proporcional: massa de polir em ml, desgaste das boinas, fitas de fronteira, vitrificador, produtos de higienização interna. Esse é o seu custo variável, e ele muda de carro para carro.", "Sobre a soma de hora técnica + material, aplique sua margem de lucro. No setor, margens de 10% a 30% são comuns em serviços de mão de obra intensiva, mas os serviços de proteção de pintura (vitrificação e coating cerâmico) costumam ter as maiores margens — em média perto de 65% segundo a ABEx — porque o que pesa é a técnica, não o insumo. É por isso que vale priorizar esses serviços de ticket alto."],
                bullets: ["Lavagem simples: ticket baixo, margem apertada, alto volume — bom para fidelizar e gerar fluxo", "Polimento técnico: muitas horas, preço alto, exige precisão no cálculo de tempo", "Vitrificação / coating: maior margem do portfólio — onde está o lucro de verdade"],
            },
            {
                h2: "Cobre por porte e revise os preços com dados",
                paragraphs: ["Um SUV ou uma picape consomem mais produto e mais tempo que um hatch — então não podem custar o mesmo. Trabalhar com preço por porte de veículo é o jeito honesto de proteger sua margem sem afastar o cliente do carro pequeno.", "Por fim, preço não é uma decisão de uma vez só. Custo de insumo sobe, sua agenda lota, sua técnica melhora. Reveja a tabela a cada poucos meses olhando o que cada serviço realmente rende e quanto tempo de fato leva — não a estimativa que você fez no começo."],
            },
        ],
        faq: [
            { q: "Qual a margem ideal para estética automotiva?", a: "Depende do serviço. Em mão de obra intensiva, margens de 10% a 30% são comuns. Já proteção de pintura (vitrificação e coating) costuma ter as maiores margens do setor, em média perto de 65%, segundo a ABEx. O segredo é calcular por serviço, não usar uma margem única para tudo." },
            { q: "Como saber quanto tempo um serviço realmente leva?", a: "Cronometre. A maioria precifica pela estimativa do começo e nunca confere. Registrar o tempo real de cada serviço (entrada e saída do veículo) revela onde você está cobrando pouco. Um sistema de gestão com pátio do dia facilita esse acompanhamento." },
            { q: "Devo cobrar o mesmo preço para qualquer carro?", a: "Não. SUVs e picapes consomem mais tempo e mais material que carros pequenos. Trabalhar com preço por porte de veículo protege sua margem e mantém o preço justo para o cliente do carro pequeno." },
            { q: "Preço baixo atrai mais cliente?", a: "Atrai volume, mas pode mascarar prejuízo. Preço baixo sem saber a hora técnica é a forma mais comum de uma estética parecer cheia e não sobrar dinheiro no fim do mês. Calcule primeiro, desconte depois — só onde a margem permite." },
        ],
        related: ["orcamento-estoque-preco-por-porte-estetica", "relatorios-retencao-clientes-rfm-estetica", "software-para-estetica-automotiva"],
    },
    {
        slug: "como-conseguir-mais-clientes-para-estetica-automotiva",
        tier: 3,
        title: "Como Conseguir Mais Clientes para Estética Automotiva — Guia Forbion",
        description: "Estratégias reais para atrair e fidelizar clientes na estética automotiva: Google Meu Negócio, Instagram com antes e depois, indicação, parcerias e recorrência.",
        h1: "Como conseguir mais clientes para estética automotiva",
        lead: "Captar cliente não é sorte: é presença onde ele procura, prova de qualidade e um motivo para voltar. Este guia reúne o que funciona de verdade na estética automotiva — do Google Meu Negócio à recorrência — sem fórmula mágica.",
        sections: [
            {
                h2: "Apareça onde o cliente já procura",
                paragraphs: ["A maioria das buscas por estética automotiva é local: as pessoas procuram \"estética automotiva perto de mim\" ou \"polimento + nome da cidade\". Se você não está nesses resultados, não existe para esse cliente.", "Os dois canais que mais retornam para o esforço investido são o Google Meu Negócio e o Instagram. O perfil no Google coloca sua estética no Maps e nas buscas locais — de graça. O Instagram é a sua vitrine de prova: o antes e depois é o conteúdo que mais converte no setor."],
                bullets: ["Cadastre e mantenha o Google Meu Negócio (fotos, horário, serviços, avaliações)", "Poste antes e depois e vídeos de transformação — é o que prende a atenção", "Tenha uma rotina: 3 a 5 posts no feed por semana, stories diários, ao menos 1 vídeo semanal", "Coloque um link de agendamento na bio para o interessado virar cliente na hora"],
            },
            {
                h2: "Transforme cada cliente em mais clientes",
                paragraphs: ["O cliente mais barato de conquistar é o que veio por indicação de quem já confia em você. Crie um programa simples: desconto ou um brinde (uma higienização, uma aspiração) para quem trouxer um amigo. Combine isso com pacotes — vitrificação + revisão, lavagem + higienização — que aumentam o ticket e dão um motivo para o cliente fechar mais.", "Parcerias locais também rendem: postos de combustível, oficinas, concessionárias e revendas de seminovos atendem exatamente o seu público. Um acordo de indicação mútua amplia seu alcance sem custo de anúncio."],
                bullets: ["Programa de indicação com recompensa clara para quem indica", "Pacotes combinados que elevam o ticket médio", "Parcerias com postos, oficinas, revendas e estacionamentos", "Anúncios pagos segmentados por região e interesse (quando já houver fluxo orgânico)"],
            },
            {
                h2: "Atrair é metade — reter é onde está o dinheiro",
                paragraphs: ["Conquistar cliente novo custa caro. O crescimento sustentável vem de fazer o cliente voltar. Dois mecanismos funcionam muito bem na estética: o recall de garantia, que lembra o cliente automaticamente quando a vitrificação ou o polimento precisa de revisão, e o clube de assinatura, que transforma lavagem e manutenção em mensalidade.", "Para saber quem trazer de volta, use os dados que você já tem: quem foi seu melhor cliente, quem está sumindo, quem não aparece há meses. Uma análise de retenção (RFM) aponta exatamente quem merece um contato — e evita você gastar esforço com quem nunca mais voltaria mesmo."],
            },
        ],
        faq: [
            { q: "Qual o canal que mais traz cliente para estética automotiva?", a: "Para a maioria, o Google Meu Negócio (busca local e Maps) e o Instagram com antes e depois são os que mais retornam. O Google captura quem já está procurando; o Instagram gera desejo e prova de qualidade. Os dois são de baixo custo." },
            { q: "Vale a pena investir em anúncios pagos?", a: "Vale, mas depois de organizar o básico: perfil no Google ativo, Instagram com conteúdo e um link de agendamento funcionando. Sem isso, o anúncio leva o cliente para um lugar que não converte. Comece pelo orgânico, escale com pago." },
            { q: "Como faço o cliente voltar?", a: "Dê motivos automáticos: recall de garantia avisa quando a vitrificação ou o polimento precisa de revisão, e um clube de assinatura transforma o cliente avulso em mensalidade. Reter custa muito menos que conquistar." },
            { q: "Como saber quais clientes contatar para reativar?", a: "Use seus dados. Uma análise de retenção (RFM) mostra quem comprou mais, há quanto tempo e com que frequência — assim você foca o esforço em quem tem chance real de voltar, em vez de mandar mensagem para todo mundo." },
        ],
        related: ["loja-online-agendamento-estetica", "clube-de-assinatura-estetica-automotiva", "relatorios-retencao-clientes-rfm-estetica"],
    },
    {
        slug: "como-montar-clube-de-assinatura-lavagem-estetica-automotiva",
        tier: 3,
        title: "Como Montar um Clube de Assinatura de Lavagem e Estética — Forbion",
        description: "Passo a passo para criar um clube de assinatura de lavagem e estética automotiva: planos, preços, cobrança recorrente e como reter assinantes com previsibilidade.",
        h1: "Como montar um clube de assinatura de lavagem e estética",
        lead: "O clube de assinatura é o que separa a estética que vive de altos e baixos da que tem receita previsível todo mês. Este guia mostra como montar planos, definir preços e manter assinantes — transformando lavagem e manutenção em mensalidade.",
        sections: [
            {
                h2: "Por que recorrência muda o jogo",
                paragraphs: ["Serviço avulso depende do cliente decidir voltar toda vez. A assinatura inverte isso: o cliente paga todo mês e tem motivo para usar o serviço com frequência. Para você, isso vira faturamento previsível — você sabe quanto entra antes do mês começar e planeja a operação com base nisso.", "O modelo já provou que funciona no Brasil. Redes de lavagem por assinatura oferecem planos a partir da casa dos R$150/mês por carro e somam milhares de assinantes; algumas projetam crescimento de faturamento acima de 20% só com a recorrência. O mesmo princípio funciona para a estética de bairro — só precisa de planos bem desenhados."],
            },
            {
                h2: "Como desenhar os planos",
                paragraphs: ["Comece simples: dois ou três planos, não dez. A ideia é dar uma escada de valor clara, em que o cliente sobe de plano conforme cria o hábito. Defina o que cada plano inclui, com que frequência e quais limites.", "Os modelos que mais funcionam combinam frequência fixa com benefícios exclusivos para assinante — preço fechado, prioridade na agenda e desconto em serviços extras como vitrificação."],
                bullets: ["Plano básico: lavagens simples mensais (ex.: 4 por mês), foco em volume e hábito", "Plano intermediário: lavagens + aspiração/higienização leve inclusa", "Plano completo: lavagens + benefícios e desconto em serviços de ticket alto", "Defina limites claros (quantidade/mês, porte do veículo) para proteger sua margem", "Considere preço por porte: SUV e picape consomem mais e podem ter plano próprio"],
            },
            {
                h2: "Cobrança, controle e retenção",
                paragraphs: ["O calcanhar de aquiles de qualquer clube é a cobrança recorrente. Cobrar no boleto manual ou cobrar cada um no WhatsApp vira um inferno administrativo e gera inadimplência. Você precisa de cobrança automática, com renovação mensal e visão de quem está em dia, vencendo e atrasado.", "Reter assinante é tão importante quanto vendê-lo. Acompanhe quem está usando pouco o plano (risco de cancelar) e quem usa muito (candidato a subir de plano). Com a operação e os dados num só lugar — agenda, assinaturas e relatórios — você gerencia o clube sem planilha paralela e sabe exatamente quanto a recorrência representa do seu faturamento."],
            },
        ],
        faq: [
            { q: "Quantos planos devo oferecer no clube?", a: "Comece com dois ou três. Muitos planos confundem e travam a decisão. Uma escada simples — básico, intermediário e completo — deixa claro o que o cliente ganha ao subir de nível e facilita a venda." },
            { q: "Quanto cobrar na assinatura?", a: "Parta da sua hora técnica e do custo do serviço incluso, e some um valor que ainda compense pela frequência maior. No mercado, planos de lavagem por assinatura começam na casa dos R$150/mês por carro, mas o número certo depende dos seus custos e do que cada plano inclui. Defina limites para não estourar a margem." },
            { q: "Como cobro a mensalidade sem virar bagunça?", a: "Com cobrança recorrente automática. Cobrar no boleto manual ou pelo WhatsApp gera atraso e trabalho. Um sistema de clube de assinatura renova a mensalidade, mostra quem está em dia, a vencer ou atrasado, e reduz a inadimplência." },
            { q: "Vale a pena ter clube de assinatura numa estética pequena?", a: "Sim — talvez seja onde mais faz diferença. Negócio pequeno sofre com a oscilação do faturamento; a recorrência traz a base de receita previsível que sustenta os meses fracos. Não precisa de mil assinantes para sentir o efeito." },
        ],
        related: ["clube-de-assinatura-estetica-automotiva", "recall-garantia-estetica-automotiva", "software-para-estetica-automotiva"],
    },
    {
        slug: "emissao-nfe-nota-fiscal-estetica-automotiva",
        tier: 2,
        title: "Emissão de NF-e para Estética Automotiva | Nota Fiscal no Pro — Forbion",
        description: "Emita nota fiscal direto do sistema da sua estética automotiva. NF-e ligada ao atendimento, sem retrabalho e sem sair do Forbion. Recurso do plano Pro.",
        h1: "Emissão de NF-e para estética automotiva",
        lead: "Emitir nota fiscal não precisa ser uma segunda planilha nem uma ida ao contador a cada serviço. No plano Pro do Forbion, a emissão de NF-e fica dentro do mesmo sistema onde você já agenda, fecha a comanda e controla o caixa — sem digitar tudo de novo em outro lugar.",
        sections: [
            {
                h2: "Nota fiscal sem sair do sistema",
                paragraphs: ["Quem toca estética automotiva, detailing ou lava-rápido sabe o problema: o atendimento fecha num lugar e a nota é emitida em outro, à mão, no fim do dia. Isso gera erro, retrabalho e nota esquecida. No Forbion, a emissão de NF-e fica integrada à operação — o serviço que você atendeu vira a base da nota, sem redigitação.", "Com a fiscal dentro do fluxo, você profissionaliza o atendimento de clientes que exigem nota (frotas, empresas, locadoras) e mantém a casa em ordem sem virar um processo paralelo manual."],
                bullets: ["Emissão ligada ao atendimento já registrado no sistema", "Menos retrabalho: o que foi vendido alimenta a nota", "Atende clientes que exigem nota (frotas, PJ, locadoras)", "Tudo no mesmo lugar onde você já gerencia a estética"],
            },
            {
                h2: "Recurso do plano Pro, junto com IA e vistoria",
                paragraphs: ["A emissão de NF-e faz parte do plano Pro (R$197/mês), no mesmo pacote da assistente de IA (Carla) e da vistoria do veículo com fotos e assinatura. É o plano pensado pra estética que já tem volume e precisa de uma operação mais completa e profissional, com a parte fiscal resolvida dentro da rotina.", "Se hoje você ainda não emite nota ou faz isso por fora, o Pro permite trazer essa etapa pra dentro do sistema e parar de tratar fiscal como um processo solto."],
            },
        ],
        faq: [
            { q: "A emissão de NF-e está em qual plano?", a: "No plano Pro (R$197/mês), junto com a assistente de IA (Carla) e a vistoria do veículo com fotos e assinatura." },
            { q: "Preciso usar outro programa pra emitir nota?", a: "A proposta do Forbion é manter a emissão de NF-e dentro do próprio sistema, ligada ao atendimento que você já registrou — sem ter que redigitar tudo num programa separado." },
            { q: "Posso testar antes de assinar o Pro?", a: "Sim. O Forbion tem 7 dias grátis, então dá pra conhecer os recursos do plano antes de decidir." },
            { q: "Estética automotiva precisa emitir nota fiscal?", a: "Depende do enquadramento do seu negócio e do tipo de cliente. Clientes empresariais e frotas costumam exigir nota; vale confirmar a obrigatoriedade com o seu contador para o seu caso." },
        ],
        related: ["assistente-ia-estetica-automotiva", "vistoria-veiculo-com-fotos-assinatura", "software-para-estetica-automotiva"],
    },
    {
        slug: "preco-por-porte-veiculo-estetica-automotiva",
        tier: 2,
        title: "Preço por Porte de Veículo na Estética Automotiva | Cobre Certo — Forbion",
        description: "Cobre o valor certo por tamanho do carro: hatch, sedan, SUV e picape com preços diferentes. Preço por porte no agendamento e no orçamento, já no plano Essencial.",
        h1: "Preço por porte de veículo na estética automotiva",
        lead: "Vitrificar um SUV dá mais trabalho, gasta mais produto e ocupa mais o box do que um hatch — e o preço precisa refletir isso. O Forbion deixa você cobrar o valor certo por porte do veículo automaticamente, sem ter que lembrar a tabela de cabeça a cada orçamento.",
        sections: [
            {
                h2: "Por que cobrar por tamanho do carro",
                paragraphs: ["Cobrar o mesmo preço pra carro pequeno e carro grande é deixar dinheiro na mesa nos veículos grandes — ou afastar cliente nos pequenos. Carro maior consome mais cera, mais selante, mais tempo de box e mais mão de obra. Quando o preço acompanha o porte, sua margem fica saudável em qualquer atendimento.", "No Forbion você define o valor de cada serviço por porte de veículo (hatch, sedan, SUV, picape). A partir daí, o sistema já aplica o preço certo conforme o carro — no agendamento da loja online e no orçamento."],
                bullets: ["Preço por porte: hatch, sedan, SUV, picape", "Valor aplicado automaticamente conforme o veículo", "Cliente já vê o preço certo na loja online de agendamento", "Mesma lógica vale no orçamento de serviços de ticket alto"],
            },
            {
                h2: "Transparência que evita atrito no caixa",
                paragraphs: ["Quando o preço por porte está definido, o cliente vê o valor antes de agendar e não tem surpresa na entrega. Isso reduz a negociação na hora do pagamento e profissionaliza a percepção do seu serviço — você não está 'chutando' o preço, está aplicando uma tabela clara por tamanho de carro.", "Para serviços de ticket alto, o preço por porte alimenta o orçamento que você envia pelo WhatsApp, mantendo o valor coerente do agendamento até o fechamento."],
            },
        ],
        faq: [
            { q: "O preço por porte está em qual plano?", a: "Já está no plano Essencial (R$79/mês), junto com orçamento e estoque." },
            { q: "Quantos portes posso configurar?", a: "Você define os preços por porte de veículo (como hatch, sedan, SUV e picape) para cada serviço, de acordo com a sua tabela." },
            { q: "O cliente vê o preço por porte ao agendar?", a: "Sim. Como o valor por porte está no catálogo de serviços, o cliente enxerga o preço correto na sua loja online antes de confirmar o agendamento." },
            { q: "Dá pra usar o preço por porte em orçamentos?", a: "Sim. O mesmo preço por porte é usado tanto no agendamento quanto no orçamento de serviços de maior valor." },
        ],
        related: ["orcamento-estoque-preco-por-porte-estetica", "agenda-online-estetica-automotiva", "loja-online-agendamento-estetica"],
    },
    {
        slug: "reduzir-no-show-faltas-whatsapp-estetica-automotiva",
        tier: 2,
        title: "Reduzir No-Show na Estética Automotiva | Lembrete e Confirmação por WhatsApp — Forbion",
        description: "Diminua faltas e horários furados na sua estética automotiva com lembrete e confirmação de agendamento por WhatsApp. Agenda do Forbion, a partir do plano Essencial.",
        h1: "Como reduzir o no-show com lembrete e confirmação por WhatsApp",
        lead: "Horário marcado que o cliente esquece é box vazio e faturamento perdido — e na estética automotiva, um box parado uma hora não volta mais. O Forbion ajuda a reduzir o no-show com lembrete e confirmação por WhatsApp ligados à sua agenda, pra o cliente lembrar e você não furar o dia.",
        sections: [
            {
                h2: "O no-show é caro e quase invisível",
                paragraphs: ["Quando o cliente não aparece, você não perde só aquele atendimento: perde o box reservado, perde a oportunidade de ter encaixado outro carro e ainda atrapalha o restante da agenda. O problema é que falta raramente é má-fé — na maioria das vezes é esquecimento puro e simples.", "A forma mais barata de combater isso é lembrar o cliente antes do horário e pedir uma confirmação. Foi feito pra ser simples: o agendamento já está no sistema, então o lembrete sai do mesmo lugar onde a agenda vive."],
            },
            {
                h2: "Lembrete e confirmação por WhatsApp na agenda",
                paragraphs: ["A agenda do Forbion trabalha com lembrete e confirmação por WhatsApp pra reduzir o no-show. O cliente recebe o aviso do horário no canal que ele realmente lê, lembra do compromisso e confirma — e você começa o dia sabendo quais carros realmente vêm.", "Como o cliente também agenda sozinho pela sua loja online e o horário ocupado é bloqueado pros demais, a agenda fica limpa de duplicidade. Menos furo, mais previsibilidade e um pátio do dia que reflete a realidade."],
                bullets: ["Lembrete do horário pelo WhatsApp, o canal que o cliente lê", "Confirmação do agendamento antes do dia", "Horário ocupado bloqueado, sem agendamento duplicado", "Pátio do dia mais previsível, com menos box vazio"],
            },
            {
                h2: "Boas práticas pra furar menos a agenda",
                paragraphs: ["Além do lembrete automático, alguns hábitos simples ajudam: deixe claro o horário e o endereço na confirmação, peça a confirmação do cliente com antecedência e mantenha uma lista de espera pra encaixar quem está disponível quando alguém cancelar. Combinando o lembrete do Forbion com essas práticas, o no-show cai e o box rende mais."],
            },
        ],
        faq: [
            { q: "O lembrete por WhatsApp está em qual plano?", a: "A agenda com lembrete e confirmação por WhatsApp está disponível desde o plano Essencial (R$79/mês)." },
            { q: "O lembrete acaba 100% com as faltas?", a: "Não existe mágica: o lembrete e a confirmação por WhatsApp reduzem bastante o esquecimento, que é a maior causa de no-show, mas sempre vai existir uma falta ocasional. Por isso vale manter uma lista de espera pra encaixar carros." },
            { q: "O cliente precisa de app pra confirmar?", a: "Não. O lembrete e a confirmação acontecem pelo WhatsApp, e o agendamento é feito pela sua loja online direto no navegador — sem instalar nada." },
            { q: "E se o cliente não confirmar?", a: "Você vê isso na agenda e pode usar aquele horário pra encaixar outro carro da lista de espera, em vez de deixar o box parado." },
        ],
        related: ["agenda-online-estetica-automotiva", "loja-online-agendamento-estetica", "recall-garantia-estetica-automotiva"],
    },
];

export const SEO_SLUGS = SEO_PAGES.map((p) => p.slug);
export const getSeoPage = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);
