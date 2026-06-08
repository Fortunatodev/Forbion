import { CalendarCheck, ShieldCheck, MessageCircle, Car } from "lucide-react";
import Wrapper from "../global/wrapper";

// Substitui a antiga "prova social" falsa (logos de empresas de tecnologia do
// template + claim de que "estéticas em todo o Brasil já usam"). Sem inventar
// cliente: selos de confiança VERDADEIROS, renderizados na hora (sem animação tardia).
const TRUST = [
    { icon: CalendarCheck, title: "7 dias grátis", desc: "Teste na sua operação antes de pagar." },
    { icon: ShieldCheck, title: "Sem fidelidade", desc: "Cancele quando quiser, sem multa." },
    { icon: MessageCircle, title: "Suporte por WhatsApp", desc: "Gente de verdade pra te ajudar." },
    { icon: Car, title: "Feito pra estética automotiva", desc: "Não é sistema genérico adaptado." },
];

const Socials = () => {
    return (
        <section className="w-full py-12">
            <Wrapper>
                <p className="text-center text-sm font-heading font-medium uppercase tracking-wider text-foreground/40">
                    Tudo pra sua estética rodar redondo
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-8 max-w-4xl mx-auto mt-8">
                    {TRUST.map((t) => (
                        <div key={t.title} className="flex flex-col items-center text-center gap-2 px-2">
                            <div className="flex items-center justify-center size-11 rounded-xl border border-foreground/10 bg-foreground/5 text-primary">
                                <t.icon className="size-5" />
                            </div>
                            <p className="font-medium text-foreground mt-1">{t.title}</p>
                            <p className="text-sm text-foreground/55 leading-snug">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Socials;
