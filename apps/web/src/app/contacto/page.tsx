'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  Send,
  Users,
  BadgeDollarSign,
  ShieldAlert,
  Megaphone,
  Headphones,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  HeartHandshake,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';

const DEPTS = [
  { id: 'general', icon: Headphones, name: 'Apoio ao Cliente Geral', desc: 'Dúvidas conta, apostas, cartão, login, depósito.', hours: '24/7 · 365 dias', sla: '3 min chat · 2h email' },
  { id: 'pagamentos', icon: BadgeDollarSign, name: 'Pagamentos & Carteira', desc: 'Depósitos, levantamentos, KYC, referências, taxas.', hours: '24/7', sla: '< 30 min caso urgente' },
  { id: 'jr', icon: HeartHandshake, name: 'Jogo Responsável', desc: 'Ativar limites, exclusão, reality checks, buddy program.', hours: '24/7 · Linha dedicada', sla: '< 5 min prioritário' },
  { id: 'dpo', icon: ShieldAlert, name: 'DPO · Privacidade RGPD', desc: 'Direitos acesso, portabilidade, apagamento, reclamação DPO.', hours: 'Comercial 9-18h PT', sla: '10 dias úteis resposta legal' },
  { id: 'partners', icon: Megaphone, name: 'Parcerias · Afiliados · Patrocínios', desc: 'Programa BET62 Partners, patrocínios equipas, media buys.', hours: '9-18h PT', sla: '< 24h resposta' },
  { id: 'careers', icon: Briefcase, name: 'RH · Candidaturas', desc: 'Enviar CV, carta motivação, vagas em aberto.', hours: '9-18h PT', sla: '< 7 dias resposta' },
];

const SOCIAL = [
  { name: 'Instagram DMs', handle: '@bet62oficial', href: '#', color: 'from-pink-500/20 to-orange-500/10', textColor: 'text-pink-300' },
  { name: 'Twitter / X', handle: '@BET62_PT', href: '#', color: 'from-sky-500/20 to-slate-500/10', textColor: 'text-sky-300' },
  { name: 'Facebook Messenger', handle: 'facebook.com/bet62oficial', href: '#', color: 'from-blue-500/20 to-indigo-500/10', textColor: 'text-blue-300' },
  { name: 'Telegram', handle: 't.me/BET62_Oficial', href: '#', color: 'from-cyan-500/20 to-sky-500/10', textColor: 'text-cyan-300' },
];

export default function ContactoPage() {
  const [dept, setDept] = React.useState<string>('general');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [account, setAccount] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [sent, setSent] = React.useState<number | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || msg.trim().length < 10) return setStatus('err');
    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 700));
      setSent(Date.now());
      setStatus('ok');
      setMsg('');
    } catch {
      setStatus('err');
    }
  };

  const selectedDept = DEPTS.find((d) => d.id === dept) || DEPTS[0];

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-10 w-[620px] h-[620px] bg-bet62-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 left-10 w-[620px] h-[620px] bg-bet62-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">Contacta-nos · Suporte Humano 24/7</Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs"><Users size={12} /> 32 agentes ativos · Língua PT</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden bg-gradient-to-br from-bet62-surface via-bet62-bg to-bet62-surface-2 border-bet62-primary/20">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
                  <div>
                    <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <MessageSquare size={12} /> Sem menus automáticos · Sem espera longa · Resposta real
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                      Estás a <span className="text-bet62-primary">2 cliques</span> de falar<br className="hidden md:block" /> com um <span className="text-bet62-secondary">humano de verdade.</span>
                    </h1>
                    <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
                      Chat ao vivo 24/7 a 3 minutos de resposta, email, WhatsApp VIP para tiers, e sede em Lisboa para quem quiser marcar reunião presencial.
                      Não há "pressione 1 para..." — tu escolhes o departamento e falas diretamente.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-3 gap-3">
                      <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0"><MessageCircle size={18} /></div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">Chat Ao Vivo</p>
                            <p className="font-bold text-white">3 min · médio</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary shrink-0"><Mail size={18} /></div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">Email</p>
                            <p className="font-bold text-white">≤ 2h útil</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-bet62-secondary/10 border border-bet62-secondary/20 flex items-center justify-center text-bet62-secondary shrink-0"><Phone size={18} /></div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">WhatsApp VIP</p>
                            <p className="font-bold text-white">Tier Prata+</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-3">
                    <Card>
                      <CardContent className="p-5 flex items-start gap-4">
                        <Mail size={22} className="text-bet62-primary shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">Email · Geral</p>
                          <p className="font-mono font-black text-white text-lg truncate">support@bet62.example</p>
                          <p className="text-xs text-white/50 mt-1">Resposta média 2h útil · Ticket automático</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-start gap-4">
                        <Phone size={22} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">WhatsApp · VIP Tier Prata+</p>
                          <p className="font-mono font-black text-white text-lg truncate">+351 300 610 000</p>
                          <p className="text-xs text-white/50 mt-1">Comercial 9-18h · Para tiers acima de Bronze</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-start gap-4">
                        <MapPin size={22} className="text-bet62-secondary shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">Sede Portugal · Lisboa Parque das Nações</p>
                          <p className="text-sm font-bold text-white">Edifício Atlantis · Av. Dom João II, 45 · Torre B 12ºB</p>
                          <p className="text-xs text-white/50 mt-1">Reuniões presenciais só com marcação prévia</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-start gap-4">
                        <Clock size={22} className="text-yellow-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">Horários</p>
                          <p className="text-sm font-bold text-white">Apoio ao Cliente · 24/7 365 dias</p>
                          <p className="text-xs text-white/50 mt-1">Comercial / RH / Parceiros · 9h–18h PT (seg-sex)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Headphones size={22} className="text-bet62-primary" /> Escolhe o departamento
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {DEPTS.map((d, i) => {
                  const Icon = d.icon;
                  const active = dept === d.id;
                  return (
                    <motion.button key={d.id} type="button" onClick={() => setDept(d.id)} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }} className="text-left">
                      <Card className={cn('h-full transition group', active ? 'border-bet62-primary/60 bg-bet62-primary/10 shadow-[0_0_0_1px_rgba(244,63,94,0.3)]' : '')}>
                        <CardContent className="p-5 space-y-3">
                          <div className="flex items-center justify-between gap-3">
                            <div className={cn('h-11 w-11 rounded-xl flex items-center justify-center shrink-0 transition', active ? 'bg-bet62-primary text-bet62-bg' : 'bg-bet62-gradient/15 border border-bet62-border text-bet62-primary group-hover:scale-105')}>
                              <Icon size={20} />
                            </div>
                            <Badge variant={active ? 'pink' : 'outline'} className="text-[10px] whitespace-nowrap">{d.sla}</Badge>
                          </div>
                          <div>
                            <p className={cn('font-black tracking-tight text-lg transition', active ? 'text-bet62-primary' : 'text-white')}>{d.name}</p>
                            <p className="text-xs text-white/55 mt-1">{d.desc}</p>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                            <Clock size={12} /> {d.hours}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.button>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-5 items-start">
                <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}>
                  <Card className="border-bet62-primary/30 bg-gradient-to-br from-bet62-primary/5 via-bet62-bg to-transparent overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-bet62-primary via-bet62-secondary to-bet62-accent" />
                    <CardContent className="p-6 md:p-8 space-y-5">
                      <div className="flex items-center gap-3">
                        <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">
                          <Send size={12} /> Enviar mensagem para: {selectedDept.name}
                        </Badge>
                        {sent && status === 'ok' && (
                          <Badge variant="blue" className="px-3 py-1 text-xs uppercase tracking-widest">
                            <CheckCircle2 size={12} /> Enviada · Ticket #{sent.toString(36).toUpperCase().slice(-6)}
                          </Badge>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <label className="block space-y-2">
                          <span className="text-[11px] uppercase tracking-widest font-bold text-white/50">Nome completo *</span>
                          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Maria João Silva" className="h-12 w-full rounded-2xl border border-bet62-border bg-bet62-bg/70 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bet62-primary focus:ring-2 focus:ring-bet62-primary/25 transition" />
                        </label>
                        <label className="block space-y-2">
                          <span className="text-[11px] uppercase tracking-widest font-bold text-white/50">Email *</span>
                          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@exemplo.pt" className="h-12 w-full rounded-2xl border border-bet62-border bg-bet62-bg/70 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bet62-primary focus:ring-2 focus:ring-bet62-primary/25 transition" />
                        </label>
                      </div>
                      <label className="block space-y-2">
                        <span className="text-[11px] uppercase tracking-widest font-bold text-white/50">ID Conta (opcional, mais rápido)</span>
                        <input value={account} onChange={(e) => setAccount(e.target.value)} placeholder="BET-XXXXXX (painel top direito)" className="h-12 w-full rounded-2xl border border-bet62-border bg-bet62-bg/70 px-4 text-sm font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-bet62-primary focus:ring-2 focus:ring-bet62-primary/25 transition" />
                      </label>
                      <label className="block space-y-2">
                        <span className="text-[11px] uppercase tracking-widest font-bold text-white/50">A tua mensagem * (mínimo 10 caracteres)</span>
                        <textarea required rows={7} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Ex: 'Levantamento de 180€ Multibanco feito dia 14 ainda não entrou na minha conta Activobank. REF 123/4567890.'" className="w-full rounded-2xl border border-bet62-border bg-bet62-bg/70 p-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bet62-primary focus:ring-2 focus:ring-bet62-primary/25 transition resize-y" />
                      </label>
                      {status === 'err' && (
                        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-4 flex items-start gap-3">
                          <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-white/75">Preenche nome, email e mensagem com pelo menos 10 caracteres.</p>
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-3 flex-wrap pt-2">
                        <p className="text-[11px] text-white/45 max-w-lg">
                          Ao enviar, autorizas tratamento dos dados submetidos para efeitos de resposta a este ticket (Art. 6.1.b RGPD).
                          Resposta para o email indicado. Consulta a nossa política em <Link href="/privacidade" className="underline underline-offset-2 text-bet62-primary hover:text-bet62-secondary">/privacidade</Link>.
                        </p>
                        <Button size="xl" variant="glow" type="submit" loading={status === 'sending'} loadingText="A enviar mensagem..." className="whitespace-nowrap">
                          <Send size={18} /> Enviar Ticket
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.form>

                <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} className="space-y-3 sticky top-6">
                  <Card>
                    <CardContent className="p-5 space-y-4">
                      <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-widest">Nas Redes Sociais</Badge>
                      <h3 className="font-black tracking-tight text-xl">DMs oficiais também respondem</h3>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {SOCIAL.map((s) => (
                          <a key={s.name} href={s.href} className={cn('rounded-2xl border border-bet62-border bg-gradient-to-br p-4 hover:border-white/25 transition', s.color)}>
                            <p className={cn('text-[11px] uppercase tracking-widest font-bold', s.textColor)}>{s.name}</p>
                            <p className="text-sm font-bold text-white mt-1 truncate">{s.handle}</p>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-emerald-500/20 bg-emerald-500/5">
                    <CardContent className="p-5 space-y-3">
                      <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">Antes de escreveres</Badge>
                      <h3 className="font-black tracking-tight text-lg">90% dos tickets são resolvidos na Central de Ajuda</h3>
                      <p className="text-sm text-white/65 leading-relaxed">
                        Tempo gasto médio na FAQ: 45 segundos. Porquê esperar pelo chat se a resposta já está escrita?
                      </p>
                      <Button asChild size="lg" variant="outline" className="w-full justify-center">
                        <Link href="/ajuda"><CheckCircle2 size={16} /> Abrir Central Ajuda</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.aside>
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
