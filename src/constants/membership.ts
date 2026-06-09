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
    name: "Pro",
    price: {
      mensal: 129,
      anual: 1290
    },
    tagline: "Para crescer com recorrência, dados e equipe",
    description:
      "Tudo do Essencial + clube de assinatura (receita recorrente), recall de garantia que traz o cliente de volta, vistoria com fotos e relatórios pra decidir com número.",
    features: [
      { text: "Tudo do Essencial incluído", highlighted: false },
      { text: "Clube de assinatura do cliente (receita recorrente)", highlighted: true },
      { text: "Recall de garantia — avisa o cliente pra voltar", highlighted: true },
      { text: "Vistoria do veículo com fotos e assinatura", highlighted: true },
      { text: "Relatórios e retenção (RFM)", highlighted: true },
      { text: "Equipe com permissões + repasses/comissão", highlighted: true },
    ],
    cta: {
      text: "Começar 7 dias grátis",
      href: "https://pay.cakto.com.br/3c23rs8_764829"
    },
    popular: true,
    badge: "MAIS ESCOLHIDO",
    anualDiscount: "2 meses grátis no plano anual"
  },
  {
    id: 3,
    name: "Premium",
    price: {
      mensal: 179,
      anual: 1790
    },
    tagline: "Nota fiscal e nível premium — em breve",
    description:
      "Tudo do Pro + emissão de NF-e e integrações avançadas. Em desenvolvimento — chega já já.",
    features: [
      { text: "Tudo do Pro incluído", highlighted: false },
      { text: "Emissão de NF-e (nota de serviço)", highlighted: true },
      { text: "Integrações avançadas", highlighted: true },
      { text: "Prioridade no suporte", highlighted: false },
    ],
    cta: {
      text: "Em breve",
      href: ""
    },
    popular: false,
    comingSoon: true
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
