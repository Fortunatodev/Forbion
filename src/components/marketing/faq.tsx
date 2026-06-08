"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import SectionBadge from '../ui/section-badge';
import { motion } from 'motion/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
    {
        question: "O Forbion funciona para lavação a seco e detalhamento também?",
        answer: "Sim. A plataforma foi feita para qualquer negócio de serviço automotivo recorrente: estética, lavação, detalhamento, martelinho de ouro e similares. Se você agenda serviço, o Forbion organiza."
    },
    {
        question: "Preciso de cartão de crédito para começar?",
        answer: "Não. Os 7 dias de teste são totalmente gratuitos, sem precisar de cartão de crédito. Você acessa a plataforma e começa a configurar sua loja."
    },
    {
        question: "Qual a diferença entre os planos Essencial, Premium e Pro?",
        answer: "O Essencial (R$79/mês) organiza sua agenda, loja de agendamento, serviços e pátio. O Premium (R$179/mês) adiciona o clube de assinatura (receita recorrente), recall de garantia e relatórios. O Pro (R$197/mês) inclui ainda assistente de IA e emissão de NF-e."
    },
    {
        question: "Meu cliente precisa baixar algum app?",
        answer: "Não. A loja pública de agendamento funciona pelo navegador do celular. Seu cliente acessa pelo link da sua loja, faz login com Google e agenda."
    },
    {
        question: "Posso criar mais de um tipo de plano de assinatura?",
        answer: "Sim. A partir do plano Premium você cria quantos planos de assinatura quiser, com preços, descontos e serviços incluídos diferentes para cada um."
    },
    {
        question: "O Forbion também faz sites e landing pages?",
        answer: "Sim. Além do sistema de gestão, oferecemos criação de sites e landing pages de alto padrão com SEO para negócios automotivos. Entre em contato para solicitar uma proposta."
    },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
};

const Faq = () => {
    return (
        <section id="faq" className="w-full py-16 lg:py-24 relative">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <div className="hidden lg:block absolute -z-10 top-0 -left-1/4 size-1/3 bg-primary/10 rounded-full blur-[8rem]" />

            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <SectionBadge title="FAQ" />

                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Perguntas frequentes
                    </motion.h2>

                    <motion.p
                        className="desc mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Tudo que você precisa saber antes de começar.
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-3xl mx-auto mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="rounded-xl bg-cardbox border-none px-6"
                            >
                                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </Wrapper>
        </section>
    );
};

export default Faq;
