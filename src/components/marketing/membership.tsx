"use client";

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import SectionBadge from '@/components/ui/section-badge';
import { pricingPlans, trustedCompanies, agencyServices } from '@/constants/membership';
import { cn } from '@/utils';
import NumberFlow from '@number-flow/react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState<'mensal' | 'anual'>('mensal');

  return (
    <section id="planos" className="w-full py-16 lg:py-24 relative">
      <div className="hidden lg:block absolute -z-10 top-0 -left-1/4 size-1/3 bg-primary/10 rounded-full blur-[8rem]" />

      <Wrapper>
        <div className="flex flex-col items-center text-center">
          <SectionBadge title="PLANOS DO SISTEMA" />

          <motion.h2
            className="title mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Escolha o plano certo
            <br />
            para sua estética
          </motion.h2>

          <motion.p
            className="desc mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sem contrato longo. Cancele quando quiser. 7 dias grátis em qualquer plano.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 mt-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span
              role="button"
              onClick={() => setBillingCycle('mensal')}
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer",
                billingCycle === 'mensal' ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              Mensal
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === 'mensal' ? 'anual' : 'mensal')}
              className={cn(
                "relative w-10 h-6 rounded-full transition-colors cursor-pointer group",
                "bg-foreground/10",
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 left-0.5 size-5 rounded-full scale-90 shadow-[0_0_10px_rgba(0,85,255,0.8)] group-hover:scale-80 transition-all duration-300 bg-primary",
                  billingCycle === 'anual' ? 'translate-x-4' : 'translate-x-0'
                )}
              />
            </button>

            <span
              role="button"
              onClick={() => setBillingCycle('anual')}
              className={cn(
                "text-sm font-medium transition-colors cursor-pointer",
                billingCycle === 'anual' ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              Anual
            </span>

            <div className="absolute -top-18 -right-3/4 flex flex-col gap-2">
              <span className="text-base text-muted-foreground font-handwriting">
                7 dias grátis em qualquer plano
              </span>
              <Image
                src="/icons/curved-arrow.svg"
                alt="arrow"
                width={50}
                height={20}
                className="w-10 h-auto opacity-70"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
          {pricingPlans.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                className={cn(
                  "relative rounded-xl lg:rounded-2xl p-5 lg:p-8 overflow-hidden",
                  "bg-cardbox",
                  "transition-all duration-300",
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-0 inset-x-0 h-6 w-4/5 mx-auto bg-primary blur-[3rem]" />
                    <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-primary/0 via-primary/50 to-primary/0" />
                  </>
                )}

                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                      {plan.badge ?? "MAIS CONTRATADO"}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>

                  <div className="flex items-baseline w-full mt-4">
                    <span className="text-5xl font-semibold">R$</span>
                    <NumberFlow
                      value={plan.price[billingCycle]}
                      className="text-5xl font-semibold tracking-tight"
                      format={{ notation: 'standard' }}
                    />
                    <motion.span
                      key={billingCycle}
                      initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="text-muted-foreground text-sm ml-1"
                    >
                      {billingCycle === 'mensal' ? '/mês' : '/ano'}
                    </motion.span>
                  </div>

                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <Link href={plan.cta.href}>
                  <Button
                    variant={plan.popular ? "default" : "secondary"}
                    className={cn("w-full mt-6")}
                  >
                    {plan.cta.text}
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>

                <ul className="space-y-3 mt-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                      className={cn("flex items-center gap-2 transition-all duration-200")}
                    >
                      <Check
                        className={cn(
                          "size-3.5",
                          feature.highlighted ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          feature.highlighted
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        )}
                      >
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col items-center text-center mb-8">
            <h3 className="text-2xl font-medium">{trustedCompanies.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-lg">
              {trustedCompanies.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agencyServices.map((service, idx) => (
              <motion.div
                key={service.id}
                className="rounded-xl lg:rounded-2xl p-6 lg:p-8 bg-cardbox"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
              >
                <h4 className="text-xl font-semibold">{service.name}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check className="size-3.5 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.cta.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-4 w-full">
                    {service.cta.text}
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Membership;
