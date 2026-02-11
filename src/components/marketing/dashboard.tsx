"use client";

import React, { useState, useEffect, useRef } from 'react';
import { LayoutGrid, Users, DollarSign, FileText, MessageSquare, Zap, Settings, Search, Bell, TrendingUp, TrendingDown, Calendar, Clock, CheckCircle, AlertCircle, Circle, ChevronRight, BarChart3, Activity, Send, MoreVertical, Phone, Video, Menu, Home, Box, Target, Sparkles, X } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Icons from '../global/icons';

// Componente 3D AI Core
const AICore3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = 400 * dpr;
        canvas.height = 400 * dpr;
        canvas.style.width = '400px';
        canvas.style.height = '400px';
        ctx.scale(dpr, dpr);

        let time = 0;

        const animate = () => {
            time += 0.01;

            ctx.clearRect(0, 0, 400, 400);

            const centerX = 200 + mousePos.x * 20;
            const centerY = 200 + mousePos.y * 20;

            // Núcleo central brilhante
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
            gradient.addColorStop(0, 'rgba(0, 85, 255, 0.8)');
            gradient.addColorStop(0.5, 'rgba(0, 85, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 85, 255, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
            ctx.fill();

            // Anéis orbitando
            for (let i = 0; i < 3; i++) {
                const radius = 80 + i * 25;
                const offset = time + i * 2;

                ctx.strokeStyle = `rgba(0, 85, 255, ${0.4 - i * 0.1})`;
                ctx.lineWidth = 2;
                ctx.beginPath();

                for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
                    const x = centerX + Math.cos(angle + offset) * radius * (1 + Math.sin(angle * 3 + time) * 0.1);
                    const y = centerY + Math.sin(angle + offset) * radius * (1 + Math.cos(angle * 3 + time) * 0.1);

                    if (angle === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }

            // Partículas orbitando
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2 + time;
                const radius = 100 + Math.sin(time * 2 + i) * 20;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;

                const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
                particleGradient.addColorStop(0, 'rgba(0, 85, 255, 1)');
                particleGradient.addColorStop(1, 'rgba(0, 85, 255, 0)');

                ctx.fillStyle = particleGradient;
                ctx.beginPath();
                ctx.arc(x, y, 8, 0, Math.PI * 2);
                ctx.fill();
            }

            // Brilho central pulsante
            const pulseGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
            const pulseIntensity = 0.6 + Math.sin(time * 3) * 0.3;
            pulseGradient.addColorStop(0, `rgba(255, 255, 255, ${pulseIntensity})`);
            pulseGradient.addColorStop(1, 'rgba(0, 85, 255, 0)');

            ctx.fillStyle = pulseGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
            ctx.fill();

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [mousePos]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePos({ x: x * 0.1, y: y * 0.1 });
    };

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
            <canvas
                ref={canvasRef}
                className="filter drop-shadow-2xl"
            />
        </div>
    );
};

// Componente AnimatedNumber
interface AnimatedNumberProps {
    value: number;
    duration?: number;
    suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000, suffix = '' }) => {
    const [displayValue, setDisplayValue] = useState<number>(0);

    useEffect(() => {
        let startTime: number | null = null;
        const startValue = 0;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setDisplayValue(Math.floor(startValue + (value - startValue) * easeOutQuart));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration]);

    return <span>{displayValue}{suffix}</span>;
};

const Dashboard = () => {
    type TabId = 'visao-geral' | 'atendimento' | 'clientes' | 'faturamento' | 'automacoes' | 'relatorios' | 'configuracoes';
    const [activeTab, setActiveTab] = useState<TabId>('visao-geral');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, sender: 'client', text: 'Olá, gostaria de saber mais sobre os planos', time: '14:32', read: true },
        { id: 2, sender: 'ai', text: 'Olá! Fico feliz em ajudar. Temos 3 planos disponíveis: Starter, Professional e Enterprise. Qual o porte da sua empresa?', time: '14:32', read: true, isAI: true },
        { id: 3, sender: 'client', text: 'Somos uma empresa de médio porte, cerca de 50 funcionários', time: '14:34', read: true },
    ]);
    const [typing, setTyping] = useState(false);
    const [selectedConversation, setSelectedConversation] = useState(0);

    const conversations = [
        { id: 0, name: 'João Silva', lastMessage: 'Somos uma empresa de médio...', time: '14:34', unread: 2, status: 'ai', avatar: 'JS' },
        { id: 1, name: 'Maria Santos', lastMessage: 'Qual o prazo de implementação?', time: '13:12', unread: 0, status: 'human', avatar: 'MS' },
        { id: 2, name: 'Tech Solutions LTDA', lastMessage: 'Obrigado pelo atendimento!', time: '12:45', unread: 0, status: 'resolved', avatar: 'TS' },
        { id: 3, name: 'Carlos Oliveira', lastMessage: 'Preciso de uma demonstração', time: '11:23', unread: 5, status: 'ai', avatar: 'CO' },
    ];

    useEffect(() => {
        if (activeTab === 'atendimento' && messages.length === 3) {
            setTimeout(() => {
                setTyping(true);
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: 4,
                        sender: 'ai',
                        text: 'Perfeito! Para 50 funcionários, recomendo nosso plano Professional. Ele inclui: Automação completa de atendimento, Integração com CRM, Relatórios avançados e Suporte prioritário. Gostaria de agendar uma demonstração?',
                        time: '14:35',
                        read: true,
                        isAI: true
                    }]);
                    setTyping(false);
                }, 2500);
            }, 1000);
        }
    }, [activeTab, messages.length]);

    const tabs = [
        { id: 'visao-geral', name: 'Visão Geral', icon: LayoutGrid },
        { id: 'atendimento', name: 'Atendimento', icon: MessageSquare },
        { id: 'clientes', name: 'Clientes', icon: Users },
        { id: 'faturamento', name: 'Faturamento', icon: DollarSign },
        { id: 'automacoes', name: 'Automações IA', icon: Zap },
        { id: 'relatorios', name: 'Relatórios', icon: BarChart3 },
        { id: 'configuracoes', name: 'Configurações', icon: Settings },
    ];

    const statsData = [
        { name: 'Jan', valor: 45000 },
        { name: 'Fev', valor: 52000 },
        { name: 'Mar', valor: 48000 },
        { name: 'Abr', valor: 61000 },
        { name: 'Mai', valor: 55000 },
        { name: 'Jun', valor: 67000 },
    ];

    const revenueData = [
        { mes: 'Jan', receita: 125000, custos: 45000 },
        { mes: 'Fev', receita: 142000, custos: 48000 },
        { mes: 'Mar', receita: 138000, custos: 46000 },
        { mes: 'Abr', receita: 165000, custos: 52000 },
        { mes: 'Mai', receita: 158000, custos: 50000 },
        { mes: 'Jun', receita: 178000, custos: 54000 },
    ];

    const invoices = [
        { id: '#INV-001', cliente: 'Empresa Alpha', valor: 'R$ 15.400', status: 'pago', data: '05/02/2026' },
        { id: '#INV-002', cliente: 'Beta Solutions', valor: 'R$ 8.700', status: 'pendente', data: '08/02/2026' },
        { id: '#INV-003', cliente: 'Gamma Tech', valor: 'R$ 22.100', status: 'pago', data: '10/02/2026' },
        { id: '#INV-004', cliente: 'Delta Corp', valor: 'R$ 12.300', status: 'atrasado', data: '02/02/2026' },
    ];

    const automationSteps = [
        { title: 'Novo Lead', description: 'Captura automática via formulário', status: 'active', connections: 1 },
        { title: 'IA Responde', description: 'Qualificação inteligente em 30s', status: 'processing', connections: 1 },
        { title: 'Proposta Enviada', description: 'Geração automática personalizada', status: 'active', connections: 1 },
        { title: 'Fatura Gerada', description: 'Emissão após aprovação', status: 'active', connections: 1 },
        { title: 'Cliente Convertido', description: 'Onboarding automatizado', status: 'complete', connections: 0 },
    ];

    const getTabContent = () => {
        switch (activeTab) {
            case 'visao-geral':
                return (
                    <div className="space-y-6 animate-fade-in">
                        {/* Hero Card */}
                        <div className="bg-gradient-to-br from-primary/20 via-card to-card rounded-2xl p-6 lg:p-8 border border-border relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-start gap-6">
                                <div className="flex-1">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-2">Bom dia</h2>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <span>Pronto para tornar o dia produtivo</span>
                                        <span>✍️</span>
                                    </p>
                                    <div className="mt-6">
                                        <div className="text-5xl lg:text-6xl font-bold text-card-foreground tracking-tight">
                                            <AnimatedNumber value={5} />:<AnimatedNumber value={4} /><span className="text-xl lg:text-2xl text-muted-foreground ml-2">AM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left lg:text-right">
                                    <div className="flex items-center gap-3 text-card-foreground mb-2">
                                        <div className="text-4xl lg:text-5xl">☁️</div>
                                        <div className="text-3xl lg:text-4xl font-light">22°C</div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Nublado</p>
                                    <p className="text-sm text-muted-foreground/70">Blumenau</p>
                                    <p className="text-xs text-muted-foreground/50 mt-1">Quarta-feira, 11 de Fevereiro, 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <Box className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">Total de Projetos</p>
                                    <div className="flex items-end gap-2">
                                        <h3 className="text-3xl font-bold text-card-foreground"><AnimatedNumber value={24} /></h3>
                                        <div className="flex items-center text-emerald-400 text-sm mb-1">
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            <span>+3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <Users className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                                    <div className="flex items-end gap-2">
                                        <h3 className="text-3xl font-bold text-card-foreground"><AnimatedNumber value={1847} /></h3>
                                        <div className="flex items-center text-emerald-400 text-sm mb-1">
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            <span>+12%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <Activity className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">Taxa de Conclusão</p>
                                    <div className="flex items-end gap-2">
                                        <h3 className="text-3xl font-bold text-card-foreground"><AnimatedNumber value={78} suffix="%" /></h3>
                                        <div className="flex items-center text-emerald-400 text-sm mb-1">
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            <span>+5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <Clock className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">Tempo Médio de Resposta</p>
                                    <div className="flex items-end gap-2">
                                        <h3 className="text-3xl font-bold text-card-foreground"><AnimatedNumber value={32} /> min</h3>
                                        <div className="flex items-center text-muted-foreground text-sm mb-1">
                                            <span>→ 0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Quick Tasks */}
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <h3 className="text-lg font-semibold text-card-foreground mb-4">Tarefas Rápidas</h3>
                                <p className="text-sm text-muted-foreground mb-6">Gerencie suas tarefas diárias</p>

                                <div className="flex gap-2 mb-6">
                                    <button className="flex-1 py-2 px-4 bg-accent rounded-lg text-sm text-card-foreground hover:bg-accent/80 transition-colors">
                                        <Circle className="w-4 h-4 inline mr-2" />
                                        Ativas (0)
                                    </button>
                                    <button className="flex-1 py-2 px-4 bg-accent rounded-lg text-sm text-card-foreground hover:bg-accent/80 transition-colors">
                                        <CheckCircle className="w-4 h-4 inline mr-2" />
                                        Concluídas (0)
                                    </button>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Adicionar tarefa rápida..."
                                        className="flex-1 bg-accent border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
                                    />
                                    <button className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                                        <span className="text-secondary-foreground text-lg">+</span>
                                    </button>
                                </div>
                            </div>

                            {/* Calendar */}
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <h3 className="text-lg font-semibold text-card-foreground mb-2">Calendário</h3>
                                <p className="text-sm text-muted-foreground mb-6">Quarta-feira, 11 de Fevereiro, 2026</p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <button className="p-1 hover:bg-accent rounded">
                                            <ChevronRight className="w-5 h-5 text-muted-foreground rotate-180" />
                                        </button>
                                        <span className="text-card-foreground font-medium">Fevereiro 2026</span>
                                        <button className="p-1 hover:bg-accent rounded">
                                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-7 gap-2 text-center">
                                        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                                            <div key={day} className="text-xs text-muted-foreground font-medium">{day}</div>
                                        ))}
                                        {Array.from({ length: 28 }, (_, i) => i + 1).map(day => (
                                            <div
                                                key={day}
                                                className={`text-sm p-2 rounded-lg ${day === 11
                                                        ? 'bg-primary text-primary-foreground font-semibold'
                                                        : 'text-muted-foreground hover:bg-accent'
                                                    } cursor-pointer transition-colors`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Insights */}
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-card-foreground">Insights</h3>
                                        <p className="text-sm text-muted-foreground">Análise de performance</p>
                                    </div>
                                    <button className="p-2 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </button>
                                </div>

                                <div className="flex justify-center mb-6">
                                    <div className="relative w-48 h-48">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary)" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
                                            <circle cx="50" cy="50" r="35" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="219.8" strokeDashoffset="43.96" strokeLinecap="round" />
                                            <circle cx="50" cy="50" r="30" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="188.4" strokeDashoffset="41.45" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-card-foreground">85%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                                            <span className="text-sm text-card-foreground">Conclusão de Tarefas</span>
                                        </div>
                                        <span className="text-sm font-semibold text-card-foreground">85%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                            <span className="text-sm text-card-foreground">Engajamento de Usuários</span>
                                        </div>
                                        <span className="text-sm font-semibold text-card-foreground">84%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                            <span className="text-sm text-card-foreground">Tempo de Resposta</span>
                                        </div>
                                        <span className="text-sm font-semibold text-card-foreground">78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Revenue Analytics */}
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-card-foreground">Análise de Receita</h3>
                                    <p className="text-sm text-muted-foreground">Detalhamento por categoria</p>
                                </div>
                                <select className="bg-accent border border-border rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:border-ring">
                                    <option>Este Trimestre</option>
                                    <option>Este Mês</option>
                                    <option>Este Ano</option>
                                </select>
                            </div>

                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="mes" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'var(--card)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            color: 'var(--card-foreground)'
                                        }}
                                    />
                                    <Area type="monotone" dataKey="receita" stroke="var(--primary)" fillOpacity={1} fill="url(#colorReceita)" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                );

            case 'atendimento':
                return (
                    <div className="h-[calc(100vh-12rem)] animate-fade-in">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-full">
                            {/* Lista de Conversas */}
                            <div className="lg:col-span-4 bg-card rounded-xl border border-border flex flex-col max-h-[400px] lg:max-h-full">
                                <div className="p-4 border-b border-border">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <input
                                            type="text"
                                            placeholder="Buscar conversas..."
                                            className="w-full bg-accent border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto">
                                    {conversations.map((conv) => (
                                        <div
                                            key={conv.id}
                                            onClick={() => setSelectedConversation(conv.id)}
                                            className={`p-4 border-b border-border cursor-pointer transition-colors ${selectedConversation === conv.id ? 'bg-accent' : 'hover:bg-accent'
                                                }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-semibold flex-shrink-0">
                                                    {conv.avatar}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h4 className="font-semibold text-card-foreground text-sm truncate">{conv.name}</h4>
                                                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        {conv.status === 'ai' && (
                                                            <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full flex items-center gap-1">
                                                                <Sparkles className="w-3 h-3" />
                                                                IA Ativa
                                                            </span>
                                                        )}
                                                        {conv.status === 'human' && (
                                                            <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                                                                Humano
                                                            </span>
                                                        )}
                                                        {conv.status === 'resolved' && (
                                                            <span className="text-xs px-2 py-0.5 bg-muted/50 text-muted-foreground rounded-full">
                                                                Resolvido
                                                            </span>
                                                        )}
                                                        {conv.unread > 0 && (
                                                            <span className="text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full ml-auto">
                                                                {conv.unread}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Área de Chat */}
                            <div className="lg:col-span-8 bg-card rounded-xl border border-border flex flex-col min-h-[500px] lg:min-h-0">
                                {/* Header do Chat */}
                                <div className="p-4 border-b border-border flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-semibold">
                                            {conversations[selectedConversation].avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-card-foreground">{conversations[selectedConversation].name}</h4>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                                <span className="text-xs text-muted-foreground">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                                            <Phone className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                                            <Video className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                                            <MoreVertical className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                    </div>
                                </div>

                                {/* Mensagens */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                                        >
                                            <div className={`max-w-[70%] ${msg.sender === 'client' ? 'order-2' : 'order-1'}`}>
                                                {msg.isAI && (
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="flex items-center gap-1 text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                                                            <Sparkles className="w-3 h-3" />
                                                            <span>IA respondeu automaticamente</span>
                                                        </div>
                                                        <span className="text-xs text-muted-foreground">em 1.2s</span>
                                                    </div>
                                                )}
                                                <div
                                                    className={`rounded-2xl px-4 py-3 ${msg.sender === 'client'
                                                            ? 'bg-primary text-primary-foreground'
                                                            : 'bg-accent text-card-foreground'
                                                        }`}
                                                >
                                                    <p className="text-sm">{msg.text}</p>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1 px-2">
                                                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                                                    {msg.sender === 'client' && (
                                                        <CheckCircle className="w-3 h-3 text-primary" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {typing && (
                                        <div className="flex justify-start animate-slide-up">
                                            <div className="bg-accent rounded-2xl px-4 py-3">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Input de Mensagem */}
                                <div className="p-4 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder="Digite sua mensagem..."
                                            className="flex-1 bg-accent border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
                                        />
                                        <button className="p-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors">
                                            <Send className="w-5 h-5 text-primary-foreground" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'automacoes':
                return (
                    <div className="space-y-8 animate-fade-in">
                        {/* AI Core 3D */}
                        <div className="bg-card rounded-xl p-6 lg:p-8 border border-border">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-card-foreground mb-2">Núcleo de IA Proprietária</h2>
                                <p className="text-muted-foreground">Processamento inteligente em tempo real</p>
                            </div>

                            <div className="flex justify-center mb-8">
                                <AICore3D />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                                <div className="text-center p-4 bg-accent rounded-lg border border-border">
                                    <div className="text-2xl lg:text-3xl font-bold text-card-foreground mb-1"><AnimatedNumber value={2847} /></div>
                                    <div className="text-sm text-muted-foreground">Automações Ativas</div>
                                </div>
                                <div className="text-center p-4 bg-accent rounded-lg border border-border">
                                    <div className="text-2xl lg:text-3xl font-bold text-card-foreground mb-1"><AnimatedNumber value={98} suffix="%" /></div>
                                    <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
                                </div>
                                <div className="text-center p-4 bg-accent rounded-lg border border-border">
                                    <div className="text-2xl lg:text-3xl font-bold text-card-foreground mb-1"><AnimatedNumber value={1} />.<AnimatedNumber value={2} />s</div>
                                    <div className="text-sm text-muted-foreground">Tempo Médio</div>
                                </div>
                            </div>
                        </div>

                        {/* Fluxo de Automação */}
                        <div className="bg-card rounded-xl p-6 lg:p-8 border border-border">
                            <h3 className="text-xl font-bold text-card-foreground mb-2">Fluxo de Automação Inteligente</h3>
                            <p className="text-muted-foreground mb-8">Pipeline completo de conversão automatizada</p>

                            <div className="space-y-6">
                                {automationSteps.map((step, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex items-start gap-4 group">
                                            <div className="flex flex-col items-center">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.status === 'complete' ? 'bg-emerald-500/20 border-2 border-emerald-500' :
                                                        step.status === 'processing' ? 'bg-primary/20 border-2 border-primary animate-pulse' :
                                                            'bg-accent border-2 border-border'
                                                    }`}>
                                                    {step.status === 'complete' ? (
                                                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                                                    ) : step.status === 'processing' ? (
                                                        <Sparkles className="w-6 h-6 text-primary" />
                                                    ) : (
                                                        <Circle className="w-6 h-6 text-muted-foreground" />
                                                    )}
                                                </div>
                                                {step.connections > 0 && (
                                                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent mt-2">
                                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse-flow"></div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex-1 pt-2 group-hover:translate-x-2 transition-transform">
                                                <div className="bg-accent rounded-xl p-4 border border-border hover:border-primary/30 transition-colors">
                                                    <h4 className="font-semibold text-card-foreground mb-1">{step.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                                    {step.status === 'processing' && (
                                                        <div className="mt-3 flex items-center gap-2">
                                                            <div className="flex-1 h-1 bg-accent rounded-full overflow-hidden">
                                                                <div className="h-full bg-primary rounded-full animate-progress"></div>
                                                            </div>
                                                            <span className="text-xs text-primary">Processando...</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-card-foreground">Tempo Economizado</h4>
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-card-foreground mb-2"><AnimatedNumber value={847} />h</div>
                                <p className="text-sm text-muted-foreground">Este mês vs. processo manual</p>
                            </div>

                            <div className="bg-card rounded-xl p-6 border border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-card-foreground">Conversões Automáticas</h4>
                                    <Target className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-card-foreground mb-2"><AnimatedNumber value={342} /></div>
                                <p className="text-sm text-muted-foreground">Leads convertidos por IA</p>
                            </div>

                            <div className="bg-card rounded-xl p-6 border border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-card-foreground">Custo Reduzido</h4>
                                    <DollarSign className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-card-foreground mb-2"><AnimatedNumber value={67} />%</div>
                                <p className="text-sm text-muted-foreground">Em custos operacionais</p>
                            </div>
                        </div>
                    </div>
                );

            case 'faturamento':
                return (
                    <div className="space-y-6 animate-fade-in">
                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2">Receita Total</p>
                                <div className="text-2xl lg:text-3xl font-bold text-card-foreground">R$ <AnimatedNumber value={178000} /></div>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-emerald-400">+23%</span>
                                </div>
                            </div>
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2">Faturas Pagas</p>
                                <div className="text-2xl lg:text-3xl font-bold text-card-foreground"><AnimatedNumber value={142} /></div>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-emerald-400">+12</span>
                                </div>
                            </div>
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2">Pendentes</p>
                                <div className="text-2xl lg:text-3xl font-bold text-card-foreground">R$ <AnimatedNumber value={28400} /></div>
                                <div className="flex items-center gap-1 mt-2">
                                    <span className="text-sm text-muted-foreground">3 faturas</span>
                                </div>
                            </div>
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2">Taxa de Conversão</p>
                                <div className="text-2xl lg:text-3xl font-bold text-card-foreground"><AnimatedNumber value={94} />%</div>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm text-emerald-400">+8%</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-card-foreground">Previsão de Receita</h3>
                                    <p className="text-sm text-muted-foreground">Análise preditiva por IA</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm">
                                    <Sparkles className="w-4 h-4" />
                                    <span>IA Ativa</span>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#666" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#666" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="mes" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'var(--card)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            color: 'var(--card-foreground)'
                                        }}
                                    />
                                    <Area type="monotone" dataKey="receita" stroke="var(--primary)" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
                                    <Area type="monotone" dataKey="custos" stroke="#666" fillOpacity={1} fill="url(#colorCost)" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Invoices Table */}
                        <div className="bg-card rounded-xl border border-border overflow-hidden">
                            <div className="p-6 border-b border-border">
                                <h3 className="text-lg font-semibold text-card-foreground">Faturas Recentes</h3>
                                <p className="text-sm text-muted-foreground">Últimas transações do sistema</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">ID</th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Cliente</th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Valor</th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoices.map((invoice, index) => (
                                            <tr
                                                key={invoice.id}
                                                className="border-b border-border hover:bg-accent transition-colors animate-slide-up"
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <td className="p-4 text-sm text-card-foreground/70 font-mono">{invoice.id}</td>
                                                <td className="p-4 text-sm text-card-foreground">{invoice.cliente}</td>
                                                <td className="p-4 text-sm text-card-foreground font-semibold">{invoice.valor}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${invoice.status === 'pago' ? 'bg-emerald-500/20 text-emerald-400' :
                                                            invoice.status === 'pendente' ? 'bg-yellow-500/20 text-yellow-400' :
                                                                'bg-red-500/20 text-red-400'
                                                        }`}>
                                                        {invoice.status === 'pago' && <CheckCircle className="w-3 h-3" />}
                                                        {invoice.status === 'pendente' && <Clock className="w-3 h-3" />}
                                                        {invoice.status === 'atrasado' && <AlertCircle className="w-3 h-3" />}
                                                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm text-muted-foreground">{invoice.data}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            case 'clientes':
                return (
                    <div className="animate-fade-in">
                        <div className="bg-card rounded-xl p-8 border border-border text-center">
                            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-card-foreground mb-2">Gestão de Clientes</h3>
                            <p className="text-muted-foreground">Módulo em desenvolvimento</p>
                        </div>
                    </div>
                );

            case 'relatorios':
                return (
                    <div className="animate-fade-in">
                        <div className="bg-card rounded-xl p-8 border border-border text-center">
                            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-card-foreground mb-2">Relatórios Avançados</h3>
                            <p className="text-muted-foreground">Módulo em desenvolvimento</p>
                        </div>
                    </div>
                );

            case 'configuracoes':
                return (
                    <div className="animate-fade-in">
                        <div className="bg-card rounded-xl p-8 border border-border text-center">
                            <Settings className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-card-foreground mb-2">Configurações do Sistema</h3>
                            <p className="text-muted-foreground">Módulo em desenvolvimento</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const getTabTitle = () => {
        const tab = tabs.find(t => t.id === activeTab);
        return tab ? tab.name : '';
    };
    const getTabDescription = () => {
        const descriptions: Record<TabId, string> = {
            'visao-geral': 'Monitore métricas principais e gerencie sua plataforma',
            'atendimento': 'Central de atendimento inteligente com IA',
            'clientes': 'Gestão completa da base de clientes',
            'faturamento': 'Controle financeiro e previsões por IA',
            'automacoes': 'Automações inteligentes e fluxos de trabalho',
            'relatorios': 'Análises detalhadas e insights de negócio',
            'configuracoes': 'Configurações e personalização do sistema'
        };
        return descriptions[activeTab]
    };

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden dark">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-sidebar border-r border-sidebar-border flex flex-col
        transform transition-transform duration-300 lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Icons.wordmark className="h-5 w-auto text-white" />
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-sidebar-foreground" />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="mb-6">
                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sidebar-foreground bg-sidebar-accent rounded-lg hover:bg-sidebar-accent/80 transition-colors">
                            <Home className="w-5 h-5" />
                            <span className="text-sm font-medium">Início</span>
                        </button>
                    </div>

                    <div className="mb-2 px-4">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Principal</span>
                    </div>

                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setSidebarOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${activeTab === tab.id
                                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                        : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="text-sm font-medium">{tab.name}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-sidebar-border">
                    <div className="flex items-center gap-3 p-3 bg-sidebar-accent rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center text-white font-semibold">
                            DT
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-sidebar-foreground truncate">Forbion</div>
                            <div className="text-xs text-muted-foreground truncate">user@forbion.com</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-card border-b border-border px-4 lg:px-8 py-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
                            >
                                <Menu className="w-5 h-5 text-foreground" />
                            </button>

                            <div className="flex-1 min-w-0">
                                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                    <Home className="w-4 h-4" />
                                    <ChevronRight className="w-4 h-4" />
                                    <span>Dashboard</span>
                                </div>
                                <h1 className="text-xl lg:text-2xl font-bold text-card-foreground truncate">{getTabTitle()}</h1>
                                <p className="hidden md:block text-sm text-muted-foreground mt-1 truncate">{getTabDescription()}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 lg:gap-3">
                            <div className="hidden md:block relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="w-40 lg:w-64 bg-accent border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
                                />
                                <kbd className="hidden lg:block absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-accent border border-border rounded text-xs text-muted-foreground">
                                    Ctrl+K
                                </kbd>
                            </div>

                            <button className="p-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors relative">
                                <Bell className="w-5 h-5 text-muted-foreground" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                            </button>

                            <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">Este Mês</span>
                            </button>

                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {getTabContent()}
                </main>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes pulse-flow {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(24px);
            opacity: 0.5;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }

        .animate-pulse-flow {
          animation: pulse-flow 2s ease-in-out infinite;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </div>
    );
};

export default Dashboard;