'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Cookie,
  ShieldCheck,
  BarChart3,
  Eye,
  Bell,
  Lock,
  CheckCircle2,
  Settings2,
  ThumbsUp,
  Ban,
  Info,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';

const CATEGORIES = [
  {
    id: 'essenciais',
    name: 'Essenciais (Sempre Ligados)',
    color: 'green' as const,
    icon: Lock,
    default: 'Sempre ativos',
    lifetime: 'Sessão + 12 meses',
    body: 'Estritamente necessários para o funcionamento da plataforma. Sem eles, login, checkout e apostas não funcionam. Não recolhem informação identificável para marketing.',
    examples: [
      'cookies de sessão (JWT tokens encriptados HttpOnly Secure)',
      'CSRF tokens (prevenção ataques cross-site)',
      'cookies load balancer / stick sessão (Cloudflare)',
      'estado consentimento cookie banner (12 meses)',
    ],
  },
  {
    id: 'analiticos',
    name: 'Analíticos (Opcionais)',
    color: 'blue' as const,
    icon: BarChart3,
    default: 'Desligados por padrão',
    lifetime: '24 meses',
    body: 'Usados em agregado anónimo para entender como tu e outros jogadores usam o website: páginas mais vistas, tempo, conversões, erros. Não há identificação pessoal.',
    examples: [
      'Plausible Analytics (open source, privacy-first · sem fingerprint)',
      'Vercel Web Analytics logs (servidor, sem cookies third-party)',
      'Sentry (erros runtime anonimizados · PII estritamente excluído)',
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing (Opcionais)',
    color: 'pink' as const,
    icon: Bell,
    default: 'Desligados por padrão',
    lifetime: '13 meses',
    body: 'Para comunicações relevantes para ti (bónus personalizados, recall de sessão abandonada). Tu decides. Nunca usamos re-marketing Google ou Meta sem consentimento OPT-IN EXPLÍCITO.',
    examples: [
      'Braze / Klaviyo: email recall (apenas se consentimento explícito)',
      'Criteo / RTB House: banners bet62 em outros sites (opt-in apenas)',
      'Facebook Pixel standard events (opcional, só se tu aceitares)',
    ],
  },
  {
    id: 'preferencias',
    name: 'Preferências (Opcionais)',
    color: 'outline' as const,
    icon: Settings2,
    default: 'Desligados por padrão',
    lifetime: 'Enquanto sessão ou 1 ano',
    body: 'Memorizam as tuas escolhas de UX: tema claro/escuro, idioma, moeda preferida, sidebar compact, filtros desportos favoritos.',
    examples: [
      'ui/theme · ui/language · ui/currency',
      'filters/lastSports · betslip/open-state',
      'odd-format (decimal / fracionário / americano)',
    ],
  },
];

const THIRDPARTY = [
  { name: 'Cloudflare', domain: 'cloudflare.com', purpose: 'CDN, segurança WAF e DDoS', keep: 'Essencial', cookie: '__cf_bm, cf_clearance' },
  { name: 'Stripe Payments', domain: 'stripe.com', purpose: 'Pagamentos checkout 3DS', keep: 'Essencial (contrato)', cookie: '__stripe_mid, __stripe_sid' },
  { name: 'Plausible', domain: 'plausible.io', purpose: 'Analytics privacy-first', keep: 'Opcional (Analíticos)', cookie: 'Nenhum first-party (apenas server-side)' },
  { name: 'Sumsub / Onfido', domain: 'sumsub.com', purpose: 'Verificação KYC facial', keep: 'Essencial (KYC ALD)', cookie: 'sumsub_token, onfidoSession' },
  { name: 'Braze (apenas opt-in)', domain: 'braze.com', purpose: 'Email / Push marketing', keep: 'Opcional (Marketing)', cookie: 'ab_storage, _braze_sdk_id' },
  { name: 'Zendesk Chat', domain: 'zendesk.com', purpose: 'Atendimento chat 24/7', keep: 'Essencial (conversa)', cookie: '__zlcid, _zendesk_cookie' },
];

export default function CookiesPage() {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({
    essenciais: true,
    analiticos: false,
    marketing: false,
    preferencias: false,
  });

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[620px] h-[620px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 right-10 w-[620px] h-[620px] bg-bet62-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="amber" className="px-3 py-1 text-xs uppercase tracking-widest">Política de Cookies · ePrivacy + RGPD</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-bet62-bg to-bet62-accent/5">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1.25fr_1fr] gap-8 items-center">
                  <div>
                    <Badge variant="amber" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <Cookie size={12} /> Tudo o que precisas saber sobre os cookies BET62
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                      Cookies? Sim, mas só os que<span className="text-yellow-400"> realmente precisares.</span>
                    </h1>
                    <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
                      Somos transparentes. Os essenciais estão sempre ligados (sem login não há jogo). Os restantes?
                      Tu decides agora, e podes mudar de ideias sempre que quiseres, em 2 cliques.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button size="lg" variant="glow" onClick={() => setEnabled({ essenciais: true, analiticos: true, marketing: true, preferencias: true })}>
                        <ThumbsUp size={16} /> Aceitar Tudo
                      </Button>
                      <Button size="lg" variant="outline" onClick={() => setEnabled({ essenciais: true, analiticos: false, marketing: false, preferencias: false })}>
                        <Ban size={16} /> Apenas Essenciais
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link href="#categorias"><Settings2 size={16} /> Personalizar</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { t: 'Total de cookies neste site', v: '12 (máx.)' },
                      { t: 'Cookies third-party', v: 'Nunca SEM consentimento' },
                      { t: 'Venda de dados / AdTech', v: '❌ Nunca fazemos' },
                      { t: 'Fingerprint / tracking cross-site', v: '❌ Bloqueado por padrão' },
                    ].map((r) => (
                      <div key={r.t} className="flex items-center justify-between rounded-xl border border-bet62-border bg-bet62-bg/60 px-4 py-3">
                        <span className="text-xs uppercase tracking-widest font-bold text-white/50">{r.t}</span>
                        <span className={cn('font-mono font-black text-sm whitespace-nowrap', r.v.startsWith('❌') ? 'text-emerald-400' : 'text-white')}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <section id="categorias">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Eye size={22} className="text-bet62-primary" /> Quais categorias queres ativar?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {CATEGORIES.map((c, i) => {
                  const Icon = c.icon;
                  const on = enabled[c.id];
                  return (
                    <motion.article key={c.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}>
                      <Card className={cn('h-full border', on ? 'border-emerald-400/40 bg-emerald-500/[0.03]' : '')}>
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 min-w-0">
                              <div className={cn('h-11 w-11 rounded-xl shrink-0 flex items-center justify-center', on ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400' : 'bg-bet62-gradient/15 border border-bet62-border text-bet62-primary')}>
                                <Icon size={20} />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-black tracking-tight text-lg text-white">{c.name}</h3>
                                  <Badge variant={c.color} className="text-[10px]">{c.default}</Badge>
                                </div>
                                <p className="text-[11px] mt-0.5 text-white/50 font-mono">Vida média: {c.lifetime}</p>
                              </div>
                            </div>
                            <label className="flex items-center justify-center shrink-0">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                disabled={c.id === 'essenciais'}
                                checked={on}
                                onChange={(e) => setEnabled((s) => ({ ...s, [c.id]: e.target.checked }))}
                              />
                              <div className={cn(
                                'relative w-12 h-7 rounded-full transition cursor-pointer border',
                                on ? 'bg-emerald-500/30 border-emerald-400/50' : 'bg-bet62-surface border-bet62-border',
                                c.id === 'essenciais' && 'opacity-70 cursor-not-allowed',
                              )}>
                                <div className={cn(
                                  'absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all shadow',
                                  on ? 'translate-x-5 bg-emerald-400' : 'bg-white/80',
                                )}>
                                  <CheckCircle2 size={24} className={cn('p-1', on ? 'text-bet62-bg' : 'text-bet62-bg/70')} />
                                </div>
                              </div>
                            </label>
                          </div>
                          <p className="text-sm text-white/65 leading-relaxed">{c.body}</p>
                          <div>
                            <p className="text-[11px] uppercase tracking-widest font-bold text-white/45 mb-2">Exemplos concretos:</p>
                            <ul className="space-y-1.5">
                              {c.examples.map((ex) => (
                                <li key={ex} className="text-xs text-white/70 flex items-start gap-2">
                                  <Cookie size={13} className="shrink-0 mt-0.5 text-bet62-accent" />
                                  <code className="px-2 py-0.5 rounded bg-bet62-bg/60 border border-bet62-border text-[11px] font-mono text-white/80">{ex}</code>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <ShieldCheck size={22} className="text-emerald-400" /> Terceiros e sub-processadores
              </h2>
              <div className="overflow-hidden rounded-3xl border border-bet62-border">
                <div className="grid md:grid-cols-6 bg-bet62-surface/60 text-[11px] uppercase tracking-widest font-bold text-white/55 border-b border-bet62-border">
                  <div className="p-4 md:col-span-1">Fornecedor</div>
                  <div className="p-4 md:col-span-1">Domínio</div>
                  <div className="p-4 md:col-span-2">Finalidade</div>
                  <div className="p-4 md:col-span-1">Categoria</div>
                  <div className="p-4 md:col-span-1">Cookies / IDs</div>
                </div>
                {THIRDPARTY.map((row, i) => (
                  <motion.div key={row.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }} className={i % 2 === 1 ? 'bg-white/[0.02]' : ''}>
                    <div className="grid md:grid-cols-6 gap-x-4 border-b border-bet62-border/60 last:border-b-0 text-sm">
                      <div className="p-4 font-bold tracking-tight text-white">{row.name}</div>
                      <div className="p-4 text-white/60 font-mono text-xs">{row.domain}</div>
                      <div className="p-4 text-white/70 md:col-span-2">{row.purpose}</div>
                      <div className="p-4"><Badge variant={row.keep.includes('Opcional') ? 'outline' : 'green'} className="text-[10px]">{row.keep}</Badge></div>
                      <div className="p-4 text-white/60 font-mono text-xs break-all">{row.cookie}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.55 }}>
              <Card className="border-bet62-primary/30 bg-bet62-primary/5">
                <CardContent className="p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-5 items-center">
                  <div className="flex items-start gap-4">
                    <Info size={24} className="text-bet62-primary shrink-0 mt-0.5" />
                    <div>
                      <Badge variant="blue" className="mb-2">Alterar ou retirar consentimento</Badge>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                        Queres mudar estas opções mais tarde? Sem problema.
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed">
                        No rodapé de qualquer página, clica no ícone 🍪 Cookie Settings (canto inferior esquerdo) ou
                        vai a Conta → Definições → Privacidade. As alterações aplicam-se imediatamente.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="lg" variant="primary" className="whitespace-nowrap">
                    <Link href="/privacidade">Política Privacidade</Link>
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
