"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import { Button } from '../ui/button';
import {
    ArrowRightIcon, CalendarDays, CreditCard, BarChart3, Users,
    LayoutDashboard, Repeat, Tag, Settings, Bell, Store
} from 'lucide-react';
import { Routes } from '@/constants';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import Balancer from 'react-wrap-balancer';
import Container from "../global/container";

const NAV = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Agenda", icon: CalendarDays },
    { label: "Clientes", icon: Users },
    { label: "Serviços", icon: Tag },
    { label: "Planos", icon: Repeat },
    { label: "Relatórios", icon: BarChart3 },
];

const KPIS = [
    { icon: CalendarDays, label: "Agendamentos hoje", value: "8", hint: "+23% vs semana passada", up: true },
    { icon: CreditCard, label: "Faturamento do mês", value: "R$ 4.200", hint: "+12% vs mês anterior", up: true },
    { icon: Repeat, label: "Assinantes ativos", value: "12", hint: "R$ 1.788/mês recorrente", up: true },
    { icon: Users, label: "Clientes", value: "87", hint: "+5 novos esta semana", up: false },
];

const REVENUE = [40, 55, 48, 70, 62, 88]; // alturas relativas (mini-gráfico)
const MESES = ["Set", "Out", "Nov", "Dez", "Jan", "Fev"];

const AGENDA = [
    { time: "09:00", client: "Carlos M.", service: "Lavagem Completa", status: "confirmado" },
    { time: "10:30", client: "Ana P.", service: "Polimento Técnico", status: "confirmado" },
    { time: "13:00", client: "João S.", service: "Higienização Interna", status: "pendente" },
    { time: "14:30", client: "Maria L.", service: "Plano Premium — Lavagem", status: "assinante" },
];

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
                                <span className="inline-block" key={index}>
                                    {word}&nbsp;
                                </span>
                            ))}
                            <br />
                            {"Estética Automotiva".split(" ").map((word, index) => (
                                <span
                                    className={cn(
                                        "inline-block",
                                        word === "Estética" && "bg-linear-to-r from-primary via-blue-500 to-primary bg-size-[200%_100%] animate-[shimmer_3s_ease-in-out_infinite] text-transparent bg-clip-text"
                                    )}
                                    key={index}
                                >
                                    {word}&nbsp;
                                </span>
                            ))}
                        </Balancer>
                    </h1>

                    <p className="text-base md:text-lg text-foreground/70 mt-6 max-w-2xl">
                        <Balancer>
                            {description.split(" ").map((word, index) => (
                                <span className="inline-block" key={index}>
                                    {word}&nbsp;
                                </span>
                            ))}
                        </Balancer>
                    </p>

                    <div className={cn("flex items-center gap-4 flex-wrap justify-center mt-8")}>
                        <Link href={Routes.AppLogin} target="_blank" rel="noopener noreferrer">
                            <Button size="lg">Começar 7 dias grátis</Button>
                        </Link>
                        <Link href="#como-funciona">
                            <Button size="lg" variant="outline">Como funciona?</Button>
                        </Link>
                    </div>
                </div>

                {/* Preview do painel — espelha o dashboard real do Forbion */}
                <div className="mt-10 lg:mt-20 relative">
                    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="absolute inset-0 flex justify-center -z-10">
                            <div className="w-[90%] h-[60%] bg-primary/20 blur-[120px] opacity-40 rounded-full" />
                        </div>

                        <div className="relative rounded-2xl lg:rounded-[28px] border border-foreground/10 bg-foreground/5 backdrop-blur-xl p-2 sm:p-3 shadow-2xl">
                            <div className="rounded-xl lg:rounded-[22px] border border-foreground/10 bg-background overflow-hidden flex">

                                {/* Sidebar */}
                                <aside className="hidden md:flex w-48 shrink-0 flex-col border-r border-foreground/10 bg-foreground/[0.02]">
                                    <div className="flex items-center gap-2 px-5 h-14 border-b border-foreground/10">
                                        <div className="size-6 rounded-md bg-primary/90" />
                                        <span className="font-semibold">Forbion</span>
                                    </div>
                                    <nav className="flex-1 p-3 space-y-1">
                                        {NAV.map((item) => (
                                            <div
                                                key={item.label}
                                                className={cn(
                                                    "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm",
                                                    item.active
                                                        ? "bg-primary/15 text-primary"
                                                        : "text-muted-foreground"
                                                )}
                                            >
                                                <item.icon className="size-4" />
                                                {item.label}
                                            </div>
                                        ))}
                                    </nav>
                                    <div className="p-3 border-t border-foreground/10">
                                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground">
                                            <Settings className="size-4" /> Configurações
                                        </div>
                                    </div>
                                </aside>

                                {/* Conteúdo */}
                                <div className="flex-1 min-w-0">
                                    {/* Topbar */}
                                    <div className="flex items-center justify-between px-4 sm:px-6 h-14 border-b border-foreground/10">
                                        <div className="flex items-center gap-2">
                                            <Store className="size-4 text-primary" />
                                            <span className="text-sm font-medium">Visão Geral — Fevereiro</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <span className="size-2 rounded-full bg-green-500 animate-pulse" /> Ao vivo
                                            </span>
                                            <Bell className="size-4 text-muted-foreground" />
                                            <div className="size-7 rounded-full bg-foreground/10" />
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-6 space-y-5">
                                        {/* KPIs */}
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                            {KPIS.map((k) => (
                                                <div key={k.label} className="rounded-xl bg-foreground/5 border border-foreground/5 p-3.5">
                                                    <div className="flex items-center gap-2">
                                                        <k.icon className="size-4 text-primary" />
                                                        <span className="text-xs text-muted-foreground">{k.label}</span>
                                                    </div>
                                                    <p className="text-2xl font-semibold mt-2">{k.value}</p>
                                                    <p className={cn("text-xs mt-1", k.up ? "text-green-500" : "text-muted-foreground")}>{k.hint}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid lg:grid-cols-5 gap-4">
                                            {/* Mini-gráfico de faturamento */}
                                            <div className="lg:col-span-2 rounded-xl bg-foreground/5 border border-foreground/5 p-4">
                                                <p className="text-sm font-medium">Faturamento</p>
                                                <p className="text-xs text-muted-foreground">Últimos 6 meses</p>
                                                <div className="mt-4 flex items-end gap-2 h-28">
                                                    {REVENUE.map((h, i) => (
                                                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                                                            <div
                                                                className={cn(
                                                                    "w-full rounded-t-md",
                                                                    i === REVENUE.length - 1 ? "bg-primary" : "bg-primary/30"
                                                                )}
                                                                style={{ height: `${h}%` }}
                                                            />
                                                            <span className="text-[10px] text-muted-foreground">{MESES[i]}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Agenda de hoje */}
                                            <div className="lg:col-span-3 rounded-xl bg-foreground/5 border border-foreground/5 p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium">Agenda de hoje</p>
                                                    <span className="text-xs text-primary">Loja de agendamento ativa</span>
                                                </div>
                                                <div className="space-y-2 mt-3">
                                                    {AGENDA.map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-foreground/[0.03] border border-foreground/5">
                                                            <div className="flex items-center gap-3 min-w-0">
                                                                <span className="text-xs text-muted-foreground font-mono w-10 shrink-0">{item.time}</span>
                                                                <div className="min-w-0">
                                                                    <p className="text-sm font-medium truncate">{item.client}</p>
                                                                    <p className="text-xs text-muted-foreground truncate">{item.service}</p>
                                                                </div>
                                                            </div>
                                                            <span className={cn(
                                                                "text-xs px-2 py-0.5 rounded-full shrink-0",
                                                                item.status === "confirmado" && "bg-green-500/10 text-green-500",
                                                                item.status === "pendente" && "bg-yellow-500/10 text-yellow-500",
                                                                item.status === "assinante" && "bg-primary/10 text-primary",
                                                            )}>
                                                                {item.status === "assinante" ? "Assinante" : item.status === "confirmado" ? "Confirmado" : "Pendente"}
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

                        {/* fade leve só na pontinha de baixo, sem comer o painel */}
                        <div className="absolute inset-x-0 bottom-0 z-20 w-full h-16 bg-linear-to-t from-background to-transparent pointer-events-none" />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;
