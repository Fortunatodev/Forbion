"use client";

import { capabilities } from '@/constants/capabilities';
import Wrapper from '@/components/global/wrapper';
import SectionBadge from '@/components/ui/section-badge';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Users, Calendar, FileText, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/utils';
import { Button } from "../ui/button";
import Image from "next/image";

const Capibilities = () => {
    return (
        <section id="funcionalidades" className="w-full py-16 lg:py-24 relative">
            <div className="hidden lg:block absolute -z-10 top-0 -left-1/4 size-1/3 bg-primary/10 rounded-full blur-[8rem]" />

            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <SectionBadge title="FUNCIONALIDADES" />

                    <motion.h2
                        className="title mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        Tudo que sua estética precisa
                        <br />
                        em um único lugar
                    </motion.h2>

                    <motion.p
                        className="desc mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        Agenda, loja, clientes, planos e relatórios. Tudo integrado.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-12 max-w-5xl mx-auto">
                    <motion.div
                        className={cn(
                            "lg:col-span-7 relative group",
                            "rounded-xl lg:rounded-2xl p-8 overflow-hidden",
                            "bg-cardbox",
                            "transition-all duration-500"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                    >

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold">
                                    {capabilities[0].title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {capabilities[0].description}
                            </p>
                        </div>

                        <div className="mt-6 relative grow h-48 transition-colors duration-300 z-0">
                            <Image
                                src={capabilities[0].illustration}
                                alt="Agenda Online — funcionalidade Forbion"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center z-10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className={cn(
                            "lg:col-span-5 relative group",
                            "rounded-xl lg:rounded-2xl p-8 overflow-hidden",
                            "bg-cardbox",
                            "transition-all duration-500"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.12 }}
                    >

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold">
                                    {capabilities[1].title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {capabilities[1].description}
                            </p>
                        </div>

                        <div className="mt-6 relative grow h-48 transition-colors duration-300 z-0">
                            <Image
                                src={capabilities[1].illustration}
                                alt="Loja Pública de Agendamento — funcionalidade Forbion"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center z-10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className={cn(
                            "lg:col-span-4 relative group",
                            "rounded-xl lg:rounded-2xl p-6 overflow-hidden",
                            "bg-cardbox",
                            "transition-all duration-500"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.16 }}
                    >

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold">
                                    {capabilities[2].title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {capabilities[2].description}
                            </p>
                        </div>

                        <div className="mt-6 relative grow h-48 transition-colors duration-300 z-0">
                            <Image
                                src={capabilities[2].illustration}
                                alt="Cadastro e Histórico de Clientes — funcionalidade Forbion"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center z-10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className={cn(
                            "lg:col-span-4 relative group",
                            "rounded-xl lg:rounded-2xl p-6 overflow-hidden",
                            "bg-cardbox",
                            "transition-all duration-500"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold">
                                    {capabilities[3].title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {capabilities[3].description}
                            </p>
                        </div>

                        <div className="mt-6 relative grow h-48 transition-colors duration-300 z-0">
                            <Image
                                src={capabilities[3].illustration}
                                alt="Planos de Assinatura — funcionalidade Forbion"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center z-10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-4 flex flex-col gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "0px 0px 240px 0px" }}
                        transition={{ duration: 0.3, delay: 0.24 }}
                    >
                        <motion.div
                            className={cn(
                                "relative group rounded-xl lg:rounded-2xl p-6 overflow-visible",
                                "bg-cardbox",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="relative overflow-visible">
                                <h3 className="text-2xl bg-linear-to-r from-foreground to-foreground/70 text-transparent bg-clip-text font-medium">
                                    Tudo num só lugar
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Agenda, recorrência, vistoria e relatórios — feito pra estética automotiva.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className={cn(
                                "relative group rounded-xl lg:rounded-2xl p-6 overflow-hidden",
                                "bg-cardbox",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="relative">
                                <div className="flex items-baseline gap-1">
                                    <h3 className="text-3xl bg-linear-to-r from-foreground to-foreground/70 text-transparent bg-clip-text font-semibold">
                                        Receita recorrente
                                    </h3>
                                </div>
                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                    O clube de assinatura transforma lavagem e manutenção em mensalidade — caixa previsível todo mês.
                                </p>
                                <Link href="/clube-de-assinatura-estetica-automotiva">
                                    <Button size="default" variant="outline" className="mt-2">
                                        Saiba mais
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Capibilities;
