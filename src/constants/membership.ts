export const pricingPlans = [
  {
    id: 1,
    name: "BASIC",
    price: {
      mensal: 97,
      anual: 970
    },
    tagline: "Para começar organizado",
    description:
      "Organize sua agenda, cadastre seus serviços e receba agendamentos pela loja online. Tudo que você precisa para sair do caos do WhatsApp.",
    features: [
      { text: "Agenda online com todos os agendamentos", highlighted: false },
      { text: "Loja pública de agendamento para o cliente final", highlighted: false },
      { text: "Cadastro de clientes e histórico", highlighted: false },
      { text: "Cadastro de serviços com preço e duração", highlighted: false },
      { text: "Relatórios básicos de faturamento", highlighted: false },
    ],
    cta: {
      text: "Começar grátis por 7 dias",
      href: "#"
    },
    popular: false
  },
  {
    id: 2,
    name: "PRO",
    price: {
      mensal: 197,
      anual: 1970
    },
    tagline: "Para criar receita recorrente e dominar seus números",
    description:
      "Tudo do BASIC + planos de assinatura para seu cliente final, relatórios completos e métricas avançadas de desempenho.",
    features: [
      { text: "Tudo do plano BASIC incluído", highlighted: false },
      { text: "Planos de assinatura para o cliente final", highlighted: true },
      { text: "Descontos automáticos por plano", highlighted: true },
      { text: "Controle de usos incluídos por plano (ex.: 5 lavagens/mês)", highlighted: true },
      { text: "Relatórios completos de faturamento e recorrência", highlighted: true },
      { text: "Métricas avançadas de desempenho", highlighted: true },
    ],
    cta: {
      text: "Quero o PRO — 7 dias grátis",
      href: "https://pay.cakto.com.br/3c23rs8_764829"
    },
    popular: true,
    badge: "RECOMENDADO",
    anualDiscount: "7 dias grátis para testar na sua operação"
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
