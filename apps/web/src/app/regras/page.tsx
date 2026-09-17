'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Trophy,
  Gavel,
  Ticket,
  BadgePercent,
  Ban,
  Clock,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
  Scale,
  CircleDot,
  ScrollText,
  Users,
  HeartHandshake,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const SECTIONS = [
  {
    icon: BookOpen,
    title: '1. Princípios Fundamentais',
    items: [
      { t: 'Contrato bilateral', d: 'Toda e qualquer aposta aceite no website BET62 é um contrato bilateral entre o jogador e a BET62 Apostas Esportivas Ltd, licenciada Malta Gaming Authority (MGA/CRP/123456). Aposta só é vinculativa após confirmação no sistema e dedução do valor da carteira.' },
      { t: 'Odds vinculantes', d: 'A odd apresentada no instante da confirmação (clique "Confirmar Aposta") é a odd contratual. Qualquer alteração de odd posterior ao clique gera um novo modal "Odd atualizada, confirmas?" (pré-jogo) ou "Odds flash" (ao vivo).' },
      { t: 'Idade mínima 18+', d: 'É proibida a participação de menores de idade. Todas as contas são verificadas quanto à idade antes do primeiro levantamento. Contas criadas por menores são encerradas, depósitos reembolsados e banimento permanente por e-mail/selfie/IP.' },
      { t: 'Idioma e jurisdição', d: 'Estas regras existem em português (versão oficial vinculativa). Traduções EN/ES/FR são meramente informativas. Em caso de conflito de versões, prevalece sempre o texto em pt-PT.' },
    ],
  },
  {
    icon: Ticket,
    title: '2. Como são aceites e validadas as apostas',
    items: [
      { t: 'Validação pré-aposta', d: 'A aposta só é aceite após: (i) carteira com saldo disponível, (ii) odd no momento da confirmação ser a mesma ou aceite o novo valor no modal, (iii) evento ainda não ter começado, (iv) não haver mercado suspeita de manipulação / match fixing.' },
      { t: 'Dedução imediata', d: 'Valor da aposta é deduzido imediatamente no momento da confirmação. Não há reservas temporárias ou "pending debit" — o que tu vês no saldo após confirmação é sempre o saldo real.' },
      { t: 'Número de aposta (Bet ID)', d: 'Cada aposta confirmada recebe um Bet ID único (formato BET-XXXXXXXX). Guarda esse ID para qualquer reclamação ou questão junto do apoio — sem Bet ID a resolução pode demorar mais tempo.' },
      { t: 'Anulação antes de evento', d: 'Podes anular a aposta até 5 minutos após confirmação, desde que: (i) evento ainda não tenha começado, (ii) odd ainda não tenha caído mais de 5% face à odd de entrada.' },
    ],
  },
  {
    icon: Trophy,
    title: '3. Resultados oficiais · Fontes · Settlement',
    items: [
      { t: 'Fonte oficial futebol (Source of Truth)', d: 'Futebol: GOAL API (live scores + resultados finais + estatísticas) em conjunto com o site oficial da competição. Em caso de divergência (muito raro), prevalece o comunicado oficial da liga (ex: site LPF para Liga Portugal, site LaLiga, UEFA).' },
      { t: 'Fonte oficial restantes modalidades', d: 'Basquetebol, Ténis, MMA, F1, eSports, NFL, andebol, voleibol, hóquei em patins e todas as restantes 20+ modalidades: dados oficiais do fornecedor PropLine, combinados com site oficial da competição sempre que disponível.' },
      { t: 'Settlement (liquidação)', d: 'Liquidação acontece automaticamente segundos após o resultado oficial. Em caso de atraso superior a 30 minutos, entra equipa Risk para liquidação manual, sempre com tempo de resposta inferior a 2 horas úteis.' },
      { t: 'Erros de settlement', d: 'Se liquidadarmos mal por erro interno: (i) se ficou por menos, complementamos em até 24h com justificação por email. (ii) se pagámos a mais indevidamente, reclamamos só se valor ultrapassar €250 (acordo parcelado disponível, nunca descontos agressivos no saldo).' },
    ],
  },
  {
    icon: BadgePercent,
    title: '4. Tipos de aposta e mercados',
    items: [
      { t: 'Simples (Single)', d: 'Uma seleção. Odd mínima 1.01. Odd máxima 1000.00 (mercados especiais excecionais).' },
      { t: 'Sistema / Acumuladora (Múltipla)', d: 'Até 20 seleções. Odd total mínima 1.05. Todas as seleções têm de ser vencedoras. Se uma for nula (Void), a odd dessa seleção passa a 1.00 e cálculo recalcula automaticamente.' },
      { t: 'Handicap Asiático 0.25 / 0.5 / 0.75 / 1.0', d: 'Aplica divisão stake proporcional: 0.25 = metade stake em 0, metade em 0.5; 0.75 = metade stake em 0.5, metade em 1.0. Regras padrão asiáticas.' },
      { t: 'Over / Under Totals (Golos, Pontos, Sets)', d: 'Inclui prorrogação / tempo regulamentar conforme indicado no nome do mercado. Mercado sem especificação inclui APENAS resultado a 90min (FT). Over/Under Cantos, Cartões: só 90min.' },
      { t: 'Cash-out (Total e Parcial)', d: 'Disponível na maioria dos mercados. Valor cash-out é calculado em tempo real pelo motor de odds provider, sem markup BET62. Suspensão momentânea pode acontecer em volatilidade (ex: golo a marcar).' },
      { t: 'Mercados Entrada e Saída', d: 'BET62 reserva-se o direito de remover jogador/equipa de qualquer mercado em caso de lesão, anulação da participação, match fix suspeito, ou erro técnico de compilação.' },
    ],
  },
  {
    icon: RefreshCw,
    title: '5. Void (Anulação automática) de mercados e eventos',
    items: [
      { t: 'Quando um evento é Void', d: 'Aposta anulada integralmente: devolução 100% stake. Situações: adiamento > 48h, cancelamento definitivo, partida jogada a portas fechadas depois de mercado aceite, vitória WO (walkover), partida com menos de 80min de jogo oficial (exceto se o resultado já estiver irredutível por regulamento).' },
      { t: 'Mercado específico Void', d: 'Mercado anulado isoladamente (ex: "Qual jogador marca primeiro") e jogador lesionado antes do início. Apostas outras seleções no mesmo bilhete continuam ativas, odd desse mercado fica 1.00 na acumulada.' },
      { t: 'Score corrigido (Corrigido pelo oficial)', d: 'Se a competição corrigir o resultado no espaço de 12h após final (ex: gol anulado por VAR), liquidamos novamente com base no resultado final corrigido oficial.' },
    ],
  },
  {
    icon: Ban,
    title: '6. Condutas proibidas em apostas',
    items: [
      { t: 'Match Fixing', d: 'Participação, suspeita ou cumplicidade em manipulação de resultados: fecho IMEDIATO e PERMANENTE de conta, confisco de saldo suspeito, denúncia obrigatória às autoridades competentes (MGA, SICAD, federação desportiva).' },
      { t: 'Surebets / Arbitragem sistemática', d: 'Surebets ocasionais são aceites (na verdade é sinal que o nosso trader está a dormir!). Surebets EM ESCALA (50+ apostas mês em valores elevados) são detetados pelo motor antifraude: limite de stake gradual, e em último caso fecho com saque de saldo líquido.' },
      { t: 'Matched Betting / Bonus Abuse', d: 'Uso de múltiplas contas, VPNs, familiares apenas para capturar bónus: deteção por correlação KYC, BIN, IP, selfies. Todas contas envolvidas são suspensas e bónus removidos; saldo depositado é sempre devolvido.' },
      { t: 'Uso de scripts / bots', d: 'Não autorizamos bots de apostas automáticos em massa. Detetado: limite de taxa, depois fecho. Se fores power user com sistema próprio, fala connosco: podemos criar tier API dedicado com condições comerciais justas.' },
      { t: 'Exploração de bug técnico', d: 'Se tu descobrires um bug técnico que te permita ganhar sem risco, deves comunicar imediatamente (recompensa até €2.000 pelo bug bounty). Explorar sabendo do bug: saldo suspeito confisco, banimento permanente.' },
    ],
  },
  {
    icon: Gavel,
    title: '7. Limites e restrições de stake',
    items: [
      { t: 'Limites por aposta', d: 'Aposta única: mínimo €1, máximo variável por mercado (€5.000 single top ligas futebol; €2.000 NBA; €1.000 ATP WTA; €500 mercados secundários). Limites sobem automaticamente com o tier VIP.' },
      { t: 'Máximo ganho por dia', d: '€50.000 por jogador por dia líquido (todas as modalidades somadas). Para ganhos acima entra liquidação em pagamentos fracionados 3x semanais SEPA garantido.' },
      { t: 'Limitação de conta', d: 'Podemos reduzir stakes máximos para determinados jogadores por razões de gestão de risco. Tal NUNCA acontece por "ganhaste muito", mas sim por padrão de risco: ex: sempre single mesmo jogador mercado específico suspeito.' },
      { t: 'Banimento / Fecho permanente', d: 'Sempre com justificação por escrito enviada por email dentro de 72h. Sempre com levantamento garantido de saldo de origem lícita (não confisco indevido). Recurso disponível para Comissão de Ética e Jogo Responsável.' },
    ],
  },
  {
    icon: Scale,
    title: '8. Reclamações, litígios e resolução alternativa',
    items: [
      { t: 'Prazo reclamação resultado', d: 'Tens 72h úteis após liquidação de uma aposta para reclamar do resultado. Decorrido esse prazo, liquidação é considerada final e aceite.' },
      { t: 'Escalões reclamação', d: '1º: Apoio Cliente (resposta ≤ 2h útil). 2º: Chefia Operações (≤ 24h). 3º: Comissão Ética Independente, composta 2 advogados + 1 jogador representante (decisão final vinculativa para BET62, 10 dias úteis).' },
      { t: 'Plataforma ODR', d: 'Para litígios UE não resolvidos internamente, podes usar Plataforma Online de Resolução de Litígios da Comissão Europeia: ec.europa.eu/consumers/odr (Tudo em pt-PT).' },
      { t: 'Foro aplicável', d: 'Lei Maltesa + Tribunais Sliema, Malta. Sem prejuízo de disposições imperativas do direito consumerista do país de residência (ex: Portaria 635-B/2020 PT para jogos online licenciados).' },
    ],
  },
];

export default function RegrasPage() {
  const [expanded, setExpanded] = React.useState<number | null>(0);
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-10 w-[620px] h-[620px] bg-bet62-secondary/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 left-10 w-[620px] h-[620px] bg-bet62-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="pink" className="px-3 py-1 text-xs uppercase tracking-widest">Regras de Apostas BET62 · v3.2 Jan 2026</Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs"><Clock size={12} /> Vinculativo para todas as apostas · Sem fine print</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden bg-gradient-to-br from-bet62-surface via-bet62-bg to-bet62-surface-2 border-bet62-primary/20">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1.25fr_1fr] gap-10 items-center">
                  <div>
                    <Badge variant="blue" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                      <ScrollText size={12} /> Regras oficiais · 8 capítulos · 100% legível por humanos
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                      O contrato entre<span className="text-bet62-primary"> ti e nós.</span><br className="hidden md:block" />
                      Escrito em <span className="text-bet62-secondary">português claro.</span>
                    </h1>
                    <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
                      Sabemos que ninguém lê as regras. Mas se houver alguma dúvida (ou discussão), é aqui que vamos olhar os dois.
                      Resumimos os pontos mais importantes no bloco verde à direita. Depois podes mergulhar nas secções completas.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button asChild size="xl" variant="glow"><Link href="#capitulos"><Trophy size={18} /> Ver Regras Completas</Link></Button>
                      <Button asChild size="xl" variant="outline"><Link href="/contacto?dept=general"><HeartHandshake size={18} /> Ainda dúvida? Fala connosco</Link></Button>
                    </div>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-3">
                    <Card className="border-emerald-500/30 bg-emerald-500/5">
                      <CardContent className="p-5 space-y-3">
                        <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest"><CheckCircle2 size={12} /> TL;DR · 10 pontos mais importantes</Badge>
                        <ol className="space-y-2.5 text-sm text-white/80 list-decimal pl-4 marker:text-emerald-400 marker:font-bold">
                          <li>Odd no momento da CONFIRMAÇÃO vincula, sempre.</li>
                          <li>Futebol SourceOfTruth = GOAL API + site da Liga (sem dados do fórum!).</li>
                          <li>KYC L1 é obrigatório ANTES do primeiro levantamento, sem exceção.</li>
                          <li>Cash-out disponível em 80% dos mercados, sem markup BET62.</li>
                          <li>Surebets de vez em quando OK; em escala não (stake reduzido).</li>
                          <li>Método levantamento = método depósito (anti-Lavagem).</li>
                          <li>Conta múltiplas detectadas por selfie/IP/BIN → bónus removidos.</li>
                          <li>Tens 72h para reclamar uma liquidação errada.</li>
                          <li>Bug técnico descoberto: REPORTA, recompensa €€€ (bug bounty).</li>
                          <li>Exploração bug intencional → saldo suspeito retido, ban.</li>
                        </ol>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-center gap-4">
                        <Users size={22} className="text-bet62-primary shrink-0" />
                        <div>
                          <p className="text-[11px] uppercase tracking-widest font-bold text-white/45">Escrevemo-las com</p>
                          <p className="font-bold text-white">3 jogadores reais BET62</p>
                          <p className="text-xs text-white/55">Estas regras foram revistas e comentadas por 3 utilizadores top Betfair / Pokerstars / BETCLIC antigos.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.section>

            <section id="capitulos" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6 flex items-center gap-2">
                <BookOpen size={22} className="text-bet62-primary" /> Regras completas · 8 capítulos
              </h2>
              {SECTIONS.map((sec, i) => {
                const Icon = sec.icon;
                const open = expanded === i;
                return (
                  <motion.article key={sec.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}>
                    <Card className={open ? 'border-bet62-primary/40 shadow-xl shadow-bet62-primary/10' : ''}>
                      <button type="button" onClick={() => setExpanded(open ? null : i)} className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-5">
                        <div className="flex items-start md:items-center gap-4">
                          <div className="h-11 w-11 rounded-xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary shrink-0 mt-1 md:mt-0">
                            <Icon size={22} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-black tracking-tight text-white">{sec.title}</h3>
                            <p className="text-xs text-white/50 mt-0.5">{sec.items.length} regras vinculativas nesta secção</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {open && (
                            <Badge variant="pink" className="hidden sm:inline-flex text-[10px]">Expandido</Badge>
                          )}
                          <CircleDot size={20} className={open ? 'text-bet62-primary rotate-90' : 'text-white/45'} />
                        </div>
                      </button>
                      <div className={open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} style={{ display: 'grid', transition: 'grid-template-rows 0.32s ease-out, opacity 0.25s ease-out' }}>
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-6 pb-6 md:pb-8">
                            <div className="border-t border-bet62-border/60 pt-5 space-y-4">
                              {sec.items.map((it, k) => (
                                <div key={it.t} className="grid md:grid-cols-[180px_1fr] gap-4">
                                  <div className="flex items-start gap-2">
                                    <div className="mt-1.5 shrink-0 h-6 w-6 rounded-full bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary text-xs font-bold">
                                      {k + 1}
                                    </div>
                                    <h4 className="font-bold tracking-tight text-white text-sm md:text-base pt-0.5">{it.t}</h4>
                                  </div>
                                  <p className="text-sm md:text-base text-white/70 leading-relaxed border-l-2 border-bet62-border pl-4 md:pl-5 py-1">
                                    {it.d}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.article>
                );
              })}
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 }}>
              <Card className="border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-bet62-bg to-bet62-accent/5">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="flex items-start gap-4">
                    <AlertTriangle size={26} className="text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <Badge variant="amber" className="mb-2">A ler com atenção</Badge>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                        Não te recordas de alguma regra aqui? Suspende a aposta e pergunta.
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-3xl">
                        Nós preferimos atrasar a tua aposta 2 minutos e explicar-te direito, do que tu ganhares a discussão 1 semana depois no apoio.
                        90% dos tickets de regras são resolvidas com um screenshot enviado antes de confirmares.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="xl" variant="outline" className="whitespace-nowrap md:justify-self-end">
                    <Link href="/contacto"><ShieldCheck size={18} /> Falar com Apoio Regras</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
