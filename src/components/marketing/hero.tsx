"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import { Button } from '../ui/button';
import { ArrowRightIcon, CalendarDays, CreditCard, BarChart3 } from 'lucide-react';
import { Routes } from '@/constants';
import Link from 'next/link';
import { motion, useMotionValue } from 'motion/react';
import { cn } from '@/utils';
import Balancer from 'react-wrap-balancer';
import Container from "../global/container";

const badges = [
    { text: "Agenda Online", top: "44%", left: "20%" },
    { text: "Planos de Assinatura", top: "6%", right: "44%" },
    { text: "Loja de Agendamento", top: "30%", left: "20%" },
    { text: "Relatórios de Faturamento", top: "75%", right: "8%" },
];


const FloatingBadge = ({ text, top, left, right, index }: { text: string; top: string; left?: string; right?: string; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { delay: index * 0.2, duration: 0.5 },
                scale: { delay: index * 0.2, duration: 0.5 },
                y: {
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                }
            }}
            style={{
                x,
                y,
                top,
                left,
                right,
            }}
            className="absolute hidden lg:block z-30"
        >
            <div className="px-3 py-1 rounded-lg border border-foreground/5 backdrop-blur-md">
                <span className="text-base font-handwriting text-foreground/80 whitespace-nowrap select-none">
                    {text}
                </span>
            </div>
        </motion.div>
    );
};

const Hero = () => {

    const badge = "Sistema para Estética Automotiva";
    const description = "Saia do caos do WhatsApp. Organize sua agenda, crie planos de assinatura e veja em números o quanto sua estética está crescendo.";

    return (
        <section className="relative w-full flex items-center justify-center pt-16 lg:pt-32 pb-4 overflow-hidden">
            <Wrapper className="relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            "flex items-center justify-center gap-2 pl-1.5 pr-2 py-1.5 rounded-full",
                            "badge-glow backdrop-blur-md"
                        )}
                    >
                        <span className={cn(
                            "px-2 py-0.5 text-xs font-semibold rounded-full",
                            "bg-foreground text-background"
                        )}>
                            New
                        </span>
                        <Container words={true} className="w-min flex text-sm text-foreground/80">
                            {badge.split(" ").map((word, index) => (
                                <span className="w-min" key={index}>
                                    {word}&nbsp;
                                </span>
                            ))}
                        </Container>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight font-heading mt-8">
                        <Balancer>
                            {"Sistema de Gestão para".split(" ").map((word, index) => (
                                <motion.span
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                            <br />
                            {"Estética Automotiva".split(" ").map((word, index) => (
                                <motion.span
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: (4 + index) * 0.05 }}
                                    className={cn(
                                        "inline-block",
                                        word === "Estética" && "bg-linear-to-r from-primary via-blue-500 to-primary bg-size-[200%_100%] animate-[shimmer_3s_ease-in-out_infinite] text-transparent bg-clip-text"
                                    )}
                                    key={index}
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </Balancer>
                    </h1>

                    <p className="text-base md:text-lg text-foreground/70 mt-6 max-w-2xl">
                        <Balancer>
                            {description.split(" ").map((word, index) => (
                                <motion.span
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.02 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </Balancer>
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className={cn("flex items-center gap-4 flex-wrap justify-center mt-8")}
                    >
                            <Link
                            href={Routes.WhatsApp}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg">
                                Começar 7 dias grátis
                            </Button>
                        </Link>
                        <Link
                            href="#como-funciona"
                        >
                            <Button size="lg" variant="outline">
                                Como funciona?
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={cn("mt-10 lg:mt-20 relative")}
                >
                    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                        {/* Glow background */}
                        <div className="absolute inset-0 flex justify-center -z-10">
                            <div className="w-[90%] h-[60%] bg-primary/20 blur-[120px] opacity-40 rounded-full" />
                        </div>

                        <div className="
        relative 
        rounded-2xl 
        sm:rounded-3xl 
        lg:rounded-[32px]
        border border-foreground/10
        bg-foreground/5 
        backdrop-blur-xl 
        p-2 sm:p-3 lg:p-4
        shadow-2xl
    ">

                                            <div className="
            rounded-xl 
            sm:rounded-2xl 
            lg:rounded-[28px] 
            border border-foreground/10 
            bg-background 
            overflow-hidden
        ">

                                {/* Dashboard Preview com dados realistas */}
                                <div className="w-full h-full scale-[0.98] sm:scale-100 transition-transform duration-500">
                                    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
                                        {/* Header do dashboard */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-muted-foreground">Painel da Estética</p>
                                                <h3 className="text-lg font-semibold mt-1">Visão Geral — Fevereiro</h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-xs text-muted-foreground">Ao vivo</span>
                                            </div>
                                        </div>

                                        {/* Métricas */}
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                                            <div className="rounded-xl bg-foreground/5 border border-foreground/5 p-3 lg:p-4">
                                                <div className="flex items-center gap-2">
                                                    <CalendarDays className="size-4 text-primary" />
                                                    <span className="text-xs text-muted-foreground">Agendamentos Hoje</span>
                                                </div>
                                                <p className="text-2xl font-semibold mt-2">8</p>
                                                <p className="text-xs text-green-500 mt-1">+23% vs semana passada</p>
                                            </div>
                                            <div className="rounded-xl bg-foreground/5 border border-foreground/5 p-3 lg:p-4">
                                                <div className="flex items-center gap-2">
                                                    <CreditCard className="size-4 text-primary" />
                                                    <span className="text-xs text-muted-foreground">Faturamento Mês</span>
                                                </div>
                                                <p className="text-2xl font-semibold mt-2">R$ 4.200</p>
                                                <p className="text-xs text-green-500 mt-1">+12% vs mês anterior</p>
                                            </div>
                                            <div className="rounded-xl bg-foreground/5 border border-foreground/5 p-3 lg:p-4">
                                                <div className="flex items-center gap-2">
                                                    <BarChart3 className="size-4 text-primary" />
                                                    <span className="text-xs text-muted-foreground">Assinantes Ativos</span>
                                                </div>
                                                <p className="text-2xl font-semibold mt-2">12</p>
                                                <p className="text-xs text-green-500 mt-1">R$ 1.788/mês recorrente</p>
                                            </div>
                                            <div className="rounded-xl bg-foreground/5 border border-foreground/5 p-3 lg:p-4">
                                                <div className="flex items-center gap-2">
                                                    <ArrowRightIcon className="size-4 text-primary" />
                                                    <span className="text-xs text-muted-foreground">Clientes Cadastrados</span>
                                                </div>
                                                <p className="text-2xl font-semibold mt-2">87</p>
                                                <p className="text-xs text-muted-foreground mt-1">+5 novos esta semana</p>
                                            </div>
                                        </div>

                                        {/* Agenda do dia */}
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-foreground/80">Agenda de Hoje</p>
                                            <div className="space-y-2">
                                                {[
                                                    { time: "09:00", client: "Carlos M.", service: "Lavagem Completa", status: "confirmado" },
                                                    { time: "10:30", client: "Ana P.", service: "Polimento Técnico", status: "confirmado" },
                                                    { time: "13:00", client: "João S.", service: "Higienização Interna", status: "pendente" },
                                                    { time: "14:30", client: "Maria L.", service: "Plano Premium — Lavagem", status: "assinante" },
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-foreground/[0.03] border border-foreground/5">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xs text-muted-foreground font-mono w-10">{item.time}</span>
                                                            <div>
                                                                <p className="text-sm font-medium">{item.client}</p>
                                                                <p className="text-xs text-muted-foreground">{item.service}</p>
                                                            </div>
                                                        </div>
                                                        <span className={cn(
                                                            "text-xs px-2 py-0.5 rounded-full",
                                                            item.status === "confirmado" && "bg-green-500/10 text-green-500",
                                                            item.status === "pendente" && "bg-yellow-500/10 text-yellow-500",
                                                            item.status === "assinante" && "bg-primary/10 text-primary",
                                                        )}>
                                                            {item.status === "assinante" ? "⭐ Assinante" : item.status === "confirmado" ? "Confirmado" : "Pendente"}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-20 w-full h-3/4 bg-linear-to-t from-background to-background/0 from-10% pointer-events-none" />

                    <div className="absolute top-0 inset-x-0 w-3/5 mx-auto h-1/10 rounded-full bg-primary blur-[4rem] opacity-40 -z-10"></div>

                    {badges.map((badge, index) => (
                        <FloatingBadge
                            key={index}
                            text={badge.text}
                            top={badge.top}
                            left={badge.left}
                            right={badge.right}
                            index={index}
                        />
                    ))}
                </motion.div>
            </Wrapper>
        </section>
    );
};

export default Hero;

