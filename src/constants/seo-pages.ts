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

    // ── Lote 3 (Fobi/COO) — vs-planilha, SEO local, sub-nichos de serviço, fundo de funil ──
    {
        slug: "sistema-vs-planilha-whatsapp-caderno-estetica-automotiva",
        tier: 1,
        title: "Sistema x Planilha e WhatsApp para Estética Automotiva — Forbion",
        description: "Vale a pena trocar planilha, WhatsApp e caderno por um sistema na estética automotiva? Veja onde o controle manual quebra e qual é o ponto de virada. Teste 7 dias grátis.",
        h1: "Sistema de gestão x planilha, WhatsApp e caderno na estética automotiva",
        lead: "A maioria das estéticas automotivas começa (e funciona bem) no caderno, na planilha do Excel e no WhatsApp. O problema não é usar isso — é continuar usando quando o movimento cresce. Aqui vai um comparativo honesto: até onde o controle manual aguenta, onde ele quebra e qual é o ponto em que trocar por um sistema passa a se pagar.",
        sections: [
            {
                h2: "Até onde planilha, WhatsApp e caderno aguentam (e isso não é vergonha)",
                paragraphs: ["Vamos ser justos: no começo, o controle manual funciona. Poucos carros por dia, você conhece cada cliente pelo nome, marca o horário no WhatsApp e anota o serviço no caderno. Planilha do Excel resolve bem a tabela de preços e até um controle de caixa simples. Se você está nessa fase, não precisa de sistema nenhum — precisa é de cliente.", "O ponto importante é entender que essas ferramentas não são 'erradas'. Elas são baratas, você já domina e não exigem aprender nada novo. O que elas têm é um teto. Enquanto o volume é baixo e você toca tudo sozinho, o teto não aperta. O custo do manual só aparece quando o movimento cresce — e aí ele aparece de uma vez, em forma de carro perdido e dinheiro que some sem você ver."],
                bullets: ["Caderno e WhatsApp: ótimos pra anotar horário quando são poucos carros", "Planilha do Excel: boa pra tabela de preço e um caixa simples", "Funciona bem enquanto é você sozinho e baixo volume", "O limite não é a ferramenta — é o que acontece quando o movimento cresce"],
            },
            {
                h2: "Onde o controle manual quebra (e o custo invisível disso)",
                paragraphs: ["Os problemas do manual quase nunca aparecem como 'erro'. Eles aparecem como dinheiro que escorre sem deixar rastro. Veja os pontos onde o caderno + WhatsApp + planilha começam a custar caro:", "Cada um desses buracos parece pequeno isolado. Junte um mês inteiro deles e você tem o custo invisível de tocar a estética 'no improviso': faturamento que existiu e não voltou pra você."],
                bullets: ["Agendamento duplo: você marca dois carros no mesmo horário no WhatsApp e descobre só quando os dois chegam no pátio", "No-show: o cliente esquece porque ninguém lembrou ele, e o box fica parado uma hora que não volta mais", "Cliente que some: aquele que vitrificou há 6 meses precisava de revisão e você nunca avisou — ele foi no concorrente", "Comissão no fim do mês: a conta de quanto cada funcionário recebe vira uma noite de planilha e discussão", "Caixa por estimativa: você 'acha' que faturou bem, mas não sabe qual serviço dá lucro nem quem é seu melhor cliente", "Reclamação de arranhão: sem registro do estado de entrada do carro, é a sua palavra contra a do cliente"],
            },
            {
                h2: "O ponto de virada: quando trocar passa a se pagar",
                paragraphs: ["Você não troca de ferramenta por modernismo — troca quando o manual começa a custar mais caro que o sistema. Na prática, o ponto de virada chega quando aparece pelo menos um destes sinais: você já furou agendamento por confusão de horário, já perdeu cliente de ticket alto por não ter chamado de volta, ou passa o fim do mês refém da planilha de comissão. Quando isso acontece, um sistema deixa de ser custo e vira recuperação de dinheiro que você já estava perdendo.", "O Forbion foi feito pra resolver exatamente esses buracos, sem te obrigar a virar especialista em tecnologia. O cliente agenda sozinho pela sua loja online (e o horário ocupado some pros outros, acabando com o agendamento duplo). A confirmação automática por WhatsApp lembra o cliente do horário — é o atendente que não dorme, reduzindo o no-show sem você mandar mensagem um por um. O recall de garantia avisa quando a vitrificação ou o polimento precisa de revisão, trazendo de volta o cliente que sumiria. A comissão é calculada a cada serviço fechado, então o fim do mês deixa de ser pesadelo de planilha. E a vistoria com fotos e assinatura registra o estado do carro na entrada, pra acabar com a discussão de arranhão.", "Importante: trocar não significa perder o que você tem. Você não precisa migrar tudo de uma vez nem abandonar o WhatsApp — o WhatsApp continua sendo o canal com o cliente, só que agora a confirmação sai sozinha. O caderno é que sai de cena. Por isso o Forbion tem 7 dias grátis sem cartão: a ideia é você rodar na sua operação real e ver, na prática, se o sistema recupera mais dinheiro do que custa antes de decidir."],
                bullets: ["Sinal de virada 1: você já furou horário por agendamento duplo no WhatsApp", "Sinal de virada 2: já perdeu cliente de vitrificação/PPF por não ter chamado pra revisão", "Sinal de virada 3: o fechamento da comissão vira uma noite de planilha todo mês", "Sinal de virada 4: você não sabe dizer com número qual serviço dá mais lucro", "Comece pelo essencial (R$79/mês): agenda, loja online, preço por porte, orçamento e estoque"],
            },
        ],
        faq: [
            { q: "Vale a pena trocar a planilha e o WhatsApp por um sistema?", a: "Depende do seu momento. Se você atende poucos carros e dá conta sozinho no caderno, ainda não precisa. O sistema passa a valer a pena quando o manual começa a custar dinheiro: agendamento duplo, no-show, cliente que some e fechamento de comissão virando pesadelo. Quando aparece pelo menos um desses sinais, o sistema costuma recuperar mais do que custa. Por isso existe o teste de 7 dias grátis: pra você medir isso na sua operação antes de pagar." },
            { q: "Eu perco meu histórico do caderno e da planilha se trocar?", a: "Não precisa perder. Você não migra tudo de um dia pro outro: começa cadastrando os clientes e veículos que mais voltam e segue dali. O WhatsApp continua sendo o seu canal com o cliente — a diferença é que a confirmação do horário passa a sair automaticamente, em vez de você digitar uma por uma. O que sai de cena é o caderno, não o relacionamento que você já tem." },
            { q: "Não é complicado demais sair do Excel pra um sistema?", a: "O medo é justo, mas o Forbion roda no navegador (no computador e no celular) e foi pensado pra dono de estética, não pra técnico. Na prática, muita coisa fica mais simples: o cliente agenda sozinho, a comissão é calculada automaticamente e os números do mês aparecem prontos. Você troca o trabalho de manter a planilha pelo de só conferir." },
            { q: "O sistema acaba com o no-show?", a: "Não existe mágica — sempre vai ter uma falta ocasional. Mas a maior causa de no-show é esquecimento, e a confirmação automática por WhatsApp ataca exatamente isso: o cliente recebe o lembrete no canal que ele lê, no horário certo, sem você precisar mandar nada. Isso reduz bastante o box parado. Combinado com uma lista de espera pra encaixar carros, o prejuízo da falta cai." },
            { q: "Quanto custa e qual plano resolve o que a planilha não dá conta?", a: "São três planos: Essencial R$79/mês (agenda, loja online de agendamento, preço por porte, orçamento e estoque), Premium R$179/mês (acrescenta clube de assinatura, recall de garantia e relatórios com análise de retenção/RFM) e Pro R$197/mês (acrescenta vistoria com fotos e assinatura, NF-e e o assistente). São 7 dias grátis sem cartão, e o plano anual sai mais barato. A maioria começa no Essencial pra resolver agenda e agendamento duplo, e sobe pra Premium quando quer recorrência e trazer cliente de volta." },
        ],
        related: ["software-para-estetica-automotiva", "reduzir-no-show-faltas-whatsapp-estetica-automotiva", "controle-comissao-repasse-funcionario-estetica"],
    },
    {
        slug: "estetica-automotiva-perto-de-mim-aparecer-no-google",
        tier: 1,
        title: "Estética Automotiva Perto de Mim: Como Aparecer no Google | Forbion",
        description: "Apareça quando buscam \"estética automotiva perto de mim\": guia de Google Meu Negócio, avaliações e link de agendamento que fecha o cliente. Comece a partir de R$79/mês.",
        h1: "Como aparecer no Google quando buscam estética automotiva perto de mim",
        lead: "A maior parte do cliente de estética automotiva chega por uma busca local: alguém com o carro sujo digita \"estética automotiva perto de mim\" e decide na hora. Este guia mostra como aparecer nesse resultado, ganhar a confiança pela avaliação e — o passo que quase ninguém faz direito — fechar o agendamento na mesma visita.",
        sections: [
            {
                h2: "Por que a busca local é a sua maior fonte de cliente",
                paragraphs: ["Quem procura estética automotiva quase nunca procura por marca: procura por proximidade e urgência. \"Estética automotiva perto de mim\", \"polimento + nome do bairro\", \"lavagem detalhada perto de mim\" são buscas de quem já decidiu contratar e só falta escolher onde. Se você não aparece nesse resultado, esse cliente vai para o concorrente da rua de cima — e você nem fica sabendo que ele existiu.", "O Google mostra três coisas para esse tipo de busca: o mapa com os negócios próximos (o \"pacote local\"), os perfis com mais e melhores avaliações, e os links de quem tem presença na internet. Estar bem nesses três pontos é de graça e rende mais que qualquer anúncio quando você está começando."],
                bullets: ["A busca é por proximidade: o Google prioriza quem está perto de quem procurou", "É intenção alta: a pessoa quer contratar hoje ou esta semana", "É barato: aparecer no mapa e nas buscas locais não custa mídia", "É contínuo: depois de organizado, traz cliente todo dia sem você postar nada"],
            },
            {
                h2: "Monte e mantenha seu Google Meu Negócio",
                paragraphs: ["O Google Meu Negócio (hoje Perfil da Empresa no Google) é o que coloca a sua estética no mapa e no \"perto de mim\". Criar é gratuito e leva 15 minutos, mas o que faz a diferença é manter ele vivo — perfil abandonado perde posição para o que está ativo.", "O básico bem feito já te coloca à frente da maioria das estéticas, que deixam o perfil incompleto ou nem criam."],
                bullets: ["Cadastre nome, endereço e telefone exatos — iguais em todo lugar onde sua estética aparece", "Defina a categoria certa (lava-rápido, estética automotiva, detailing) e o horário de funcionamento", "Suba fotos reais: fachada, equipe trabalhando e principalmente antes e depois dos serviços", "Liste seus serviços com descrição — polimento, vitrificação, higienização, PPF", "Responda toda avaliação, boa ou ruim, com educação e em poucos dias", "Use o campo de link para apontar direto para a sua página de agendamento"],
            },
            {
                h2: "Avaliação é a moeda da confiança — e dá para pedir certo",
                paragraphs: ["Entre dois perfis parecidos, o cliente clica no que tem mais estrelas e mais comentários recentes. Avaliação não cai do céu: ela vem de você pedir, no momento certo, para quem ficou satisfeito. O melhor momento é na entrega do carro, quando o dono está olhando o brilho do serviço.", "O segredo é tirar o atrito: quanto menos passos entre o cliente e a avaliação, mais gente avalia. Tenha o link direto da avaliação salvo no WhatsApp e mande junto com o agradecimento. E priorize quem você sabe que adorou o resultado — registrar a vistoria com fotos da entrada e da saída ajuda a mostrar o antes e depois e a lembrar de pedir."],
                bullets: ["Peça na entrega, presencialmente, e reforce por WhatsApp com o link pronto", "Avaliações recentes pesam mais — mantenha um fluxo constante, não um mutirão", "Responda às críticas sem brigar: resposta educada mostra cuidado para quem está lendo", "Use o histórico do cliente e a vistoria com fotos para saber quem teve a melhor experiência"],
            },
            {
                h2: "Aparecer não basta: tem que fechar o agendamento ali",
                paragraphs: ["Aqui está o erro que faz a busca local virar dinheiro perdido: o cliente te acha no Google, fica interessado, manda um WhatsApp — e cai numa conversa de ida e volta de mensagem que esfria, ou que ninguém responde porque você está com o carro na mão. A busca trouxe o cliente até a porta e a falta de um caminho de fechamento deixou ele escapar.", "Por isso a sua página própria de agendamento é o que fecha o ciclo. Em vez de \"me chama no WhatsApp\", o seu perfil do Google e a bio do Instagram apontam para a sua loja online do Forbion: o cliente vê os serviços, o preço por porte do veículo e os horários livres, e agenda sozinho — inclusive de madrugada ou enquanto você está atendendo. A confirmação automática e os lembretes seguram esse agendamento até o carro chegar, em vez de você ter que ficar de olho no celular.", "É essa ponte — busca local que traz, página que apresenta, agendamento que fecha — que transforma quem te achou em cliente de verdade. E quem agenda entra no seu cadastro: dá para chamar de volta com recall de garantia quando a vitrificação pede revisão e oferecer o clube de assinatura para virar receita recorrente."],
                bullets: ["Coloque o link de agendamento no Google, na bio do Instagram e no WhatsApp", "Cliente vê serviço, preço por porte e horário antes de marcar — sem conversa", "Confirmação e lembrete automáticos reduzem o não comparecimento", "Quem agenda vira cadastro: recall de garantia e clube de assinatura trazem ele de volta"],
            },
        ],
        faq: [
            { q: "Quanto custa aparecer no Google quando buscam estética automotiva perto de mim?", a: "Aparecer no mapa e nas buscas locais é de graça: basta criar e manter o seu Perfil da Empresa no Google (antigo Google Meu Negócio). O custo é o seu tempo mantendo fotos, serviços e avaliações em dia. Anúncio pago só vale depois que esse básico estiver funcionando." },
            { q: "Quanto tempo leva para minha estética começar a aparecer?", a: "Depois de criar e verificar o perfil, ele costuma começar a aparecer nas buscas locais em alguns dias a poucas semanas. A posição melhora com o tempo conforme você acumula avaliações, mantém fotos atualizadas e responde aos clientes. É um trabalho contínuo, não uma configuração única." },
            { q: "Preciso de site para aparecer no Google?", a: "Para aparecer no mapa, não — o Perfil da Empresa basta. Mas você precisa de algum lugar para o cliente que te achou agendar sem ficar trocando mensagem. A loja online de agendamento do Forbion resolve isso: é uma página própria com seus serviços, preços e horários, com link pronto para o Google e a bio do Instagram." },
            { q: "Como peço avaliação sem parecer chato?", a: "Peça na entrega do carro, quando o cliente está vendo o resultado, e mande em seguida o link direto da avaliação pelo WhatsApp junto com o agradecimento. Não force nem ofereça desconto em troca — apenas facilite ao máximo para quem ficou satisfeito. A vistoria com fotos do antes e depois ajuda a lembrar de pedir a quem teve a melhor experiência." },
            { q: "O Forbion ajuda a aparecer no Google?", a: "O Forbion não cria o seu perfil no Google por você, mas entrega a peça que fecha o cliente que te achou: a loja online de agendamento, com link para colocar no perfil do Google e na bio. Assim a busca local que traz o cliente termina em agendamento de verdade. Os planos vão de R$79 (Essencial) a R$179 (Premium) e R$197 (Pro, com NF-e e assistente), com 7 dias grátis sem cartão e anual mais barato." },
        ],
        related: ["loja-online-agendamento-estetica", "como-conseguir-mais-clientes-para-estetica-automotiva", "agenda-online-estetica-automotiva"],
    },
    {
        slug: "sistema-para-vitrificacao-coating-ceramico",
        tier: 1,
        title: "Sistema para Vitrificação e Coating Cerâmico | Garantia e Recall — Forbion",
        description: "Sistema para gerir vitrificação e coating cerâmico: orçamento por porte, vistoria com fotos antes de aplicar e recall de garantia (180/365 dias). Teste 7 dias grátis.",
        h1: "Sistema para vitrificação e coating cerâmico",
        lead: "Vitrificação e coating cerâmico são o serviço de maior margem da estética automotiva — e o que mais precisa de processo. O Forbion organiza do orçamento por porte até o recall da garantia, pra você proteger o serviço e fazer o cliente voltar quando a proteção pede revisão.",
        sections: [
            {
                h2: "O serviço mais lucrativo merece processo, não improviso",
                paragraphs: ["Coating cerâmico não se vende no balcão. É orçamento: o cliente quer saber o que está incluído, quanto tempo o carro fica, quantas camadas, qual a garantia. No Forbion você monta a proposta com os itens, define o preço por porte do veículo (um SUV preto não dá o mesmo trabalho que um hatch claro) e envia pelo WhatsApp, acompanhando depois o que foi aprovado, recusado ou fechado.", "É também o serviço de maior margem do portfólio: a proteção de pintura costuma ter as maiores margens do setor, em média perto de 65% segundo a ABEx, porque o que pesa é a técnica e não o insumo. Por isso vale ter um processo limpo em torno dele — e não tratar uma vitrificação de ticket alto do mesmo jeito que uma lavagem simples."],
                bullets: ["Orçamento de coating enviável por WhatsApp (aprovado / recusado / vendido)", "Preço por porte do veículo (hatch, sedan, SUV, picape…)", "Catálogo de serviços com duração real de cada aplicação", "Estoque de insumos (coating, selante, prep, microfibras) com alerta de mínimo"],
            },
            {
                h2: "Vistoria com fotos antes de aplicar: sua prova de antes e depois",
                paragraphs: ["Coating é serviço de horas, às vezes dias, com o carro na sua mão. Qualquer marca na pintura vira discussão — e na vitrificação isso é pior, porque você fez justamente um trabalho na superfície. Antes de começar, registre o estado de entrada: fotos do veículo, marcação das avarias (risco, swirl, amassado) no diagrama do carro e a assinatura do cliente na tela.", "Quando o serviço fecha, a vistoria é travada e vira um registro imutável ligado àquele atendimento. Se o cliente reclamar de um arranhão que já estava lá, você tem a prova do estado de chegada. É também a sua documentação de antes e depois pra mostrar o resultado da aplicação."],
                bullets: ["Fotos do estado de chegada antes da aplicação", "Marcação de avarias no diagrama do veículo", "Assinatura do cliente registrada na tela", "Trava após o fechamento — registro imutável que protege você"],
            },
            {
                h2: "Recall de garantia: o motor de recompra do coating",
                paragraphs: ["Coating cerâmico tem prazo de garantia — e essa garantia é o que traz o cliente de volta. No Forbion você define o prazo de cada serviço (por exemplo, 180 dias para uma vitrificação de uma camada, 365 dias para um coating mais durável). Ao fechar a comanda, o sistema calcula a data de revisão sozinho.", "Quando essa data se aproxima, o cliente entra na lista de recall e você o chama de volta pra revisão da proteção pelo WhatsApp, com um clique. Em vez de torcer pra ele lembrar, você tem uma lista que se atualiza sozinha de quem está na janela de revisão — o motor de recompra do detailing premium.", "Pra transformar isso em receita previsível, o clube de assinatura cria planos de manutenção mensal da proteção (lavagem técnica, decontaminação, top coat). Junto com o recall, é o que faz o cliente de coating virar um cliente recorrente, não um serviço pontual de uma vez só."],
            },
            {
                h2: "Os números do seu serviço premium, no claro",
                paragraphs: ["Os relatórios mostram quanto a vitrificação e o coating rendem de verdade dentro do seu faturamento, e a análise de retenção (RFM) aponta quem são seus melhores clientes de ticket alto e quem está esfriando. No plano Pro, a assistente que não dorme cuida da confirmação automática dos agendamentos enquanto você está com a mão na massa, e a emissão de NF-e fecha a parte fiscal dentro da própria rotina."],
            },
        ],
        faq: [
            { q: "Como o Forbion controla a garantia da vitrificação e do coating?", a: "Você define o prazo de garantia de cada serviço (por exemplo, 180 dias para uma vitrificação ou 365 dias para um coating mais durável). Ao fechar a comanda, o sistema calcula a data de revisão e, quando ela se aproxima, o cliente entra automaticamente na lista de recall pra você chamar de volta pelo WhatsApp." },
            { q: "Dá pra cobrar preço diferente por tamanho de carro no coating?", a: "Sim. O orçamento usa o preço por porte do veículo (hatch, sedan, SUV, picape), porque um carro maior ou mais escuro dá mais trabalho de preparo. Você monta a proposta com os itens e envia pelo WhatsApp, acompanhando se foi aprovada, recusada ou fechada." },
            { q: "A vistoria com fotos antes de aplicar está em qual plano?", a: "No plano Pro (R$197/mês). Ela registra as fotos do estado de chegada, a marcação de avarias no diagrama do carro e a assinatura do cliente, e trava esse registro no fechamento do serviço — sua prova de antes e depois." },
            { q: "Recall e clube de assinatura ficam em qual plano?", a: "A partir do Premium (R$179/mês), que inclui recall de garantia, clube de assinatura para planos de manutenção da proteção e os relatórios. O Pro (R$197/mês) acrescenta a vistoria com fotos, a emissão de NF-e e a assistente de confirmação automática." },
            { q: "Posso testar antes de assinar?", a: "Sim. São 7 dias grátis, sem precisar de cartão. O plano anual sai mais barato que o mensal." },
        ],
        related: ["recall-garantia-estetica-automotiva", "vistoria-veiculo-com-fotos-assinatura", "software-para-detailing-automotivo"],
    },
    {
        slug: "controle-financeiro-fluxo-de-caixa-estetica-automotiva",
        tier: 1,
        title: "Controle Financeiro e Fluxo de Caixa para Estética Automotiva | Forbion",
        description: "Saiba quanto sobra de verdade no mês: faturamento por serviço, custo de insumo e comissão. Controle financeiro e fluxo de caixa para estética automotiva. Teste 7 dias grátis.",
        h1: "Controle financeiro e fluxo de caixa para estética automotiva",
        lead: "Faturar não é o mesmo que lucrar. Se você sabe quanto entrou no mês mas não quanto sobrou depois do insumo e da comissão, está no achismo. O Forbion liga o fechamento de cada comanda aos relatórios pra você enxergar o número que importa: o que sobra de verdade.",
        sections: [
            {
                h2: "Quanto entra é fácil. Quanto sobra é o que decide.",
                paragraphs: ["A maioria das estéticas sabe o faturamento do mês — o problema é parar por aí. Faturar R$30 mil parece ótimo até você descontar o que foi pra produto, para a comissão do funcionário e pro custo fixo. O que resta é o número que paga a sua conta. Sem ele, você toma decisão no escuro: baixa preço pra ganhar volume e, sem perceber, vende serviço no prejuízo.", "No Forbion o caixa não começa numa planilha separada — começa no fechamento da comanda. Cada serviço fechado registra o valor, a forma de pagamento e entra direto no faturamento. Nada de digitar duas vezes nem reconstruir o mês de cabeça no domingo à noite."],
                bullets: ["Faturamento do dia, da semana e do mês sem somar comanda na mão", "Entrada por forma de pagamento (Pix, cartão, dinheiro) pra bater o caixa", "Faturamento por serviço: qual realmente puxa a receita", "Ticket médio por atendimento e por cliente"],
            },
            {
                h2: "Do achismo ao número: insumo, comissão e a margem real",
                paragraphs: ["O preço cheio engana. Uma vitrificação de R$800 com R$220 de produto e 30% de comissão deixa bem menos do que parece — e é aí que muita estética descobre tarde demais que o serviço campeão de vendas é o que menos sobra. O Forbion separa o faturamento bruto do que sai dele, pra você ver a margem real serviço por serviço.", "Com o custo de insumo controlado e a comissão calculada por atendimento, o fechamento de comanda deixa de ser só caixa e vira informação de gestão. Você passa a saber quanto custa entregar cada serviço antes de decidir dar desconto."],
                bullets: ["Custo de insumo por serviço pra calcular a margem, não só o preço", "Comissão e repasse do funcionário por atendimento, sem conta no papel", "Margem real por serviço: o que rende e o que só dá trabalho", "Estoque ligado ao consumo pra o produto não sumir sem aparecer no caixa"],
            },
            {
                h2: "Preço baixo sem dado mascara prejuízo",
                paragraphs: ["Baixar preço pra fechar agenda é a saída mais comum e a mais perigosa. Sem saber o custo real, você acha que está competindo e na verdade está pagando pra trabalhar. A correção não é cobrar mais no chute — é cobrar com base no que cada serviço custa e no que ele deixa.", "É por isso que o controle financeiro anda junto com a precificação por porte de veículo: um SUV consome mais produto e mais tempo que um hatch, então tem que custar mais. E quando você quer estabilizar o caixa em vez de viver de altos e baixos, o clube de assinatura transforma lavagem e manutenção em receita recorrente — você já entra no mês sabendo parte do que vai faturar."],
            },
            {
                h2: "Os relatórios que viram decisão",
                paragraphs: ["Número solto não muda nada — número que aponta a próxima ação, sim. A partir do plano Premium, os relatórios mostram faturamento por período e por serviço, e a análise de retenção (RFM) revela quem são seus melhores clientes, quem está esfriando e quanta receita está em risco. Você decide onde mexer: no preço, no mix de serviços ou em chamar de volta quem sumiu.", "No plano Pro, a emissão de NF-e organiza a parte fiscal e a assistente ajuda no dia a dia da operação — somando a confirmação automática de agendamento, que reduz o no-show e protege o caixa de horário furado."],
                bullets: ["Faturamento por período e por serviço (Premium)", "Análise RFM: melhores clientes, em risco e receita a recuperar (Premium)", "Recorrência do clube de assinatura no relatório (Premium)", "NF-e e assistente na operação (Pro)"],
            },
        ],
        faq: [
            { q: "Como eu sei quanto sobra de verdade no fim do mês?", a: "Cada comanda fechada registra o valor e a forma de pagamento, e o Forbion soma isso no faturamento automaticamente. Descontando o custo de insumo e a comissão que você cadastra por serviço, você enxerga a margem real — não só quanto entrou, mas quanto sobrou." },
            { q: "Preciso ser bom de planilha pra controlar o financeiro?", a: "Não. O controle nasce do próprio fechamento de comanda do dia a dia. Você não monta planilha nem soma nada na mão: o faturamento, as formas de pagamento e os relatórios já vêm prontos pra leitura." },
            { q: "Dá pra ver o quanto cada serviço realmente lucra?", a: "Sim. Cadastrando o custo de insumo e a comissão de cada serviço, você compara o preço cobrado com o que sobra. É assim que se descobre se a vitrificação ou a lavagem está realmente puxando o resultado — ou só o movimento." },
            { q: "O controle financeiro está em qual plano?", a: "O fechamento de comanda e o faturamento básico estão desde o Essencial (R$79/mês). Os relatórios por serviço, a análise RFM e a recorrência entram a partir do Premium (R$179/mês). NF-e e assistente ficam no Pro (R$197/mês). Todos têm 7 dias grátis pra testar, sem cartão, e o anual sai mais barato." },
            { q: "Por que baixar preço pode dar prejuízo?", a: "Porque sem conhecer o custo real do serviço, o desconto pode comer toda a margem — você acha que está competindo e está pagando pra trabalhar. Com insumo e comissão à vista, você ajusta o preço com base no que cada serviço custa, inclusive cobrando por porte de veículo, em vez de chutar." },
        ],
        related: ["controle-comissao-repasse-funcionario-estetica", "relatorios-retencao-clientes-rfm-estetica", "como-precificar-servicos-de-estetica-automotiva"],
    },
    {
        slug: "sistema-para-higienizacao-interna-automotiva",
        tier: 2,
        title: "Sistema para Higienização Interna Automotiva | Agenda e Pacotes — Forbion",
        description: "Sistema para gerir higienização interna e limpeza de estofado automotivo: agenda com duração real, preço por porte, fotos antes/depois e pacote de manutenção. A partir de R$79/mês.",
        h1: "Sistema para higienização interna e limpeza de estofado automotivo",
        lead: "Higienização interna é serviço de horas, não de minutos: o box fica ocupado, a cabine precisa secar e um agendamento mal calculado atropela o dia inteiro. O Forbion organiza isso pela duração real de cada serviço, cobra o preço certo por porte do veículo e ainda transforma a higienização pontual em pacote de manutenção recorrente.",
        sections: [
            {
                h2: "Agenda pela duração real: não fure o dia num serviço de horas",
                paragraphs: ["Higienização interna, lavagem de banco e a limpeza completa de estofado tomam horas e prendem o box. Se a agenda marca como se fosse uma lavagem rápida, o segundo carro chega antes do primeiro secar e a sua tarde vira corrida atrás do prejuízo. No Forbion você define a duração real de cada serviço — duas, três, quatro horas — e o sistema calcula sozinho quais horários ainda cabem no dia, bloqueando o que já não dá tempo.", "Com a loja online de agendamento, o cliente vê só os horários que de fato comportam o serviço escolhido e marca sozinho, sem você precisar fazer conta de cabeça no WhatsApp. O lembrete e a confirmação automática reduzem o no-show — que num serviço longo dói ainda mais, porque você reservou o box e perdeu a janela."],
                bullets: ["Duração real por serviço (higienização completa, banco, teto, porta-malas)", "Horários livres calculados pela duração — sem encavalar carro no box", "Bloqueio automático do horário que já não cabe no dia", "Loja online de agendamento com confirmação e lembrete automáticos"],
            },
            {
                h2: "Preço por porte: um SUV de 7 lugares não pode custar o mesmo de um hatch",
                paragraphs: ["Higienizar a cabine de uma picape ou de um SUV de 7 lugares é muito mais estofado, mais carpete e mais tempo do que um hatch — e o preço tem que refletir isso, senão o serviço grande sai no prejuízo. No Forbion você cadastra o preço por porte do veículo e o sistema já aplica o valor certo no agendamento e no fechamento da comanda, sem recálculo na hora.", "O orçamento de pacotes maiores (higienização + impermeabilização de bancos, por exemplo) você monta com os itens e envia pelo WhatsApp, acompanhando depois o que foi aprovado, recusado ou fechado. E o estoque de insumos — extratora, APC, produtos de couro, microfibras — fica controlado com alerta de mínimo, pra não descobrir que acabou o produto no meio do serviço."],
                bullets: ["Preço por porte do veículo (hatch, sedan, SUV, picape, 7 lugares)", "Orçamento de pacotes enviável por WhatsApp (aprovado / recusado / vendido)", "Estoque de insumos com alerta de mínimo"],
            },
            {
                h2: "Fotos antes/depois e vistoria: prove o resultado e proteja o carro",
                paragraphs: ["O valor da higienização está no antes/depois — banco encardido que volta limpo, mancha que sumiu, cheiro que foi embora. Registrar isso com fotos no atendimento te dá material real pra mostrar pro cliente na entrega e pra usar no seu Instagram (sempre com a autorização dele), sem inventar nada.", "E como o carro fica horas com você, a vistoria de entrada protege os dois lados: você fotografa o estado da cabine na chegada, marca avarias que já existiam (rasgo no banco, mancha antiga, plástico ressecado) e colhe a assinatura do cliente. Ao fechar o serviço, esse registro é travado — vira prova de que o estofado já estava daquele jeito antes de você encostar nele."],
                bullets: ["Fotos do estado de entrada e do resultado, ligadas ao atendimento", "Marcação de avarias prévias no diagrama (rasgo, mancha, desgaste)", "Assinatura do cliente e registro travado no fechamento"],
            },
            {
                h2: "Pacote de manutenção: transforme a higienização anual em recorrência",
                paragraphs: ["Higienização completa o cliente faz uma ou duas vezes por ano — mas a manutenção da limpeza pode ser mensal. Com o clube de assinatura você monta pacotes como 'higienização leve a cada 2 meses' ou combina aspiração e hidratação de couro numa mensalidade, e o sistema controla quantos usos o cliente já consumiu. Em vez de torcer pra ele lembrar de voltar, você cria o motivo recorrente.", "A análise de retenção (RFM) mostra quem fez higienização e está sumindo, pra você chamar de volta na hora certa — e os relatórios revelam quanto esse serviço de fato rende no mês. No plano Pro, a NF-e e o assistente que não dorme deixam o pós-venda no automático."],
            },
        ],
        faq: [
            { q: "Como o Forbion evita que eu encavale dois carros no box no mesmo horário?", a: "Você define a duração real de cada serviço de higienização (por exemplo, 3 horas). O sistema só oferece ao cliente os horários que comportam essa duração no dia e bloqueia o que já não cabe, então não entra um segundo carro antes do primeiro terminar." },
            { q: "Dá pra cobrar mais caro pela cabine de um SUV ou de um carro de 7 lugares?", a: "Sim. Você cadastra o preço por porte do veículo e o sistema aplica automaticamente o valor de cada tamanho no agendamento e no fechamento da comanda — um SUV de 7 lugares cobra mais que um hatch sem você recalcular." },
            { q: "Consigo registrar o antes e depois da higienização?", a: "Sim. Você anexa fotos ao atendimento e, com a vistoria de entrada, registra o estado da cabine na chegada com marcação de avarias e assinatura do cliente. No fechamento esse registro é travado, servindo de prova caso o cliente reclame de algo que já existia." },
            { q: "Tem como criar um plano de manutenção recorrente de limpeza interna?", a: "Sim, com o clube de assinatura (a partir do plano Premium, R$179/mês). Você monta pacotes mensais, define os serviços inclusos e o sistema controla quantos usos o cliente já consumiu no mês." },
            { q: "Quanto custa e em qual plano está cada coisa?", a: "Agenda com duração por serviço, loja online, orçamento, estoque e preço por porte já estão no Essencial (R$79/mês). Clube de assinatura, recall e relatórios entram no Premium (R$179/mês). Vistoria com fotos, NF-e e assistente automático ficam no Pro (R$197/mês). São 7 dias grátis sem cartão e o plano anual sai mais barato." },
        ],
        related: ["software-para-detailing-automotivo", "orcamento-estoque-preco-por-porte-estetica", "clube-de-assinatura-estetica-automotiva"],
    },
    {
        slug: "sistema-para-polimento-tecnico-cristalizacao",
        tier: 2,
        title: "Sistema para Polimento Técnico e Cristalização Automotiva — Forbion",
        description: "Sistema para polimento e cristalização: cronometre o serviço no pátio do dia, cobre a hora técnica certa por porte e pare de precificar no olhômetro. Teste 7 dias grátis.",
        h1: "Sistema para polimento técnico e cristalização automotiva",
        lead: "Polimento e cristalização são serviços de muitas horas — e é justamente o tempo que come o seu lucro quando o preço sai no olhômetro. O Forbion ajuda a cronometrar cada serviço no pátio do dia, cobrar a hora técnica certa por porte do veículo e amarrar tudo no orçamento, pra um polimento de 8 horas pagar como 8 horas.",
        sections: [
            {
                h2: "O inimigo do polimento é o tempo, não o produto",
                paragraphs: ["No polimento técnico e na cristalização, o material pesa pouco perto da mão de obra: o que custa caro é o carro ocupando o box por horas e o profissional dedicado àquele veículo o dia inteiro. Por isso o erro mais comum — e mais silencioso — é precificar no olhômetro: o dono estima 'umas 4 horas', cobra por isso, e o serviço leva 8. Na prática, ele trabalhou meio dia de graça e nem percebeu.", "A correção começa por medir. No Forbion, todo serviço que entra cai no pátio do dia com status (aguardando, em execução, pronto), então você acompanha quanto tempo cada carro realmente ficou na sua mão — não a estimativa que fez na chegada. Com o tempo real registrado, você descobre onde está cobrando pouco e ajusta a tabela com base em dado, não em achismo."],
                bullets: ["Pátio do dia com o status de cada veículo: aguardando, em execução, pronto", "Acompanhamento do tempo real do carro no box (não a estimativa do começo)", "Visão de quantas horas o serviço de fato consumiu, pra revisar o preço", "Histórico por cliente e veículo pra comparar polimentos parecidos"],
            },
            {
                h2: "Cobre a hora técnica certa — e por porte do veículo",
                paragraphs: ["Polir um hatch e polir uma picape ou um SUV não dá o mesmo trabalho: mais área de pintura, mais horas de máquina, mais boina e massa de polir gastas. Cobrar o mesmo valor pros dois é perder dinheiro no carro grande ou afastar o cliente do pequeno. No Forbion você define o preço de cada serviço por porte do veículo, e o sistema aplica o valor certo automaticamente no agendamento e no orçamento.", "O caminho honesto pra chegar no preço é partir da sua hora técnica — quanto custa uma hora do seu box aberto, somando custos fixos, pró-labore e margem — e multiplicar pelas horas reais que o polimento ou a cristalização leva em cada porte. O preço por porte do Forbion é o lugar onde esse cálculo vira tabela aplicada, sem você refazer a conta de cabeça a cada atendimento."],
                bullets: ["Preço por porte (hatch, sedan, SUV, picape) pra polimento e cristalização", "Valor aplicado sozinho conforme o carro, no agendamento e no orçamento", "Tabela coerente do orçamento até o fechamento da comanda", "Base pra cobrar a hora técnica real, não o palpite da chegada"],
            },
            {
                h2: "Do orçamento ao recall: o ciclo do serviço de ticket alto",
                paragraphs: ["Polimento técnico e cristalização não se vendem no balcão — se vendem com orçamento. No Forbion você monta a proposta com os itens, aplica o preço por porte e envia pelo WhatsApp, acompanhando depois o que foi aprovado, recusado ou fechado. E porque o carro fica horas na sua mão, a vistoria de entrada com fotos e assinatura (plano Pro) registra o estado do veículo na chegada e protege você de discussão sobre um arranhão que já estava lá.", "Cristalização e proteção têm prazo de garantia — e isso é receita esperando pra voltar. Com o recall de garantia, você define o prazo de cada serviço e o cliente entra automaticamente na lista de retornos quando a revisão se aproxima, pra você chamá-lo de volta com um clique. Some o clube de assinatura pra manutenção recorrente da proteção e a análise de retenção (RFM) pra saber quem está esfriando, e o polimento deixa de ser serviço pontual pra virar relacionamento."],
                bullets: ["Orçamento de ticket alto enviável por WhatsApp (aprovado / recusado / vendido)", "Vistoria com fotos e assinatura do veículo na entrada (plano Pro)", "Recall de garantia da cristalização: lista de retornos atualizada sozinha", "Clube de assinatura pra manutenção recorrente e RFM pra retenção"],
            },
        ],
        faq: [
            { q: "Como o Forbion ajuda a precificar polimento sem ser no olhômetro?", a: "Acompanhando o tempo real. Todo serviço entra no pátio do dia com status (aguardando, em execução, pronto), então você vê quanto tempo o carro de fato ficou no box — não a estimativa da chegada. Com esse dado, você compara com o preço cobrado e descobre onde a hora técnica está saindo de graça, pra ajustar a tabela com número." },
            { q: "Dá pra cobrar valores diferentes por tamanho de carro no polimento?", a: "Sim. Você define o preço de cada serviço por porte do veículo (hatch, sedan, SUV, picape) e o Forbion aplica o valor certo automaticamente no agendamento e no orçamento. Como SUV e picape consomem mais área, mais horas e mais material, o preço acompanha o trabalho." },
            { q: "O Forbion controla a garantia da cristalização?", a: "Sim. Você define o prazo de garantia de cada serviço e o cliente entra automaticamente na lista de recall quando a revisão se aproxima — você o chama de volta pra revisão com um clique. É o motor de recompra dos serviços de proteção. O recall está a partir do plano Premium (R$179/mês)." },
            { q: "Consigo registrar o estado do carro antes do polimento?", a: "Sim, com a vistoria de entrada do plano Pro (R$197/mês): você tira fotos, marca avarias no diagrama do veículo e colhe a assinatura do cliente na tela. Ao fechar o serviço, a vistoria é travada e vira um registro do estado de entrada — útil porque no polimento o carro fica horas na sua mão." },
            { q: "Quanto custa e dá pra testar?", a: "São três planos: Essencial R$79, Premium R$179 e Pro R$197 por mês, com 7 dias grátis sem precisar de cartão e plano anual mais barato. Orçamento, estoque, preço por porte e pátio do dia já estão no Essencial; recall e clube a partir do Premium; vistoria e NF-e no Pro." },
        ],
        related: ["orcamento-estoque-preco-por-porte-estetica", "como-precificar-servicos-de-estetica-automotiva", "sistema-para-vitrificacao-coating-ceramico"],
    },
    {
        slug: "sistema-para-aplicacao-ppf-insulfilm-envelopamento",
        tier: 2,
        title: "Sistema para PPF, Insulfilm e Envelopamento Automotivo — Forbion",
        description: "Sistema de gestão para aplicação de PPF, insulfilm e envelopamento: orçamento por porte e peças, vistoria com fotos na entrega e recall de garantia da película. 7 dias grátis.",
        h1: "Sistema para aplicação de PPF, insulfilm e envelopamento",
        lead: "Película é ticket alto, garantia longa e cliente que repara em cada detalhe — bolha, descolamento de borda, recorte torto. O Forbion cobre o ciclo inteiro: orçamento por porte e por peça, vistoria com fotos antes de encostar no carro e recall de garantia pra trazer o cliente de volta na revisão.",
        sections: [
            {
                h2: "Orçamento por porte e por peça, não no chute",
                paragraphs: ["PPF, insulfilm e envelopamento quase nunca se fecham no balcão — fecham com proposta. Capô inteiro ou só o para-choque? Frente PPF ou carro fechado? Insulfilm nos quatro vidros ou só nas laterais? Cada combinação tem um preço, e mandar valor de cabeça pelo WhatsApp é onde a margem vaza. No Forbion você monta o orçamento com os itens, define o valor por porte do veículo e envia a proposta pronta pelo WhatsApp, acompanhando depois o que foi aprovado, recusado ou fechado.", "Aplicar película num SUV ou numa picape dá mais metragem e mais trabalho que num hatch — e o preço tem que refletir isso. Com o preço por porte, o sistema já aplica o valor certo no agendamento e no orçamento, sem você recalcular na cabeça a cada carro."],
                bullets: ["Orçamento por peça ou kit (frente PPF, carro fechado, vidros, envelopamento parcial/total) enviável por WhatsApp", "Preço por porte do veículo (hatch, sedan, SUV, picape)", "Status da proposta: aprovado, recusado, vendido", "Estoque de insumos (rolos de película, espátulas, soluções) com alerta de mínimo"],
            },
            {
                h2: "Vistoria com fotos e assinatura: prove o estado antes da aplicação",
                paragraphs: ["Aplicação de película deixa o carro horas (ou dias) na sua mão, e qualquer riscado na pintura ou vidro trincado vira discussão de quem foi a culpa. A vistoria de entrada do Forbion registra o estado do veículo com fotos, marca as avarias que já chegaram (risco, amassado, pedrisco no vidro) no diagrama do carro e colhe a assinatura do cliente na tela.", "Ao fechar o serviço, a vistoria é travada e vira um registro imutável. Se o cliente reclamar de um arranhão que já estava lá antes da aplicação, você tem a prova. E como película é entrega que o cliente inspeciona de perto, a vistoria também documenta o resultado entregue — sua palavra contra a foto não existe."],
                bullets: ["Fotos do estado de chegada do veículo", "Marcação de avarias prévias (pintura, vidros, borrachas) no diagrama", "Assinatura do cliente na tela", "Trava no fechamento — registro imutável que protege você na reclamação"],
            },
            {
                h2: "Recall de garantia: a película tem prazo, e ele trabalha a seu favor",
                paragraphs: ["PPF de qualidade tem garantia de anos contra amarelamento e descascamento; insulfilm e envelopamento também têm prazo. O problema é que ninguém lembra dessa data — e é exatamente aí que mora a recompra. No Forbion você define o prazo de garantia de cada serviço e, quando a data de revisão se aproxima, o cliente entra automaticamente na lista de retornos a cobrar. Você o chama pra revisão da película pelo WhatsApp com um clique.", "Casado com o recall, o clube de assinatura transforma o serviço pontual em receita recorrente: planos de manutenção e relavagem da proteção, lavagem técnica periódica do carro envelopado, revisões agendadas. A análise de retenção (RFM) ainda mostra seus melhores clientes e quem está esfriando, pra você agir antes de perder o cliente premium pro concorrente."],
                bullets: ["Prazo de garantia por serviço (PPF, insulfilm, envelopamento)", "Lista de revisões a cobrar atualizada sozinha", "Chamada pelo WhatsApp pra trazer o cliente na revisão da película", "Clube de assinatura pra manutenção recorrente + relatórios RFM"],
            },
        ],
        faq: [
            { q: "O Forbion controla a garantia do PPF, insulfilm e envelopamento?", a: "Sim. Você define o prazo de garantia de cada serviço e o cliente entra automaticamente na lista de recall quando a revisão se aproxima. Funciona como motor de recompra: a película tem prazo longo e o sistema lembra por você de chamar o cliente de volta." },
            { q: "Dá pra orçar por peça (só capô, só os vidros) e não só o carro fechado?", a: "Sim. Você monta o orçamento com os itens que quiser — frente PPF, carro fechado, vidros, envelopamento parcial ou total —, define o valor por porte do veículo e envia a proposta pelo WhatsApp, acompanhando o status (aprovado, recusado, vendido). Orçamento e estoque já estão no plano Essencial." },
            { q: "Como me protejo se o cliente reclamar de bolha ou de um risco que já existia?", a: "Com a vistoria de entrada você registra o estado do carro com fotos, marca as avarias prévias no diagrama e colhe a assinatura do cliente. Ao fechar o serviço o registro é travado, então você tem a prova do que chegou e do que foi entregue. A vistoria está no plano Pro (R$197/mês)." },
            { q: "Como cobro valores diferentes por tamanho de carro?", a: "Você define o preço por porte do veículo (hatch, sedan, SUV, picape) e o sistema aplica o valor certo no agendamento e no orçamento, sem recálculo manual a cada carro." },
            { q: "Quanto custa e tem como testar antes?", a: "Essencial R$79, Premium R$179 e Pro R$197 por mês, com plano anual mais barato. São 7 dias grátis sem cartão pra rodar na sua operação real antes de decidir." },
        ],
        related: ["software-para-detailing-automotivo", "recall-garantia-estetica-automotiva", "vistoria-veiculo-com-fotos-assinatura"],
    },
    {
        slug: "quanto-custa-um-sistema-para-estetica-automotiva",
        tier: 2,
        title: "Quanto Custa um Sistema para Estética Automotiva? — Forbion",
        description: "Quanto custa um sistema para estética automotiva: faixas de preço do mercado, o que esperar em cada uma e o cálculo de retorno. Preço do Forbion aberto, a partir de R$79/mês.",
        h1: "Quanto custa um sistema para estética automotiva (e vale a pena?)",
        lead: "Resposta direta: a maioria dos sistemas pra estética automotiva, detailing e lava-rápido fica entre R$50 e R$300 por mês, dependendo do que está incluso. O que muda o preço não é o nome do plano — é o que ele resolve da sua operação. Aqui vão as faixas, o que esperar em cada uma e a conta de retorno que decide se vale a pena.",
        sections: [
            {
                h2: "As faixas de preço do mercado (e o que esperar de cada uma)",
                paragraphs: ["Sistema de gestão pra estética automotiva quase sempre é cobrado por mês, por loja. O valor varia conforme a profundidade: quanto mais a ferramenta tira do seu colo (agendamento, cobrança, recorrência, fiscal), mais ela tende a custar. Vale separar as faixas pra você comparar maçã com maçã."],
                bullets: ["Até ~R$80/mês — o básico: agenda, cadastro de cliente e veículo, catálogo de serviços. Resolve a bagunça do caderno e do WhatsApp, mas geralmente para por aí.", "De ~R$130 a ~R$200/mês — a faixa de quem quer crescer: além do básico, entra loja de agendamento online, clube de assinatura/recorrência, relatórios e fidelização. É aqui que o sistema deixa de ser só agenda e vira gestão.", "Acima de ~R$200/mês — operação completa: soma camadas como NF-e, atendimento automático e relatórios mais densos. Faz sentido pra quem já tem volume.", "Cuidado com 'preço sob consulta': se o valor não está publicado, você só descobre depois de falar com vendedor — e costuma ser puxado pra cima conforme o tamanho da sua loja."],
            },
            {
                h2: "O preço do Forbion, sem esconder",
                paragraphs: ["A gente publica o preço porque acredita que você tem que decidir com a informação na mesa, não no escuro. São três planos, todos com 7 dias grátis sem cartão — você roda na sua operação real antes de pagar. O plano anual sai mais barato que pagar mês a mês."],
                bullets: ["Essencial — R$79/mês: agenda, loja online de agendamento, cadastro de clientes e veículos, catálogo com preço por porte, orçamento e estoque. A porta de entrada que organiza a operação.", "Premium — R$179/mês: tudo do Essencial mais clube de assinatura (recorrência), recall de garantia, vistoria do veículo com fotos e relatórios de retenção (RFM). É o plano de quem quer receita previsível.", "Pro — R$197/mês: tudo do Premium mais emissão de NF-e e a assistente do Forbion, que ajuda a confirmar agendamentos e responder o cliente sem você travar no balcão."],
            },
            {
                h2: "A conta de retorno: quando o sistema se paga sozinho",
                paragraphs: ["Olhar só o preço é meio caminho pro erro. A pergunta certa é: quanto ele te devolve por mês? Faça a conta com os seus números, não com promessa de ninguém.", "Dois movimentos costumam pagar a mensalidade sozinhos. Primeiro, o no-show: cada cliente que esquece do horário e some é um espaço vago no pátio que você não recupera. A confirmação automática por WhatsApp lembra o cliente sem você precisar parar pra digitar — basta evitar uma ou duas faltas no mês pra cobrir o custo do plano. Segundo, a recorrência: um único cliente no clube de assinatura, pagando mensalidade de lavagem ou manutenção, já costuma cobrir o valor do Premium. A partir do segundo, é margem.", "Some o que você economiza de tempo: parar de responder agendamento manual, montar orçamento de ticket alto em segundos e trazer o cliente de volta com o recall de garantia da vitrificação ou polimento. O cálculo deixa de ser 'quanto custa' e vira 'quanto eu perco sem'."],
            },
        ],
        faq: [
            { q: "Afinal, quanto custa um sistema para estética automotiva?", a: "No mercado, a maioria fica entre R$50 e R$300 por mês, conforme o que está incluso. No Forbion são três planos com preço aberto: Essencial R$79, Premium R$179 e Pro R$197 por mês, com 7 dias grátis sem cartão e plano anual mais barato." },
            { q: "Tem taxa de instalação, fidelidade ou custo escondido?", a: "Não. O preço publicado é o preço — sem taxa de implantação e sem fidelidade. Você testa 7 dias grátis sem cartão e, se quiser, cancela quando precisar." },
            { q: "Vale a pena pra uma estética pequena, no começo?", a: "Vale justamente pra organizar antes de crescer. O Essencial a R$79 já coloca agenda, loja de agendamento online e cadastro no lugar. Evitar uma ou duas faltas por mês com a confirmação automática já costuma cobrir esse valor." },
            { q: "Por que alguns concorrentes não mostram o preço?", a: "Muitos trabalham com 'preço sob consulta', então o valor só aparece depois de falar com vendedor e pode variar conforme o tamanho da sua loja. A gente prefere publicar: você compara com calma e decide sozinho." },
            { q: "Qual plano escolher?", a: "Se você só quer sair da bagunça do caderno e do WhatsApp, comece no Essencial. Se quer receita previsível com clube de assinatura, recall e vistoria com fotos, vá de Premium. Se precisa de NF-e e atendimento automático, o Pro fecha a conta. Dá pra começar grátis e subir de plano depois." },
        ],
        related: ["software-para-estetica-automotiva", "clube-de-assinatura-estetica-automotiva", "reduzir-no-show-faltas-whatsapp-estetica-automotiva"],
    },
    {
        slug: "como-abrir-e-organizar-uma-estetica-automotiva",
        tier: 3,
        title: "Como Abrir e Organizar uma Estética Automotiva do Zero — Guia Forbion",
        description: "Guia para abrir uma estética automotiva ou lava-rápido do zero: estrutura, serviços iniciais, precificação, presença digital e como já nascer organizado. Comece grátis.",
        h1: "Como abrir e organizar uma estética automotiva do zero",
        lead: "Abrir uma estética automotiva não é só ter box, água e máquina de lavar — é montar uma operação que se sustenta. Este guia mostra o caminho de quem está começando: o que precisa para abrir, quais serviços oferecer primeiro, como precificar sem chutar e como já nascer organizado, com agenda e loja online, em vez de virar refém do caderno seis meses depois.",
        sections: [
            {
                h2: "O básico para abrir: estrutura, ponto e formalização",
                paragraphs: ["Antes de pensar em cliente, resolva o essencial. Estética automotiva tem necessidades específicas: ponto com acesso fácil para carro, espaço coberto para trabalhar em qualquer clima, ponto de água com boa pressão e descarte adequado, e energia que aguente lavadora, aspirador, politriz e compressor ligados ao mesmo tempo. Vale conferir com a prefeitura as regras de descarte de efluentes da sua cidade antes de fechar o ponto — é o tipo de detalhe que trava o negócio depois de aberto.", "Na parte legal, abrir o CNPJ regulariza o negócio, permite emitir nota e comprar insumo no preço de revenda. Muitos começam como MEI pela simplicidade, mas a estética automotiva nem sempre se enquadra nesse formato e há limite de faturamento — vale conversar com um contador antes de escolher o enquadramento. O importante é não deixar a formalização para depois: ela destrava preço de fornecedor e credibilidade com o cliente."],
                bullets: ["Ponto com acesso para carro, área coberta e boa drenagem", "Água com pressão e descarte de efluentes dentro da regra local", "Energia dimensionada para os equipamentos rodando juntos", "CNPJ e enquadramento certo (confirme com contador antes de abrir)", "Equipamento inicial: lavadora de pressão, aspirador, politriz, compressor e EPIs"],
            },
            {
                h2: "Comece pelos serviços certos (e poucos)",
                paragraphs: ["O erro de quem abre é querer oferecer tudo no primeiro dia. Comece com um portfólio enxuto que você domina e que gera fluxo: lavagem, higienização interna e aspiração trazem volume e clientela recorrente. À medida que a técnica e a clientela amadurecem, suba para os serviços de ticket alto — polimento, vitrificação e coating cerâmico — que são onde está a maior margem do setor.", "Pense em escada de valor: o cliente entra pela lavagem barata, conhece seu trabalho e depois fecha um polimento ou uma vitrificação. Por isso vale registrar desde o início o histórico de cada cliente e cada veículo — assim você sabe quem já fez o quê e tem o gancho certo para oferecer o próximo serviço. E desde o primeiro carro, trabalhe com preço por porte: um SUV ou uma picape consomem mais tempo e mais produto que um hatch, e não podem custar o mesmo."],
                bullets: ["Entrada: lavagem, aspiração e higienização interna — volume e hábito", "Ticket alto: polimento, vitrificação e coating cerâmico — maior margem", "Catálogo com preço e duração por porte de veículo desde o começo", "Histórico de cliente e veículo para oferecer o próximo serviço na hora certa"],
            },
            {
                h2: "Precifique com método e mostre seu preço sem vergonha",
                paragraphs: ["Precificar no olhômetro é o jeito mais rápido de trabalhar muito e sobrar pouco. Descubra a sua hora técnica: some custo fixo (aluguel, água, luz, sistema), o quanto você precisa tirar por mês e a meta de lucro, e divida pelas horas que realmente consegue faturar. Some o material consumido em cada serviço e aplique a margem. Esse número é a base de toda a sua tabela.", "Com a tabela na mão, não esconda preço. Cliente que não sabe quanto custa some — e ficar respondendo \"quanto é?\" no WhatsApp o dia todo é trabalho que não vira faturamento. Deixe serviços, preços e horários visíveis e deixe o cliente agendar sozinho. Um guia completo de precificação ajuda a fechar a conta serviço a serviço."],
            },
            {
                h2: "Nasça organizado: agenda e loja online desde o dia um",
                paragraphs: ["A maioria das estéticas começa no caderno e no WhatsApp. Funciona até o segundo carro do dia — depois vira horário marcado em dois lugares, cliente esquecido e faturamento que ninguém sabe quanto foi. Quem já abre organizado não tem esse retrabalho depois. Com o Forbion você monta a operação desde o começo: o cliente agenda sozinho pela sua loja online (link na bio do Instagram e no Google), você acompanha o pátio do dia e fecha a comanda com o pagamento entrando direto nos relatórios.", "Começar organizado também significa registrar a entrada do veículo com a vistoria com fotos (protege você de reclamação de avaria), avisar o cliente automaticamente quando a vitrificação precisa de revisão com o recall de garantia, e plantar receita previsível com o clube de assinatura, transformando lavagem em mensalidade. Um atendente que não dorme cuida da confirmação automática dos agendamentos, reduzindo falta sem você grudado no celular.", "O Forbion tem 7 dias grátis sem cartão: começa no Essencial (R$79/mês), com agenda e loja online; sobe para o Premium (R$179/mês) quando quer recorrência, clube e relatórios; e chega ao Pro (R$197/mês) com NF-e e assistente quando o movimento aperta. O plano anual sai mais barato — e a regra é simples: é mais fácil já nascer organizado do que arrumar a bagunça do caderno depois."],
            },
        ],
        faq: [
            { q: "Preciso de CNPJ para abrir uma estética automotiva?", a: "Sim, o ideal é formalizar. O CNPJ regulariza o negócio, permite emitir nota fiscal e dá acesso ao preço de revenda nos fornecedores de insumo. O enquadramento (MEI, Simples, etc.) depende do seu faturamento previsto e da atividade — confirme com um contador antes de abrir, porque estética automotiva nem sempre se enquadra como MEI." },
            { q: "Quais serviços oferecer quando estou começando?", a: "Comece enxuto, com o que você domina e gera fluxo: lavagem, aspiração e higienização interna. Conforme a clientela e a técnica amadurecem, suba para polimento, vitrificação e coating cerâmico, que têm a maior margem do setor. Não tente oferecer tudo no primeiro dia." },
            { q: "Quanto preciso para abrir uma estética automotiva?", a: "Varia muito conforme o ponto e o equipamento. O básico inclui ponto adequado (água, energia, área coberta), equipamento inicial (lavadora de pressão, aspirador, politriz, compressor, EPIs), formalização e um estoque de insumos para começar. Faça a conta do seu custo fixo mensal desde já — é dele que sai sua hora técnica e, portanto, seus preços." },
            { q: "Vale a pena ter sistema logo no começo, com pouco movimento?", a: "Vale, e talvez seja onde mais economiza dor de cabeça. Começar organizado evita o retrabalho de migrar do caderno e do WhatsApp depois, quando você já está cheio. Com a loja online o cliente agenda sozinho desde o dia um, e você já enxerga faturamento e clientes. O Forbion tem 7 dias grátis sem cartão para testar antes de pagar." },
            { q: "Como começo com o Forbion sendo um negócio novo?", a: "Comece pelo plano Essencial (R$79/mês), que já entrega agenda e loja online de agendamento — o suficiente para nascer organizado. Quando quiser recorrência, clube de assinatura e relatórios, sobe para o Premium (R$179/mês); e o Pro (R$197/mês) adiciona NF-e e assistente. São 7 dias grátis sem cartão e o plano anual sai mais barato." },
        ],
        related: ["como-precificar-servicos-de-estetica-automotiva", "loja-online-agendamento-estetica", "software-para-estetica-automotiva"],
    },
    {
        slug: "sistema-para-lava-a-seco-ecologico-automotivo",
        tier: 3,
        title: "Sistema para Lava a Seco e Lavagem Ecológica Automotiva — Forbion",
        description: "Sistema de gestão para lava a seco e lavagem ecológica a domicílio: agenda por região, loja online pro cliente marcar, clube de assinatura e controle de insumo. A partir de R$79/mês.",
        h1: "Sistema para lava a seco e lavagem ecológica automotiva",
        lead: "Lava a seco é serviço de rota: você vai até o cliente, gasta pouca água e cobra pela conveniência. O Forbion organiza a agenda por região e horário, deixa o cliente marcar sozinho pela sua loja online e transforma a lavagem ecológica em mensalidade com o clube de assinatura — o formato que mais combina com recorrência.",
        sections: [
            {
                h2: "Agenda por região e horário: rota que fecha o dia cheio",
                paragraphs: ["No modelo móvel e a domicílio, o seu maior custo é o deslocamento. Marcar dois clientes em pontos opostos da cidade no mesmo turno é prejuízo de tempo e combustível. No Forbion você organiza a agenda por horário e concentra os atendimentos por bairro ou região do dia, montando uma rota que aproveita cada deslocamento.", "E o cliente que prefere marcar antes faz isso sozinho pela sua loja online de agendamento, escolhendo o serviço, o horário e informando o endereço — sem ocupar você no WhatsApp no meio de uma lavagem. A confirmação automática e o lembrete reduzem o furo de horário, que no domicílio dói mais porque você já se deslocou à toa."],
                bullets: ["Agenda por horário com os atendimentos do dia organizados por região", "Loja online pro cliente marcar sozinho, com endereço e serviço", "Confirmação e lembrete automáticos pra cortar o no-show (a domicílio o furo custa caro)", "Cadastro de cliente, veículo e endereço pra atender mais rápido na volta"],
            },
            {
                h2: "Clube de assinatura: o motor de receita da lavagem ecológica",
                paragraphs: ["Lava a seco a domicílio é o tipo de serviço que o cliente quer repetir: ele não precisa sair de casa e o carro fica sempre limpo. Esse é o terreno perfeito pra recorrência. Com o clube de assinatura você cria planos como '2 lavagens ecológicas por mês' ou 'lavagem semanal no condomínio', o cliente paga a mensalidade e o sistema controla quantos usos ele já consumiu.", "Pra você, isso é receita previsível na largada do mês e rota planejada com antecedência — você já sabe quem atende e onde, em vez de depender de quem chama no dia. Pro cliente, é a comodidade de não pensar mais no assunto. É o formato que tira o negócio da montanha-russa do avulso."],
                bullets: ["Planos mensais com quantidade de lavagens inclusa (ex.: 2, 4 ou ilimitado)", "Controle de quantos usos o cliente já gastou no mês", "Receita recorrente acompanhada no relatório, separada do avulso", "Recall de garantia pra avisar revisão de serviços de proteção (vitrificação, cera)"],
            },
            {
                h2: "Controle de insumo de baixo consumo e preço por porte",
                paragraphs: ["A lavagem a seco vive do produto certo: o seu custo está nos litros de quimica de lava a seco, panos de microfibra e selantes — não na água. Saber quanto rende cada galão e quando repor evita ficar na mão no meio da rota. No Forbion você cadastra esses insumos no estoque com alerta de mínimo, pra repor antes de faltar.", "E como SUV e picape consomem mais produto e mais tempo que um hatch, o preço por porte de veículo aplica o valor certo de cada tamanho no agendamento e no fechamento, sem você recalcular na cabeça a cada atendimento. No fim do mês, o relatório de faturamento e a análise de retenção (RFM) mostram seus melhores assinantes e quem está esfriando, pra você agir antes de perder o cliente da rota."],
                bullets: ["Estoque de insumos de baixo consumo (química, microfibras, selantes) com alerta de mínimo", "Preço por porte do veículo aplicado no agendamento e na comanda", "Relatórios de faturamento e RFM pra ver quem rende e quem está sumindo", "NF-e e assistente que confirma agendamentos sozinho no plano Pro"],
            },
        ],
        faq: [
            { q: "O Forbion serve pra lava a seco que atende a domicílio?", a: "Sim. O cliente agenda pela sua loja online informando endereço e serviço, e você organiza a agenda do dia por horário e região pra montar uma rota que aproveita cada deslocamento. A confirmação e o lembrete automáticos ajudam a evitar o furo de horário, que no atendimento móvel custa caro porque você já se deslocou." },
            { q: "Dá pra montar um plano de lavagem ecológica mensal?", a: "Sim, com o clube de assinatura (a partir do plano Premium, R$179/mês). Você define os serviços e a quantidade inclusa — por exemplo '4 lavagens por mês' — e o sistema controla quantos usos o cliente já consumiu, com a receita recorrente acompanhada no relatório." },
            { q: "Como o sistema ajuda no controle do produto de lava a seco?", a: "No estoque você cadastra os insumos (química de lava a seco, microfibras, selantes) e define o mínimo de cada um. O sistema avisa quando está baixo, pra você repor antes de ficar na mão no meio da rota. Estoque e orçamento já estão no plano Essencial." },
            { q: "Consigo cobrar valores diferentes por tamanho de carro?", a: "Sim. Você define o preço por porte do veículo (hatch, sedan, SUV, picape) e o sistema aplica o valor certo no agendamento e no fechamento, já que carro maior consome mais produto e mais tempo na lavagem a seco." },
            { q: "Quanto custa o Forbion?", a: "São três planos: Essencial R$79, Premium R$179 e Pro R$197 por mês, com 7 dias grátis pra testar sem cartão. O plano anual sai mais barato. O clube de assinatura entra a partir do Premium; NF-e e assistente que confirma agendamentos sozinho ficam no Pro." },
        ],
        related: ["clube-de-assinatura-estetica-automotiva", "sistema-para-lava-rapido", "loja-online-agendamento-estetica"],
    },

    // ── Lote 3b — sub-nicho martelinho (fecha o ranking da Fobi) ──
    {
        slug: "sistema-para-martelinho-de-ouro-reparo-pintura",
        tier: 3,
        title: "Sistema para Martelinho de Ouro e Reparo de Pintura | Forbion",
        description: "Sistema para martelinho de ouro: vistoria com fotos na entrada, orçamento por dano enviável no WhatsApp e histórico do veículo. Teste 7 dias grátis.",
        h1: "Sistema para martelinho de ouro e reparo de pintura",
        lead: "No martelinho de ouro e no reparo de pintura cada carro é um orçamento diferente: depende da peça, do tamanho do dano e do estado em que o veículo chegou. O Forbion ajuda você a fotografar a avaria na entrada, montar o orçamento por dano e enviar pelo WhatsApp em minutos, com o histórico do veículo sempre à mão.",
        sections: [
            {
                h2: "Vistoria com fotos na entrada: prova do estado antes do reparo",
                paragraphs: ["Reparo de pintura e funilaria rápida vivem de uma discussão recorrente: \"esse risco já estava aí quando entreguei?\". Registrar o carro com fotos no momento da entrada tira essa dúvida do caminho e protege os dois lados.", "No Forbion você abre a vistoria, fotografa cada avaria, descreve o ponto a recuperar e coleta a assinatura do cliente ali mesmo. Na saída, repete o registro para mostrar o antes e o depois do mesmo veículo."],
                bullets: ["Fotos da avaria vinculadas à placa e ao cliente", "Assinatura do cliente na entrada e na saída", "Descrição peça a peça do que será reparado", "Registro guardado para consulta futura, não em fotos soltas no celular"],
            },
            {
                h2: "Orçamento por peça e por dano, enviável no WhatsApp",
                paragraphs: ["Como o serviço é orçado caso a caso, o que faz fechar é responder rápido e de forma clara. Em vez de mandar um valor solto, você monta o orçamento separando os itens: ponto de martelinho, polimento, retoque de pintura, peça a substituir.", "Com o orçamento pronto, o cliente recebe o detalhamento pelo WhatsApp e decide na hora. Quanto mais cedo o orçamento chega, maior a chance de o carro entrar na agenda no mesmo dia."],
                bullets: ["Itens separados por dano e por peça", "Envio do orçamento direto pelo WhatsApp", "Resposta rápida para fechar antes do cliente cotar em outro lugar"],
            },
            {
                h2: "Histórico do veículo, agenda e relatórios",
                paragraphs: ["Cada carro que passa pela oficina fica registrado: o que já foi reparado, fotos da época e orçamentos anteriores. Quando o mesmo cliente volta, você consulta o histórico e ganha tempo no atendimento.", "A agenda organiza as entradas para não lotar o box, e os relatórios mostram o que entrou no período. Você também pode publicar uma loja/agenda online para o cliente pedir um orçamento sem ligar."],
                bullets: ["Histórico de reparos e orçamentos por veículo e por cliente", "Agenda de entradas e loja online para captar pedidos", "Relatórios do que foi feito no período"],
            },
        ],
        faq: [
            { q: "Dá para orçar cada dano separado?", a: "Sim. Você monta o orçamento por item, separando ponto de martelinho, polimento, retoque de pintura ou troca de peça, e envia o detalhamento direto pelo WhatsApp para o cliente aprovar." },
            { q: "Como a vistoria com fotos ajuda a evitar discussão sobre arranhões?", a: "Na entrada você fotografa todas as avarias e coleta a assinatura do cliente. Na saída, registra de novo. Assim fica documentado o estado do carro antes e depois do reparo, com data, placa e cliente vinculados." },
            { q: "Consigo ver tudo que já foi feito em um carro que voltou?", a: "Sim. O Forbion guarda o histórico do veículo e do cliente, com reparos anteriores, fotos e orçamentos. Quando o carro retorna, você consulta o registro e atende mais rápido." },
            { q: "O Forbion emite nota fiscal?", a: "A emissão de NF-e e o assistente estão disponíveis no plano Pro. Vistoria com fotos, orçamento, agenda, loja online, histórico e relatórios já estão nos planos iniciais." },
            { q: "Quanto custa e tem teste grátis?", a: "Os planos são Essencial R$79, Premium R$179 e Pro R$197, com 7 dias grátis sem precisar de cartão. O plano anual sai mais barato." },
        ],
        related: ["software-para-detailing-automotivo", "vistoria-veiculo-com-fotos-assinatura", "orcamento-estoque-preco-por-porte-estetica"],
    },
];

export const SEO_SLUGS = SEO_PAGES.map((p) => p.slug);
export const getSeoPage = (slug: string) => SEO_PAGES.find((p) => p.slug === slug);
