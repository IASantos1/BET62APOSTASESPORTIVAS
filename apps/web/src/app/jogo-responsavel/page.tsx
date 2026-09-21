'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldAlert,
  HeartHandshake,
  UserMinus,
  Ban,
  Clock,
  Calculator,
  AlertTriangle,
  MessageSquare,
  Phone,
  BadgeDollarSign,
  Settings2,
  CheckCircle2,
  HeartPulse,
  ScanFace,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const TOOLS = [
  { icon: Calculator, title: 'Calculadora Risco de Jogo', desc: 'Tempo de sessão, valor depositado vs tua renda mensal. Gráfico dos últimos 3 meses.', cta: 'Abrir calculadora', color: 'emerald' },
  { icon: Clock, title: 'Limites automáticos configuráveis', desc: 'Depósito diário/semanal/mensal · Aposta máx. por evento · Tempo sessão máx. 2h · Perda diária lim.', cta: 'Configurar Limites', color: 'blue' },
  { icon: UserMinus, title: 'Time-Out e Auto-Exclusão', desc: '24h, 7 dias, 30 dias (timeout) ou 1, 3, 5 anos (auto-exclusão IRREVERSÍVEL).', cta: 'Ativar proteção', color: 'pink' },
  { icon: ScanFace, title: 'Selfie exclusão (facial)', desc: 'FaceID / reconhecimento facial para impedir nova conta enquanto dura a exclusão.', cta: 'Ativar verificação', color: 'outline' },
  { icon: Settings2, title: 'Reality Checks customizáveis', desc: 'Notificações push a cada 30 / 60 / 120 min: "Já jogas há 1h, queres continuar?"', cta: 'Ativar checks', color: 'yellow' },
  { icon: HeartPulse, title: 'Buddy Program (código amigo)', desc: 'Convidar um familiar para receber alertas automáticos se ultrapassares os teus limites.', cta: 'Adicionar Buddy', color: 'green' },
];

const SIGNS = [
  'Precisas de apostar quantias cada vez maiores para ter a mesma excitação',
  'Tentaste reduzir ou parar de jogar e não conseguiste',
  'Mentiste a família ou amigos sobre o tempo ou dinheiro gasto',
  'Pediste dinheiro emprestado para jogar ou vendeste bens pessoais',
  'Continuar a jogar mesmo sem dinheiro para pagar contas essenciais',
  'Jogar para recuperar perdas ("chasing losses") em vez de por entretenimento',
  'Irritabilidade ou ansiedade quando não podes aceder à plataforma',
  'O jogo causou problemas nas relações, trabalho ou estudo',
];

const HELP_LINES = [
  {
    name: 'Jogadores Anónimos Portugal',
    contact: 'Linha gratuita 210 000 444 · 24h',
    href: 'https://www.jogadoresanonimos.pt/',
    lang: 'Português · Confidencial · 100% gratuito',
  },
  {
    name: 'GamCare UK (Inglês)',
    contact: 'Freephone 0808 8020 133',
    href: 'https://www.gamcare.org.uk/',
    lang: 'Chat 24/7 · Fórum · Grupos de apoio',
  },
  {
    name: 'GambleAware (Irlanda/UK)',
    contact: 'Begambleaware.org',
    href: 'https://www.begambleaware.org/',
    lang: 'Chat 24h · Recursos empregadores',
  },
  {
    name: 'BeGambleAware (global EN)',
    contact: 'Chat + FAQ',
    href: 'https://www.begambleaware.org/',
    lang: 'Avaliação anónima de risco',
  },
  {
    name: 'SICAD DGS Portugal',
    contact: 'Direção-Geral Jogos',
    href: 'https://www.dgs.pt/area-do-cidadao/jogo-responsavel/',
    lang: 'Regulação · Reclamações jogo legal PT',
  },
  {
    name: 'Linha Vida SOS Voz Amiga',
    contact: 'Gratuita: 800 209 089 · 24h',
    href: 'https://www.linhavida.pt/',
    lang: 'Apoio emocional confidencial PT',
  },
];

export default function JogoResponsavelPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-10 w-[680px] h-[680px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 right-10 w-[620px] h-[620px] bg-bet62-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">
                <HeartHandshake size={12} /> Programa Saúde Mental e Jogo Responsável
              </Badge>
              <Badge variant="pink" className="px-3 py-1 text-xs"><Ban size={12} /> Auto-Exclusão 1 / 3 / 5 anos</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-bet62-bg to-bet62-primary/5">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
                  <div>
                    <Badge variant="green" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <ShieldAlert size={12} /> Jogo é entretenimento, nunca investimento
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                      Estamos aqui para <span className="text-emerald-400">proteger-te</span><br className="hidden md:block" />
                      de ti próprio(a). <span className="text-bet62-primary">Sem julgamentos.</span>
                    </h1>
                    <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                      O jogo deve ser sempre divertido. Se em algum momento sentiste que está a sair do teu controlo — por favor,
                      fala connosco. Temos ferramentas gratuitas, confidenciais e sem registo para te ajudar a recuperar o comando.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild size="xl" variant="primary"><a href="#linhas"><Phone size={16} /> Linhas de Apoio Gratuitas</a></Button>
                      <Button asChild size="xl" variant="outline"><Link href="#ferramentas"><Settings2 size={16} /> Ativar os Meus Limites</Link></Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0"><BadgeDollarSign size={20} /></div>
                        <div>
                          <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold">Regra 1% ouro</p>
                          <p className="font-bold text-white">Nunca apostes mais de <span className="text-emerald-400">1%</span> da tua renda mensal líquida por dia.</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary shrink-0"><Clock size={20} /></div>
                        <div>
                          <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold">Regra 2h</p>
                          <p className="font-bold text-white">Sessões máximas de <span className="text-bet62-primary">2h</span> seguidas · Pausa ≥15min entre sessões.</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0"><AlertTriangle size={20} /></div>
                        <div>
                          <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold">Chasing losses</p>
                          <p className="font-bold text-white">Se perdeste, <span className="text-pink-400">NÃO</span> recuperes. Volta amanhã com cabeça fresca.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <section id="ferramentas">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Settings2 size={22} className="text-bet62-secondary" /> Ferramentas gratuitas incluídas na tua conta
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {TOOLS.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div key={t.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}>
                      <Card className="h-full group hover:border-bet62-primary/40 transition">
                        <CardContent className="p-5 space-y-4">
                          <div className="h-12 w-12 rounded-2xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary">
                            <Icon size={22} />
                          </div>
                          <div>
                            <h3 className="font-black tracking-tight text-lg text-white mb-1">{t.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
                          </div>
                          <Button variant={t.color === 'pink' ? 'primary' : 'outline'} size="sm" className="w-full justify-center">
                            <CheckCircle2 size={14} /> {t.cta}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section className="grid md:grid-cols-[1.05fr_1fr] gap-5">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <Card className="border-pink-500/30 bg-pink-500/5 h-full">
                  <CardContent className="p-6 md:p-7 space-y-4">
                    <Badge variant="pink" className="px-3 py-1 text-xs uppercase tracking-widest"><AlertTriangle size={12} /> Sinais de alerta para ti ou um familiar</Badge>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                      Reconhece-te em algum destes pontos?
                    </h2>
                    <p className="text-sm md:text-base text-white/65 leading-relaxed">
                      O questionário abaixo é baseado no teste NODS-PIRT validado pela OMS. Se responderes SIM a 2+ destes sinais,
                      aconselhamos ativar os limites no teu perfil e falar com as linhas de apoio.
                    </p>
                    <ul className="space-y-2.5 pt-1">
                      {SIGNS.map((s, i) => (
                        <li key={s} className="flex items-start gap-3">
                          <div className="mt-1 shrink-0 h-6 w-6 rounded-full bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="text-sm md:text-base text-white/75 leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="border-bet62-primary/30 bg-bet62-primary/5 h-full">
                  <CardContent className="p-6 md:p-7 space-y-5">
                    <Badge variant="blue" className="px-3 py-1 text-xs uppercase tracking-widest"><CheckCircle2 size={12} /> Como agimos nós · 10 compromissos BET62</Badge>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                      Nós não ganhamos com o teu problema.
                    </h2>
                    <ol className="space-y-3 pt-1 list-none">
                      {[
                        'Apostadores problemáticos BLOQUEADOS, não incentivados.',
                        'Nenhuma campanha publicitária a menor de 25 anos.',
                        'Todos os banners de bónus ligam aqui (Jogo Responsável).',
                        '0 "bonus traps" rollover > 10x sobre depósito real.',
                        'Levantamento SEM bloqueio por bónus ativo (dinheiro real sempre livre).',
                        'Atendimento treinado em jogo responsável + entrevista motivacional.',
                        'Comunicação proativa se detetarmos padrão de risco: aumento gasto 3x.',
                        'Algoritmo de early-warning proprietary, NÃO usado para marketing, só proteção.',
                        'Pedido de auto-exclusão: resolvido em < 2 minutos, sem questionar.',
                        '1% de todo o GGR revertido a associações de jogo responsável independentes.',
                      ].map((c, i) => (
                        <li key={c} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0 h-6 w-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="text-sm md:text-base text-white/75 leading-relaxed">{c}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            <section id="linhas">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <MessageSquare size={22} className="text-bet62-primary" /> Linhas de apoio gratuitas e confidenciais
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {HELP_LINES.map((h, i) => (
                  <motion.a key={h.name} href={h.href} target="_blank" rel="noreferrer noopener" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}>
                    <Card className="h-full group hover:border-emerald-400/40 hover:-translate-y-0.5 transition">
                      <CardContent className="p-5 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-black tracking-tight text-white group-hover:text-emerald-300 transition">{h.name}</h3>
                          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                        </div>
                        <p className="text-sm font-mono font-bold text-white/80">{h.contact}</p>
                        <p className="text-xs text-white/55 mt-1">{h.lang}</p>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.55 }}>
              <Card className="border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-bet62-bg to-bet62-accent/5">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="flex items-start gap-4">
                    <HeartHandshake size={26} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <Badge variant="green" className="mb-3">Falar connosco · 100% confidencial</Badge>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                        Precisas de ajuda para ativar limites ou fechar a conta? Estamos aqui 24h.
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-3xl">
                        Chat ao vivo (ícone canto inferior direito), email support@bet62.example ou departamento JR dedicado.
                        Não há vergonha nenhuma — proteger-te é a nossa prioridade número um.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="xl" variant="primary" className="whitespace-nowrap md:justify-self-end">
                    <Link href="/contacto?dept=jr">Falar com JR</Link>
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
