import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Serviço · Forbion",
    description: "Termos de Serviço da plataforma Forbion para gestão de estéticas automotivas.",
};

// ============================================================================
// IMPORTANTE — PLACEHOLDERS A SUBSTITUIR ANTES DE PUBLICAR
//   [RAZÃO SOCIAL]   → Nome completo da empresa
//   [CNPJ]           → Número do CNPJ (formato XX.XXX.XXX/XXXX-XX)
//   [ENDEREÇO]       → Endereço completo
//   [EMAIL_SUPORTE]  → Email geral de suporte
//   [PRECO_PRO]      → Valor mensal do plano PRO (ex.: R$ 89,00)
//   [TRIAL_DIAS]     → Dias de trial (atual: 7)
//   [COMARCA]        → Comarca para foro (ex.: São Paulo/SP)
// ============================================================================

const LAST_UPDATED = "12 de maio de 2026";

export default function TermsPage() {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
            <header className="mb-12">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight font-heading mb-3">
                    Termos de Serviço
                </h1>
                <p className="text-sm text-foreground/60">Última atualização: {LAST_UPDATED}</p>
            </header>

            <article className="prose prose-invert max-w-none space-y-6 text-foreground/85 text-base leading-relaxed">
                <section>
                    <p>
                        Estes Termos de Serviço (&ldquo;Termos&rdquo;) regem o uso da plataforma{" "}
                        <strong>Forbion</strong>, operada por <strong>[RAZÃO SOCIAL]</strong>, inscrita no
                        CNPJ sob o nº <strong>[CNPJ]</strong>, com sede em <strong>[ENDEREÇO]</strong>
                        (&ldquo;Forbion&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;).
                    </p>
                    <p>
                        Ao criar uma conta ou usar a Plataforma, você concorda com estes Termos. Se não
                        concordar, não use o serviço.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">1. Definições</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Plataforma:</strong> o site <strong>forbion.digital</strong> e o
                            aplicativo <strong>app.forbion.digital</strong>, suas funcionalidades e APIs.</li>
                        <li><strong>Dono:</strong> proprietário de estabelecimento de estética automotiva
                            que contrata os serviços da Plataforma.</li>
                        <li><strong>Cliente Final:</strong> consumidor que agenda serviços através da loja
                            pública do Dono.</li>
                        <li><strong>Conta:</strong> credenciais de acesso vinculadas a um Dono.</li>
                        <li><strong>Plano:</strong> nível de serviço contratado (BASIC ou PRO).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">2. Objeto</h2>
                    <p>
                        A Forbion fornece ao Dono uma plataforma SaaS (Software as a Service) para gestão
                        de agendamentos, clientes, funcionários, serviços, planos de fidelidade,
                        pagamentos e integrações com Google Calendar e provedores de pagamento.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cadastro e conta</h2>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>O cadastro é feito via &ldquo;Entrar com Google&rdquo;. O Dono é responsável pela veracidade
                            das informações prestadas.</li>
                        <li>O Dono deve ter no mínimo 18 anos e capacidade legal para contratar.</li>
                        <li>O Dono é o único responsável por manter a confidencialidade das credenciais e
                            por todas as atividades realizadas em sua conta.</li>
                        <li>Cada conta é vinculada a um único estabelecimento. Para múltiplos
                            estabelecimentos, é necessário criar contas separadas.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">4. Período de avaliação (trial)</h2>
                    <p>
                        Ao criar a conta via Google, o Dono recebe <strong>[TRIAL_DIAS] dias</strong> de
                        acesso gratuito a todas as funcionalidades. Findo este prazo, o acesso é
                        bloqueado até que o Dono contrate um plano pago, sem prejuízo dos dados, que
                        permanecem preservados.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">5. Planos e cobrança</h2>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>O Plano PRO custa <strong>[PRECO_PRO]</strong> por mês, cobrado de forma
                            recorrente.</li>
                        <li>Os pagamentos são processados pela <strong>CactoPay</strong>, parceira
                            independente. A Forbion não armazena dados de cartão de crédito.</li>
                        <li>A cobrança ocorre automaticamente no início de cada ciclo (mensal).</li>
                        <li>Em caso de falha no pagamento, o sistema tentará novamente até 3 vezes.
                            Persistindo a inadimplência, o plano é rebaixado para BASIC e o acesso ao
                            dashboard é bloqueado até regularização.</li>
                        <li>Não há fidelidade. O Dono pode cancelar a qualquer momento. O cancelamento
                            evita a próxima cobrança; o serviço permanece disponível até o fim do ciclo
                            já pago.</li>
                        <li>Não há reembolso de períodos parciais já utilizados, salvo em caso de erro
                            comprovado da Forbion.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">6. Uso da Plataforma</h2>
                    <p>O Dono concorda em:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Usar a Plataforma exclusivamente para gestão lícita do seu negócio;</li>
                        <li>Não tentar acessar contas de outros Donos, dados de outros tenants ou áreas
                            restritas;</li>
                        <li>Não fazer engenharia reversa, descompilar ou tentar extrair o código-fonte;</li>
                        <li>Não usar a Plataforma para enviar spam ou conteúdo ilegal;</li>
                        <li>Tratar os dados pessoais dos seus Clientes Finais em conformidade com a
                            LGPD;</li>
                        <li>Manter atualizadas as informações cadastrais e de cobrança.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">7. Relação Dono ↔ Cliente Final</h2>
                    <p>
                        Os agendamentos, serviços prestados, valores cobrados e qualquer relação
                        comercial entre o Dono e seu Cliente Final são <strong>exclusivamente entre as
                        partes</strong>. A Forbion atua apenas como ferramenta de gestão e não é
                        responsável por:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Qualidade dos serviços prestados pelo Dono;</li>
                        <li>Pagamentos, reembolsos ou disputas entre Dono e Cliente;</li>
                        <li>Conteúdo cadastrado pelo Dono (descrições, preços, fotos).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">8. Integrações de terceiros</h2>
                    <p>
                        A Plataforma se integra com Google (login, Calendar), CactoPay (pagamentos),
                        Resend (e-mails) e UploadThing (imagens). Estes serviços possuem seus próprios
                        termos e políticas. A Forbion não se responsabiliza por interrupções ou
                        comportamentos desses serviços externos.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">9. Propriedade intelectual</h2>
                    <p>
                        O software, marca, design, código, conteúdo e funcionalidades da Plataforma são
                        de propriedade exclusiva da Forbion ou de seus licenciantes. Estes Termos
                        concedem ao Dono uma licença <strong>não exclusiva, intransferível e revogável</strong>
                        {" "}de uso da Plataforma enquanto durar a contratação.
                    </p>
                    <p>
                        Os dados inseridos pelo Dono e por seus Clientes Finais permanecem de propriedade
                        do Dono (no caso de dados do negócio) ou do respectivo Cliente Final (no caso de
                        dados pessoais).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">10. Disponibilidade e suporte</h2>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>A Forbion buscará manter a Plataforma disponível 24/7, mas não garante
                            disponibilidade ininterrupta. Manutenções programadas serão comunicadas com
                            antecedência sempre que possível.</li>
                        <li>O suporte é prestado via WhatsApp e e-mail (<strong>[EMAIL_SUPORTE]</strong>),
                            em dias úteis, com tempo de resposta usualmente em até 48 horas úteis.</li>
                        <li>Não há SLA contratual com penalidades, salvo se firmado em contrato
                            específico de serviços corporativos.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">11. Limitação de responsabilidade</h2>
                    <p>
                        Na máxima extensão permitida pela lei aplicável, a responsabilidade total da
                        Forbion perante o Dono, por qualquer reclamação, está limitada ao valor pago pelo
                        Dono nos 12 meses anteriores ao evento que originou a reclamação.
                    </p>
                    <p>
                        A Forbion não se responsabiliza por danos indiretos, lucros cessantes, perda de
                        oportunidade, perda de dados decorrentes de falha do Dono em fazer backup ou em
                        seguir boas práticas de segurança.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">12. Exclusão de conta e dados</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>O Dono pode solicitar exclusão da conta a qualquer momento via
                            <strong> [EMAIL_SUPORTE]</strong>.</li>
                        <li>Dados serão anonimizados ou excluídos em até 30 dias, salvo retenção
                            obrigatória por lei (ex.: 5 anos para registros fiscais).</li>
                        <li>A Forbion pode suspender ou encerrar a conta em caso de violação grave
                            destes Termos, fraude ou inadimplência prolongada (após 60 dias), com aviso
                            prévio de 15 dias quando possível.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">13. Alterações nestes Termos</h2>
                    <p>
                        A Forbion pode atualizar estes Termos. Mudanças relevantes (ex.: aumento de
                        preço, novas obrigações) serão comunicadas por e-mail e por aviso na Plataforma
                        com pelo menos 30 dias de antecedência. O uso continuado após a vigência implica
                        aceitação das mudanças.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">14. Disposições gerais</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Se qualquer cláusula destes Termos for considerada inválida, as demais
                            permanecem em vigor.</li>
                        <li>A tolerância da Forbion quanto a eventuais infrações não constitui renúncia
                            de direitos.</li>
                        <li>Estes Termos representam o acordo integral entre as partes, substituindo
                            comunicações anteriores sobre o mesmo objeto.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">15. Lei aplicável e foro</h2>
                    <p>
                        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
                        eleito o foro da comarca de <strong>[COMARCA]</strong> para dirimir quaisquer
                        controvérsias, renunciando-se a qualquer outro, por mais privilegiado que seja.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">16. Contato</h2>
                    <p>
                        Para dúvidas sobre estes Termos:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>E-mail:</strong> [EMAIL_SUPORTE]</li>
                        <li><strong>Endereço:</strong> [ENDEREÇO]</li>
                    </ul>
                </section>
            </article>
        </div>
    );
}
