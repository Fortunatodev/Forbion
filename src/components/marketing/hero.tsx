"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import { Button } from '../ui/button';
import {
    CalendarDays, Users, LayoutDashboard, Repeat, Tag, Settings, Bell,
    CircleDollarSign, Calendar, Crown, TrendingUp, UserPlus, Star, BarChart3
} from 'lucide-react';
import { Routes } from '@/constants';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import Balancer from 'react-wrap-balancer';
import Container from "../global/container";

/**
 * Preview = réplica fiel da UI do dashboard real do app (fobion-front). Mesmas
 * cores do tema dark (--c-*), mesmos cards (MetricCard r16, ícone 40x40), labels
 * e layout. Estático (sem dados/animação) — só pra mostrar como é o produto.
 */
const T = {
    bg: "#0A0A0A", surface: "#111111", surface2: "#161616",
    border: "#1F1F1F", text: "#FFFFFF", text2: "#A1A1AA", text3: "#71717A", text4: "#52525B",
    primary: "#0066FF",
};

const NAV = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Agenda", icon: CalendarDays },
    { label: "Clientes", icon: Users },
    { label: "Serviços", icon: Tag },
    { label: "Planos", icon: Repeat },
    { label: "Relatórios", icon: BarChart3 },
];

const METRICS = [
    { title: "Receita paga hoje", value: "R$ 1.240", sub: "serviços confirmados como pagos", icon: CircleDollarSign, color: "#10B981" },
    { title: "Agendamentos hoje", value: "8", sub: "agendamentos neste dia", icon: Calendar, color: "#0066FF" },
    { title: "Total de clientes", value: "287", sub: "clientes cadastrados", icon: Users, color: "#F59E0B" },
    { title: "Assinantes ativos", value: "34", sub: "planos ativos agora", icon: Crown, color: "#7C3AED" },
];

const SUMMARY = [
    { label: "Faturamento", value: "R$ 18.4k", icon: CircleDollarSign, color: "#10B981", sub: "+12%", subColor: "#10B981" },
    { label: "Concluídos", value: "142", icon: Calendar, color: "#3B82F6", sub: "agendamentos" },
    { label: "Novos clientes", value: "23", icon: UserPlus, color: "#F59E0B", sub: "no período" },
    { label: "Assinantes", value: "34", icon: Star, color: "#7C3AED", sub: "ativos" },
];

const AGENDA = [
    { time: "09:00", client: "Carlos M.", service: "Lavagem Completa", status: "confirmado" },
    { time: "10:30", client: "Ana P.", service: "Polimento Técnico", status: "confirmado" },
    { time: "13:00", client: "João S.", service: "Higienização Interna", status: "pendente" },
    { time: "14:30", client: "Maria L.", service: "Plano Premium — Lavagem", status: "assinante" },
];

function MetricCard({ title, value, sub, icon: Icon, color }: { title: string; value: string; sub: string; icon: React.ElementType; color: string }) {
    return (
        <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 18, position: "relative", overflow: "hidden", minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 12, fontWeight: 500, color: T.text3, margin: 0 }}>{title}</p>
                    <span style={{ display: "block", marginTop: 8, fontSize: 22, fontWeight: 700, color: T.text, letterSpacing: "-0.5px" }}>{value}</span>
                </div>
                <div style={{ width: 38, height: 38, backgroundColor: `${color}1a`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${color}40` }}>
                    <Icon size={16} color={color} />
                </div>
            </div>
            <span style={{ display: "block", marginTop: 10, fontSize: 11, color: T.text4 }}>{sub}</span>
            <div style={{ position: "absolute", bottom: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: `${color}12`, filter: "blur(20px)", pointerEvents: "none" }} />
        </div>
    );
}

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

                {/* Preview = réplica fiel da UI do dashboard real do app */}
                <div className="mt-10 lg:mt-20 relative">
                    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="absolute inset-0 flex justify-center -z-10">
                            <div className="w-[90%] h-[60%] bg-primary/20 blur-[120px] opacity-40 rounded-full" />
                        </div>

                        <div className="relative rounded-2xl lg:rounded-[26px] p-1.5 sm:p-2 shadow-2xl" style={{ border: `1px solid ${T.border}`, background: T.surface }}>
                            <div className="rounded-xl lg:rounded-[20px] overflow-hidden flex" style={{ border: `1px solid ${T.border}`, background: T.bg }}>

                                {/* Sidebar (igual ao app) */}
                                <aside className="hidden md:flex w-48 shrink-0 flex-col" style={{ borderRight: `1px solid ${T.border}`, background: T.bg }}>
                                    <div className="flex items-center gap-2 px-5 h-14" style={{ borderBottom: `1px solid ${T.border}` }}>
                                        <div className="size-6 rounded-md" style={{ background: T.primary }} />
                                        <span className="font-semibold" style={{ color: T.text }}>Forbion</span>
                                    </div>
                                    <nav className="flex-1 p-3 space-y-1">
                                        {NAV.map((item) => (
                                            <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm"
                                                style={item.active
                                                    ? { background: `${T.primary}1f`, color: T.primary }
                                                    : { color: T.text3 }}>
                                                <item.icon size={16} />
                                                {item.label}
                                            </div>
                                        ))}
                                    </nav>
                                    <div className="p-3" style={{ borderTop: `1px solid ${T.border}` }}>
                                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm" style={{ color: T.text3 }}>
                                            <Settings size={16} /> Configurações
                                        </div>
                                    </div>
                                </aside>

                                {/* Conteúdo */}
                                <div className="flex-1 min-w-0">
                                    {/* Topbar */}
                                    <div className="flex items-center justify-between px-4 sm:px-6 h-14" style={{ borderBottom: `1px solid ${T.border}` }}>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold truncate" style={{ color: T.text }}>Olá, Estética do João 👋</p>
                                            <p className="text-[11px] truncate" style={{ color: T.text4 }}>Aqui está o resumo de hoje</p>
                                        </div>
                                        <div className="flex items-center gap-3 shrink-0">
                                            <Bell size={16} color={T.text3} />
                                            <div className="size-7 rounded-full" style={{ background: T.surface2, border: `1px solid ${T.border}` }} />
                                        </div>
                                    </div>

                                    <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 overflow-hidden" style={{ background: T.bg }}>
                                        {/* MetricCards (idênticos ao app) — 1 col no mobile, igual ao dashboard real */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                            {METRICS.map((m) => (
                                                <MetricCard key={m.title} {...m} />
                                            ))}
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-3">
                                            {/* Próximos agendamentos */}
                                            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 18 }}>
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 style={{ fontSize: 14, fontWeight: 600, color: T.text, margin: 0 }}>Próximos agendamentos</h3>
                                                        <p style={{ fontSize: 11, color: T.text4, marginTop: 3 }}>Pendentes e em andamento hoje</p>
                                                    </div>
                                                    <span style={{ fontSize: 12, color: T.primary }}>Ver todos</span>
                                                </div>
                                                <div className="space-y-2">
                                                    {AGENDA.map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: T.surface2, border: `1px solid ${T.border}` }}>
                                                            <div className="flex items-center gap-3 min-w-0">
                                                                <span className="font-mono shrink-0" style={{ fontSize: 11, color: T.text3, width: 38 }}>{item.time}</span>
                                                                <div className="min-w-0">
                                                                    <p className="truncate" style={{ fontSize: 13, fontWeight: 500, color: T.text, margin: 0 }}>{item.client}</p>
                                                                    <p className="truncate" style={{ fontSize: 11, color: T.text4, margin: 0 }}>{item.service}</p>
                                                                </div>
                                                            </div>
                                                            <span className="shrink-0" style={{
                                                                fontSize: 10, padding: "3px 8px", borderRadius: 999,
                                                                ...(item.status === "confirmado" ? { color: "#10B981", background: "rgba(16,185,129,0.1)" }
                                                                    : item.status === "pendente" ? { color: "#F59E0B", background: "rgba(245,158,11,0.1)" }
                                                                        : { color: "#7C3AED", background: "rgba(124,58,237,0.1)" }),
                                                            }}>
                                                                {item.status === "assinante" ? "Assinante" : item.status === "confirmado" ? "Confirmado" : "Pendente"}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Resumo do mês (SummaryCardGrid) */}
                                            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 18 }}>
                                                <h3 style={{ fontSize: 14, fontWeight: 600, color: T.text, margin: "0 0 12px" }}>Resumo do mês</h3>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {SUMMARY.map((s) => (
                                                        <div key={s.label} style={{ background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 10, padding: "10px 12px" }}>
                                                            <div className="flex items-center gap-1.5 mb-1.5">
                                                                <div style={{ width: 20, height: 20, borderRadius: 5, background: `linear-gradient(135deg, ${s.color}40, ${s.color}1a)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                    <s.icon size={11} color={s.color} />
                                                                </div>
                                                                <span style={{ fontSize: 10, fontWeight: 500, color: T.text3 }}>{s.label}</span>
                                                            </div>
                                                            <p style={{ fontSize: 17, fontWeight: 700, color: T.text, margin: 0, letterSpacing: "-0.3px" }}>{s.value}</p>
                                                            <div className="flex items-center gap-1 mt-0.5">
                                                                {s.subColor && <TrendingUp size={10} color={s.subColor} />}
                                                                <span style={{ fontSize: 10, fontWeight: s.subColor ? 600 : 400, color: s.subColor ?? T.text4 }}>{s.sub}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 z-20 w-full h-12 bg-linear-to-t from-background to-transparent pointer-events-none" />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;
