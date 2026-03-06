"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import SectionBadge from '../ui/section-badge';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { cn } from '@/utils';
import Link from 'next/link';
import { Routes } from '@/constants';

const RecorrenciaDestaque = () => {
    return (
        <section className="w-full py-16 lg:py-24 relative">
            <div className="hidden lg:block absolute -z-10 top-0 -right-1/4 size-1/3 bg-primary/10 rounded-full blur-[8rem]" />

            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <SectionBadge title="EXCLUSIVO PRO" />

                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Transforme lavagens avulsas
                        <br />
                        em receita recorrente
                    </motion.h2>

                    <motion.p
                        className="desc mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Seu cliente paga todo mês e você dorme tranquilo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto items-center">
                    {/* Passos */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {[
                            {
                                step: "1",
                                text: "Você cria um plano (ex.: \"Plano Premium — R$ 149/mês\")",
                            },
                            {
                                step: "2",
                                text: "Define o que está incluído: 4 lavagens mensais + 10% de desconto em todos os serviços",
                            },
                            {
                                step: "3",
                                text: "O cliente assina pela loja e os benefícios são aplicados automaticamente a cada agendamento",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 px-4 py-4 rounded-xl bg-cardbox"
                            >
                                <div className="size-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-primary">{item.step}</span>
                                </div>
                                <p className="text-sm text-foreground/80 leading-relaxed pt-1">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="pt-2"
                        >
                            <Link href={Routes.WhatsApp} target="_blank" rel="noopener noreferrer">
                                <Button>
                                    Quero criar meu plano de assinatura
                                    <ArrowRight className="size-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Exemplo concreto */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="rounded-xl lg:rounded-2xl p-6 lg:p-8 bg-cardbox border border-primary/10 relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-primary/0 via-primary/40 to-primary/0" />

                            <div className="flex items-center gap-2 mb-4">
                                <Star className="size-5 text-amber-400 fill-amber-400" />
                                <span className="text-sm font-medium text-foreground/60">Exemplo real</span>
                            </div>

                            <h4 className="text-lg font-semibold">
                                Estética do João
                            </h4>

                            <div className="space-y-3 mt-4">
                                <div className="flex items-center justify-between py-2 border-b border-foreground/5">
                                    <span className="text-sm text-muted-foreground">Plano</span>
                                    <span className="text-sm font-medium">Plano Premium</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-foreground/5">
                                    <span className="text-sm text-muted-foreground">Valor mensal</span>
                                    <span className="text-sm font-medium">R$ 149/mês</span>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-foreground/5">
                                    <span className="text-sm text-muted-foreground">Assinantes</span>
                                    <span className="text-sm font-medium">10 clientes</span>
                                </div>
                            </div>

                            <div className="mt-6 rounded-xl bg-primary/5 border border-primary/10 p-4 text-center">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Receita recorrente garantida</p>
                                <p className="text-3xl font-semibold text-primary mt-1">R$ 1.490</p>
                                <p className="text-sm text-muted-foreground mt-1">todo mês, antes de abrir a porta</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default RecorrenciaDestaque;
