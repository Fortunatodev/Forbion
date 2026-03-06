export const capabilities = [
    {
        id: 1,
        title: "Agenda Online",
        description: "Veja todos os agendamentos do dia e da semana, status de cada um e quem está atendendo. Sem conflito de horário.",
        illustration: "/images/client.png",
        icon: "calendar",
        badge: "BASIC e PRO"
    },
    {
        id: 2,
        title: "Loja Pública de Agendamento",
        description: "Seu cliente entra na sua loja, escolhe o serviço e agenda sozinho. Você recebe organizado, sem precisar do WhatsApp.",
        illustration: "/images/project.png",
        icon: "store",
        badge: "BASIC e PRO"
    },
    {
        id: 3,
        title: "Cadastro e Histórico de Clientes",
        description: "Saiba quem são seus clientes frequentes, quando foi a última vez que vieram e quais serviços utilizaram.",
        illustration: "/images/team.png",
        icon: "users",
        badge: "BASIC e PRO"
    },
    {
        id: 4,
        title: "Planos de Assinatura",
        description: "Crie planos mensais para seu cliente: lavagens inclusas, descontos automáticos e receita previsível todo mês.",
        illustration: "/images/invoices.png",
        icon: "star",
        badge: "Exclusivo PRO"
    },
    {
        id: 5,
        title: "Relatórios e Métricas",
        description: "Faturamento por período, serviços mais vendidos, assinantes ativos. Veja em números o que está funcionando.",
        illustration: "/images/client.png",
        icon: "chart",
        badge: "Básico no BASIC / Completo no PRO"
    }
];

export const AVATAR_ITEMS = [
    {
        id: 1,
        name: "BRK estética automotiva",
        designation: "Dono de Estética",
        image: "/images/avatars/avatar1.jpg"
    },
    {
        id: 2,
        name: "Estética automotiva do Galiza",
        designation: "Lavação Premium",
        image: "/images/avatars/avatar2.jpg"
    },
    {
        id: 3,
        name: "PRO estética automotiva",
        designation: "Detalhamento Automotivo",
        image: "/images/avatars/avatar3.jpg"
    },
    {
        id: 4,
        name: "Alpha estética automotiva",
        designation: "Estética Automotiva",
        image: "/images/avatars/avatar4.jpg"
    },
    {
        id: 5,
        name: "Brusque estética automotiva",
        designation: "Lavação e Polimento",
        image: "/images/avatars/avatar5.png"
    }
];

export const stats = [
    {
        id: 1,
        value: "Estéticas",
        label: "organizadas com o Forbion",
        avatars: [
            "/images/avatars/avatar1.jpg",
            "/images/avatars/avatar2.jpg",
            "/images/avatars/bis.jpg",
            "/images/avatars/avatar4.jpg",
            "/images/avatars/avatar5.jpg"
        ]
    },
    {
        id: 2,
        value: "Receita",
        label: "recorrente",
        description: "Donos de estética criando previsibilidade de faturamento com planos de assinatura para seus clientes.",
        button: {
            text: "Começar agora",
            href: "#planos"
        }
    }
];
