export const pricingPlans = [
  {
    id: 1,
    name: "Essencial",
    price: {
      mensal: 79,
      anual: 790
    },
    tagline: "Para tirar a oficina do caderno",
    description:
      "Tudo pra sair do caos do WhatsApp: agenda online, loja pública de agendamento e controle da operação do dia.",
    features: [
      { text: "Agenda e agendamento online", highlighted: false },
      { text: "Loja pública de agendamento (seu link próprio)", highlighted: false },
      { text: "Cadastro de clientes e veículos", highlighted: false },
      { text: "Serviços com preço por porte de veículo", highlighted: false },
      { text: "Pátio, estoque e orçamentos", highlighted: false },
      { text: "Lembrete e confirmação por WhatsApp", highlighted: false },
    ],
    cta: {
      text: "Começar 7 dias grátis",
      href: "https://pay.cakto.com.br/3b4vdqb"
    },
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: {
      mensal: 179,
      anual: 1790
    },
    tagline: "Para crescer com recorrência e dados",
    description:
      "Tudo do Essencial + clube de assinatura (receita recorrente), recall de garantia que traz o cliente de volta e relatórios pra decidir com número.",
    features: [
      { text: "Tudo do Essencial incluído", highlighted: false },
      { text: "Clube de assinatura do cliente (receita recorrente)", highlighted: true },
      { text: "Recall de garantia — avisa o cliente pra voltar", highlighted: true },
      { text: "Relatórios e retenção (RFM)", highlighted: true },
      { text: "Equipe com permissões + repasses/comissão", highlighted: true },
    ],
    cta: {
      text: "Começar 7 dias grátis",
      href: "https://pay.cakto.com.br/3d4ss4h"
    },
    popular: true,
    badge: "MAIS ESCOLHIDO",
    anualDiscount: "2 meses grátis no plano anual"
  },
  {
    id: 3,
    name: "Pro",
    price: {
      mensal: 197,
      anual: 1970
    },
    tagline: "A oficina no automático, com IA e nota fiscal",
    description:
      "Tudo do Premium + assistente com IA atendendo no WhatsApp, emissão de NF-e e prioridade no suporte.",
    features: [
      { text: "Tudo do Premium incluído", highlighted: false },
      { text: "Assistente com IA (Carla) atendendo no WhatsApp", highlighted: true },
      { text: "Emissão de NF-e (nota de serviço)", highlighted: true },
      { text: "Vistoria do veículo com fotos e assinatura", highlighted: true },
      { text: "Prioridade no suporte", highlighted: true },
    ],
    cta: {
      text: "Começar 7 dias grátis",
      href: "https://pay.cakto.com.br/3c23rs8_764829"
    },
    popular: false
  }
];

export const agencyServices = [
  {
    id: 1,
    name: "Landing Page",
    description: "Página de alta conversão para capturar orçamentos, agendamentos e apresentar sua estética com autoridade.",
    features: [
      "Briefing estratégico",
      "Copy de conversão",
      "Layout premium",
      "Estrutura de CTA e fluxo de contato",
    ],
    cta: {
      text: "Solicitar proposta",
      href: "https://wa.me/5547920025084?text=Ol%C3%A1%2C+quero+uma+landing+page+para+minha+est%C3%A9tica+automotiva."
    }
  },
  {
    id: 2,
    name: "Site Completo + SEO",
    description: "Site institucional com otimização para o Google. Seja encontrado quando o cliente buscar estética automotiva na sua cidade.",
    features: [
      "Site multi-páginas",
      "SEO on-page",
      "Google Business",
      "Copywriting profissional",
    ],
    cta: {
      text: "Solicitar proposta",
      href: "https://wa.me/5547920025084?text=Ol%C3%A1%2C+quero+um+site+completo+com+SEO+para+minha+est%C3%A9tica+automotiva."
    }
  }
];

export const trustedCompanies = {
  title: "Quer um site de alto padrão para sua estética?",
  description:
    "Além do sistema de gestão, criamos sites e landing pages com SEO para que sua estética seja encontrada no Google e converta visitantes em clientes.",
  cta: {
    text: "Falar com a Forbion sobre presença digital",
    href: "https://wa.me/5547920025084?text=Ol%C3%A1%2C+quero+saber+sobre+sites+e+landing+pages+para+minha+est%C3%A9tica."
  }
};
