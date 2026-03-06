"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import SectionBadge from '../ui/section-badge';
import { motion } from 'motion/react';
import { User, Users, Car, Repeat } from 'lucide-react';
import { cn } from '@/utils';

const profiles = [
    {
        icon: User,
        title: "Autônomo ou dono solo",
        description: "Você atende sozinho e agenda tudo no WhatsApp. A gente resolve isso.",
    },
    {
        icon: Users,
        title: "Pequena equipe (2–5 pessoas)",
        description: "Precisa de controle de quem atende o quê e quando. A agenda cuida disso.",
    },
    {
        icon: Car,
        title: "Lavação ou detalhamento",
        description: "Serviços simples ou completos — a loja online organiza pra você.",
    },
    {
        icon: Repeat,
        title: "Quer criar receita recorrente",
        description: "Monte planos de assinatura e transforme cliente avulso em mensalidade.",
    },
];

const ParaQuem = () => {
    return (
        <section id="para-quem" className="w-full py-16 lg:py-24 relative">
            <div className="hidden lg:block absolute -z-10 top-0 -left-1/4 size-1/3 bg-primary/10 rounded-full blur-[8rem]" />

            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <SectionBadge title="PARA QUEM É" />

                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Feito para quem vive
                        <br />
                        de carro limpo
                    </motion.h2>

                    <motion.p
                        className="desc mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Se você tem uma estética automotiva, essa plataforma é sua.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            className={cn(
                                "relative group",
                                "rounded-xl lg:rounded-2xl p-6 overflow-hidden",
                                "bg-cardbox",
                                "transition-all duration-500 hover:border-primary/20"
                            )}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4 + index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <profile.icon className="size-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                {profile.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                {profile.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Se você está cansado de perder agendamento no chat, de não saber quanto vai faturar no mês e de depender só de cliente novo todo dia — o Forbion foi feito pra você.
                </motion.p>
            </Wrapper>
        </section>
    );
};

export default ParaQuem;
