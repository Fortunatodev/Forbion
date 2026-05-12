import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade · Forbion",
    description: "Política de Privacidade da plataforma Forbion para gestão de estéticas automotivas.",
};

// ============================================================================
// IMPORTANTE — PLACEHOLDERS A SUBSTITUIR ANTES DE PUBLICAR
// ----------------------------------------------------------------------------
//   [RAZÃO SOCIAL]   → Nome completo da empresa
//   [CNPJ]           → Número do CNPJ (formato XX.XXX.XXX/XXXX-XX)
//   [ENDEREÇO]       → Endereço completo (rua, nº, cidade, estado, CEP)
//   [EMAIL_DPO]      → Email para encarregado de dados (LGPD) — ex.: privacidade@forbion.digital
//   [EMAIL_SUPORTE]  → Email geral de suporte — ex.: suporte@forbion.digital
// ============================================================================

const LAST_UPDATED = "12 de maio de 2026";

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
            <header className="mb-12">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight font-heading mb-3">
                    Política de Privacidade
                </h1>
                <p className="text-sm text-foreground/60">Última atualização: {LAST_UPDATED}</p>
            </header>

            <article className="prose prose-invert max-w-none space-y-6 text-foreground/85 text-base leading-relaxed">
                <section>
                    <p>
                        A <strong>[RAZÃO SOCIAL]</strong>, inscrita no CNPJ sob o nº <strong>[CNPJ]</strong>,
                        com sede em <strong>[ENDEREÇO]</strong> (doravante &ldquo;Forbion&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;),
                        opera a plataforma <strong>forbion.digital</strong> e o aplicativo
                        <strong> app.forbion.digital</strong> (em conjunto, a &ldquo;Plataforma&rdquo;), um sistema
                        SaaS de gestão para negócios de estética automotiva.
                    </p>
                    <p>
                        Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e
                        compartilhamos as informações dos usuários da Plataforma, em conformidade com a
                        Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — &ldquo;LGPD&rdquo;) e demais
                        normas aplicáveis.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">1. Quem somos e a quem se aplica</h2>
                    <p>
                        A Forbion é a controladora dos dados de proprietários de estabelecimentos
                        (&ldquo;Donos&rdquo;) e operadora dos dados que os Donos coletam de seus clientes finais
                        (&ldquo;Clientes Finais&rdquo;), no exercício da atividade do Dono.
                    </p>
                    <p>
                        Esta política aplica-se a:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Donos de estabelecimentos que contratam a Plataforma;</li>
                        <li>Funcionários que o Dono cadastra para gerenciar a agenda;</li>
                        <li>Clientes Finais que agendam serviços por meio das lojas públicas
                            disponibilizadas em <code className="text-sm">app.forbion.digital/[loja]</code>;</li>
                        <li>Visitantes do site institucional <strong>forbion.digital</strong>.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">2. Quais dados coletamos</h2>

                    <h3 className="text-lg font-semibold mt-6 mb-2">2.1. Dados fornecidos diretamente por você</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Conta Google:</strong> nome, endereço de e-mail e foto de perfil
                            (quando você usa &ldquo;Entrar com Google&rdquo;).</li>
                        <li><strong>Cadastro de Dono:</strong> nome do estabelecimento, telefone, endereço,
                            CNPJ (opcional), horários de funcionamento.</li>
                        <li><strong>Cadastro de Cliente Final:</strong> nome, telefone, e-mail (opcional),
                            dados do veículo (placa, modelo, marca, cor).</li>
                        <li><strong>Funcionários:</strong> nome e e-mail (cadastrados pelo Dono).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">2.2. Dados gerados pelo uso</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Histórico de agendamentos, serviços prestados e pagamentos registrados.</li>
                        <li>Notificações enviadas (lembretes, confirmações).</li>
                        <li>Estatísticas agregadas de uso da Plataforma.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">2.3. Dados de integrações</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Google Calendar (opcional):</strong> quando você autoriza, recebemos um
                            <em> refresh token </em>do Google que nos permite criar, atualizar e excluir
                            eventos do calendário que <em>nosso próprio app</em> criar. Nunca lemos
                            eventos criados por outros aplicativos ou pessoas. O token fica armazenado de
                            forma criptografada em nosso banco de dados e pode ser revogado a qualquer
                            momento, por você, em{" "}
                            <a href="https://myaccount.google.com/permissions"
                               target="_blank" rel="noopener noreferrer"
                               className="text-primary underline">
                                myaccount.google.com/permissions
                            </a>
                            {" "}ou diretamente no botão &ldquo;Desconectar&rdquo; dentro da Plataforma.</li>
                        <li><strong>CactoPay:</strong> dados de pagamento são processados diretamente pela
                            CactoPay. A Forbion recebe apenas a confirmação de pagamento (sem dados de
                            cartão).</li>
                        <li><strong>Resend:</strong> usamos para envio de e-mails transacionais
                            (lembretes, confirmações). Endereços de e-mail são compartilhados apenas para
                            envio dessas mensagens.</li>
                        <li><strong>UploadThing:</strong> para hospedar imagens de serviços que o Dono
                            faz upload.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">2.4. Dados técnicos</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Endereço IP, tipo de navegador, sistema operacional.</li>
                        <li>Logs de requisições (necessários para segurança e diagnóstico).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">3. Para que usamos seus dados</h2>
                    <p>Usamos os dados pessoais para as seguintes finalidades:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Operação da Plataforma:</strong> criar e gerenciar sua conta, processar
                            agendamentos, enviar notificações, gerar relatórios.</li>
                        <li><strong>Integração com Google Calendar:</strong> criar e gerenciar eventos no
                            seu calendário pessoal (apenas com sua autorização explícita).</li>
                        <li><strong>Cobrança:</strong> processar assinaturas e pagamentos via CactoPay.</li>
                        <li><strong>Comunicação:</strong> enviar e-mails de confirmação, lembretes de
                            agendamento, atualizações da Plataforma.</li>
                        <li><strong>Suporte:</strong> responder dúvidas e resolver problemas técnicos.</li>
                        <li><strong>Segurança:</strong> prevenir fraudes, abusos e acesso não autorizado.</li>
                        <li><strong>Cumprimento legal:</strong> atender obrigações fiscais, contábeis e
                            regulatórias.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">4. Base legal (LGPD)</h2>
                    <p>O tratamento dos seus dados se baseia em:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Execução de contrato:</strong> para entregar os serviços contratados.</li>
                        <li><strong>Consentimento:</strong> para integrações opcionais como Google Calendar.</li>
                        <li><strong>Legítimo interesse:</strong> para segurança, prevenção de fraudes e
                            melhoria do serviço.</li>
                        <li><strong>Cumprimento de obrigação legal:</strong> para retenção fiscal e
                            atendimento de autoridades.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">5. Compartilhamento de dados</h2>
                    <p>Compartilhamos dados apenas com:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Provedores de infraestrutura:</strong> Railway (hospedagem da API), Neon
                            (banco de dados PostgreSQL), Vercel (hospedagem do site).</li>
                        <li><strong>Provedores de integrações:</strong> Google (OAuth e Calendar API),
                            CactoPay (pagamentos), Resend (e-mails), UploadThing (imagens).</li>
                        <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem
                            judicial.</li>
                    </ul>
                    <p className="mt-3">
                        Não vendemos seus dados pessoais a terceiros. Não fazemos perfilamento para fins
                        publicitários.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">6. Uso de dados das APIs do Google</h2>
                    <p className="bg-foreground/5 border border-foreground/10 rounded-lg p-4 text-sm">
                        O uso pela Forbion de informações recebidas das APIs do Google adere à{" "}
                        <a href="https://developers.google.com/terms/api-services-user-data-policy"
                           target="_blank" rel="noopener noreferrer"
                           className="text-primary underline">
                            Política de Dados do Usuário dos Serviços de API do Google
                        </a>
                        , incluindo os requisitos de Uso Limitado (Limited Use).
                    </p>
                    <p>
                        Especificamente, a Forbion só usa o escopo{" "}
                        <code className="text-sm bg-foreground/10 px-1.5 py-0.5 rounded">
                            .../auth/calendar.events
                        </code>
                        {" "}para criar, atualizar e excluir eventos de calendário que a própria Plataforma
                        criou em nome do usuário. Nunca lemos eventos criados por outras pessoas ou
                        aplicativos, e nunca transferimos esses dados a terceiros.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">7. Armazenamento e segurança</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Dados armazenados em servidores localizados nos Estados Unidos (Neon, AWS US-East).</li>
                        <li>Conexão sempre por HTTPS/TLS.</li>
                        <li>Senhas (quando aplicável) armazenadas com hash bcrypt.</li>
                        <li>Tokens de OAuth armazenados criptografados.</li>
                        <li>Acesso restrito a administradores autorizados.</li>
                        <li>Auditoria de logs para detectar acessos suspeitos.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">8. Retenção de dados</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Dados de conta: mantidos enquanto a conta está ativa.</li>
                        <li>Histórico de agendamentos: mantido por até 5 anos para fins fiscais.</li>
                        <li>Logs técnicos: 90 dias.</li>
                        <li>Após exclusão da conta, dados são anonimizados ou excluídos em até 30 dias,
                            salvo obrigação legal de retenção.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">9. Seus direitos (LGPD)</h2>
                    <p>Como titular de dados pessoais, você pode, a qualquer momento:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Confirmar a existência de tratamento de seus dados;</li>
                        <li>Acessar seus dados;</li>
                        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                        <li>Solicitar a exclusão dos dados pessoais tratados;</li>
                        <li>Solicitar a portabilidade dos dados a outro fornecedor;</li>
                        <li>Revogar o consentimento (ex.: desconectar o Google Calendar);</li>
                        <li>Opor-se a tratamento realizado com base em legítimo interesse;</li>
                        <li>Solicitar revisão de decisões automatizadas.</li>
                    </ul>
                    <p className="mt-3">
                        Para exercer qualquer desses direitos, envie e-mail para{" "}
                        <strong>[EMAIL_DPO]</strong>. Responderemos em até 15 dias úteis.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">10. Cookies</h2>
                    <p>Usamos cookies estritamente necessários para:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Manter sua sessão autenticada (cookie HttpOnly de autenticação);</li>
                        <li>Lembrar preferências do navegador.</li>
                    </ul>
                    <p>Não usamos cookies de marketing ou rastreamento de terceiros.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">11. Crianças e adolescentes</h2>
                    <p>
                        A Plataforma não é destinada a menores de 18 anos. Não coletamos
                        intencionalmente dados de menores. Se você tiver conhecimento de que coletamos
                        dados de um menor, contate-nos imediatamente em <strong>[EMAIL_DPO]</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">12. Alterações nesta Política</h2>
                    <p>
                        Podemos atualizar esta Política periodicamente. Mudanças relevantes serão
                        comunicadas por e-mail e por aviso na Plataforma com pelo menos 15 dias de
                        antecedência. A data &ldquo;Última atualização&rdquo; no topo desta página indica a versão atual.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">13. Contato</h2>
                    <p>
                        Para dúvidas, solicitações relativas à LGPD ou outras questões de privacidade:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Encarregado pelo Tratamento de Dados (DPO):</strong> [EMAIL_DPO]</li>
                        <li><strong>Suporte:</strong> [EMAIL_SUPORTE]</li>
                        <li><strong>Endereço:</strong> [ENDEREÇO]</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-10 mb-4">14. Lei aplicável e foro</h2>
                    <p>
                        Esta Política é regida pelas leis da República Federativa do Brasil. Fica eleito o
                        foro da comarca da sede da Forbion para dirimir quaisquer controvérsias,
                        renunciando-se a qualquer outro, por mais privilegiado que seja.
                    </p>
                </section>
            </article>
        </div>
    );
}
