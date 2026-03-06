import Background from "@/components/global/background";
import Difference from "@/components/marketing/difference";
import Hero from "@/components/marketing/hero";
import Socials from "@/components/marketing/socials";
import ParaQuem from "@/components/marketing/para-quem";
import Workflow from "@/components/marketing/workflow";
import Capibilities from "@/components/marketing/capibilities";
import RecorrenciaDestaque from "@/components/marketing/recorrencia-destaque";
import Membership from "@/components/marketing/membership";
import WallOfLove from "@/components/marketing/wall-of-love";
import Faq from "@/components/marketing/faq";
import Cta from "@/components/marketing/cta";

const HomePage = () => {
    return (
        <div className="w-full min-h-dvh pt-18">
            <Background />
            {/* 1. Hero */}
            <Hero />
            {/* 2. Social proof */}
            <Socials />
            {/* 3. Para Quem É */}
            <ParaQuem />
            {/* 4. Antes x Depois */}
            <Difference />
            {/* 5. Como Funciona */}
            <Workflow />
            {/* 6. Funcionalidades */}
            <Capibilities />
            {/* 7. Destaque Recorrência PRO */}
            <RecorrenciaDestaque />
            {/* 8. Planos (BASIC/PRO + Agência) */}
            <Membership />
            {/* 9. Depoimentos */}
            <WallOfLove />
            {/* 10. FAQ */}
            <Faq />
            {/* 11. CTA Final */}
            <Cta />
        </div>
    )
};

export default HomePage
