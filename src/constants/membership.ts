export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: {
      mensal: 0,
      anual: 0
    },
    description:
      "Para estética automotiva que quer presença premium e conversão no WhatsApp: briefing, direção estratégica e estrutura de landing/site com padrão profissional.",
    features: [
      { text: "Briefing guiado para definir oferta, público e promessa", highlighted: false },
      { text: "Estrutura de landing page focada em orçamento e agendamento", highlighted: false },
      { text: "Copy estratégica para aumentar conversão no WhatsApp", highlighted: false },
      { text: "Layout de alto padrão (percepção de valor e autoridade)", highlighted: false },
      { text: "Mapa de seção + CTA’s + fluxo de contato recomendado", highlighted: false },
      { text: "Proposta sob medida após o briefing (escopo e prazo)", highlighted: false }
    ],
    cta: {
      text: "Falar no WhatsApp e começar",
      href: "#"
    },
    popular: false
  },
  {
    id: 2,
    name: "Estética Automotiva",
    price: {
      mensal: 149,
      anual: 1490
    },
    description:
      "Sistema pronto para estética automotiva: organiza o atendimento, automatiza o WhatsApp e dá visão de faturamento para você escalar com controle.",
    features: [
      { text: "Funil de atendimento no WhatsApp com histórico e status", highlighted: true },
      { text: "IA para acelerar respostas, qualificar e aumentar conversão", highlighted: true },
      { text: "Follow-up para não perder orçamento no “vácuo”", highlighted: true },
      { text: "Gestão centralizada de clientes, serviços e atendimentos", highlighted: true },
      { text: "Relatórios (volume, conversão e faturamento por período)", highlighted: true },
      { text: "Suporte de implantação para padronizar a operação", highlighted: true }
    ],
    cta: {
      text: "Ativar 7 dias grátis (R$149/mês)",
      href: "https://pay.cakto.com.br/3c23rs8_764829"
    },
    popular: true,
    badge: "MAIS CONTRATADO",
    anualDiscount: "7 dias grátis para testar na sua operação"
  }
];

export const trustedCompanies = {
  title: "Estrutura feita para crescer com padrão",
  description:
    "Centralize o atendimento, padronize a equipe e acompanhe indicadores que importam para aumentar faturamento com previsibilidade — do WhatsApp para o processo.",
  cta: {
    text: "Quero uma demonstração no WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=5547992507057&text=Ol%C3%A1%21+Quero+modernizar+os+processos+da+minha+empresa.+Como+voc%C3%AAs+trabalham%3F"
  }
};
