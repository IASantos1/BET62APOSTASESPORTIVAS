'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  FileText,
  ShieldAlert,
  Scale,
  AlertTriangle,
  BadgeDollarSign,
  Ticket,
  Ban,
  Clock,
  Gavel,
  FileCheck2,
  RefreshCcw,
  Gift,
  Banknote,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const SECTIONS = [
  {
    id: 'aceitacao',
    icon: FileText,
    title: '1. Aceitação dos Termos',
    body:
      'Ao criares uma conta na BET62, confirmas que tens 18+ anos de idade (ou a idade maior do teu território), residis num país onde jogo online é legal, e aceitas estes Termos e Condições na sua totalidade. A violação de qualquer cláusula justifica encerramento da conta sem indemnização.',
  },
  {
    id: 'conta',
    icon: BadgeDollarSign,
    title: '2. Conta de Jogador',
    body:
      'É permitida apenas UMA conta por pessoa/endereço IP/aggregador familiar/familia alargada, mesmo que em emails diferentes. Contas múltiplas serão detectadas, todas suspensas, e depósitos/ganhos revertidos (exceto restituição do depósito líquido). KYC L1 (BI + comprovativo morada + selfie) é obrigatório antes do PRIMEIRO levantamento.',
  },
  {
    id: 'depositos',
    icon: Banknote,
    title: '3. Depósitos & Levantamentos',
    body:
      'Depósito mínimo €10 (cartão, MB WAY, Multibanco, Pix, SEPA). Levantamento mínimo €20. Método levantamento = método depósito (regra anti-branqueamento). Prazo médio de processamento: cartão 1-3 dias úteis, SEPA 1-2 dias, cripto < 3h. Todos os levantamentos requerem verificação KYC.',
  },
  {
    id: 'bonus',
    icon: Gift,
    title: '4. Bónus & Rollover',
    body:
      'Todos os bónus publicitados (incluindo Freebets e Cashback) estão sujeitos a Rollover 5× sobre o valor do bónus a odd ≥ 1.50 (cumulativo). Validade padrão: 7 dias calendário. Rollover é SOBRE BÓNUS, nunca sobre o dinheiro real do jogador (dinheiro real é sempre 100% levantável em qualquer altura, desde que não haja bónus ativo).',
  },
  {
    id: 'apostas',
    icon: Ticket,
    title: '5. Regras de Apostas',
    body:
      'Odds pré-jogo publicadas são indicativas e podem mudar antes do início. Apostas são aceites e vinculativas a partir da confirmação e crédito na carteira. Resultados oficiais são determinados pelo árbitro do encontro + dados oficiais do fornecedor (GOAL API / PropLine). Em caso de erro manifesto na odd (ex: 20.00 quando deveria ser 2.00), a aposta é anulada e valor devolvido.',
  },
  {
    id: 'cashout',
    icon: RefreshCcw,
    title: '6. Cash-out',
    body:
      'Cash-out total e parcial está disponível na maioria dos mercados pré e ao vivo. A BET62 reserva-se o direito de suspender cash-out em mercados com alta volatilidade, golo a sofrer ou momentos finais do encontro. O valor apresentado é uma estimativa vinculativa apenas no momento da confirmação.',
  },
  {
    id: 'proibido',
    icon: Ban,
    title: '7. Condutas Proibidas',
    body:
      'Arbitragem garantida (surebets sistemáticos em escala), collusion, matched betting profissional, uso de VPN/Escaping para falsificar país residencial, apostas desde IPs tor, exploitation de bug técnico descoberto sem reporte, e qualquer tentativa de fraude KYC. A violação resulta em fecho permanente e confisco de fundos de origem duvidosa.',
  },
  {
    id: 'responsavel',
    icon: ShieldAlert,
    title: '8. Jogo Responsável',
    body:
      'Oferecemos limites configuráveis de depósito diário/semanal/mensal, timeout de 24h, 7d, 30d e auto-exclusão permanente de 1, 3 ou 5 anos (irrevogável). Canal de ajuda GamCare e Jogadores Anónimos disponíveis 24/7. Não promovemos o jogo como forma de ganhar dinheiro.',
  },
  {
    id: 'jurisdicao',
    icon: Gavel,
    title: '9. Lei & Foro',
    body:
      'Estes termos são regidos pela lei maltesa (MGA) com foro aplicável nos tribunais de Sliema, Malta, sem prejuízo de legislação consumerista imperativa do país de residência do jogador na UE. Resolução alternativa de litígios: plataforma ODR da Comissão Europeia (ec.europa.eu/consumers/odr).',
  },
  {
    id: 'alteracoes',
    icon: RefreshCcw,
    title: '10. Alterações aos Termos',
    body:
      'Podemos alterar estes termos a qualquer momento, com aviso prévio de 14 dias por email + banner no website. A continuação do uso após esse prazo significa aceitação tácita. Se não concordares, podes pedir encerramento da conta e levantamento imediato sem penalizações.',
  },
];

export default function TermosPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-10 w-[620px] h-[620px] bg-bet62-secondary/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 right-10 w-[620px] h-[620px] bg-bet62-primary/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="blue" className="px-3 py-1 text-xs uppercase tracking-widest">Legal · Secção</Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs"><Clock size={12} /> Última atualização: Jan 2026</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden bg-gradient-to-br from-bet62-surface via-bet62-bg to-bet62-surface-2 border-bet62-primary/20">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="pink" className="px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <Scale size={12} /> Acordo Jurídico Vinculativo
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                    Termos e Condições Gerais<br />
                    <span className="text-bet62-primary">BET62 Apostas Esportivas Ltd.</span>
                  </h1>
                  <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-3xl">
                    Lê com atenção. Estes termos regulam a relação jurídica entre tu e a BET62. Não aceitámos cláusulas abusivas
                    nem fine-print escondido: escrevemos tudo em português claro. Para resumos simplificados e FAQs,
                    visita a nossa Central de Ajuda.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button asChild size="lg" variant="outline"><Link href="#jurisdicao"><FileCheck2 size={16} /> Última revisão (Jan 2026)</Link></Button>
                    <Button asChild size="lg" variant="outline"><Link href="/privacidade">Ver Política Privacidade</Link></Button>
                  </div>
                  <div className="mt-7 grid sm:grid-cols-3 gap-3">
                    {[
                      { i: Scale, t: 'MGA Malta Gaming', s: 'Autoridade reguladora' },
                      { i: AlertTriangle, t: '18+ Apenas', s: 'Jogo responsável' },
                      { i: FileCheck2, t: 'Cláusulas abusivas: 0', s: 'Revisão externa DECO PROTESTE' },
                    ].map((x, i) => {
                      const Icon = x.i;
                      return (
                        <motion.div key={x.t} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}>
                          <Card>
                            <CardContent className="p-4 flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary shrink-0"><Icon size={18} /></div>
                              <div className="min-w-0">
                                <p className="font-bold tracking-tight text-white text-sm">{x.t}</p>
                                <p className="text-xs text-white/55">{x.s}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <section className="space-y-3">
              {SECTIONS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.article key={s.id} id={s.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.03 }}>
                    <Card className="h-full">
                      <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-5">
                        <div className="shrink-0 h-12 w-12 rounded-2xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary md:mt-1">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white mb-2">{s.title}</h2>
                          <p className="text-sm md:text-base text-white/65 leading-relaxed whitespace-pre-line">{s.body}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.article>
                );
              })}
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
              <Card className="border-bet62-secondary/30 bg-bet62-secondary/5">
                <CardContent className="p-8 grid md:grid-cols-[1fr_auto] gap-5 items-center">
                  <div className="flex items-start gap-4">
                    <AlertTriangle size={24} className="text-bet62-secondary shrink-0 mt-0.5" />
                    <div>
                      <Badge variant="blue" className="mb-2">Aviso importante</Badge>
                      <h3 className="text-2xl font-black tracking-tight">
                        O jogo pode ser viciante. Joga sempre com responsabilidade — nunca apostas dinheiro que não possas perder.
                      </h3>
                    </div>
                  </div>
                  <Button asChild size="lg" variant="outline"><Link href="/jogo-responsavel">Jogo Responsável</Link></Button>
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
