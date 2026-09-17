'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  EyeOff,
  Share2,
  FileKey,
  Database,
  UserCheck,
  BellOff,
  BadgeDollarSign,
  Clock,
  Mail,
  ShieldAlert,
  Cookie,
  MapPin,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const RIGHTS = [
  { icon: EyeOff, t: 'Direito de Acesso', d: 'Podes pedir cópia dos teus dados pessoais tratados pela BET62. Resposta gratuita em até 30 dias (GDPR art. 15).' },
  { icon: FileKey, t: 'Direito à Portabilidade', d: 'Exporta os teus dados (apostas, carteira, KYC) em formato machine-readable JSON / CSV (GDPR art. 20).' },
  { icon: ShieldCheck, t: 'Direito de Rectificação', d: 'Se os teus dados estiverem incompletos ou errados, podes corrigí-los sem justificação (GDPR art. 16).' },
  { icon: Lock, t: 'Direito ao Apagamento', d: '"Direito a ser esquecido". Pedes apagamento total da conta (exceto dados legais retidos por KYC/impostos 5+ anos).' },
  { icon: BellOff, t: 'Direito de Oposição & Retirar Consentimento', d: 'Retira consentimento a marketing direto, cookies de tracking ou perfilamento a qualquer momento, sem justificação.' },
  { icon: Database, t: 'Direito de Limitar Tratamento', d: 'Suspensão temporária do processamento enquanto verificamos a legitimidade ou contestas a precisão dos dados.' },
];

const DATA_TABLE = [
  {
    cat: 'Identidade e KYC',
    legal: 'Art. 6.1.b + 6.1.c (contrato + obrigação legal)',
    retention: '5 anos após fecho da conta',
    itens: ['Nome completo, data nasc.', 'NIF / NIF estrangeiro', 'BI / Passaporte (facial)', 'Comprovativo morada (3 meses)', 'Selfie autenticação forte'],
  },
  {
    cat: 'Transacional e Carteira',
    legal: 'Art. 6.1.b (contrato) + anti-Lavagem Lei 83/2017',
    retention: '10 anos após último movimento (Lei ALD)',
    itens: ['Depósitos e levantamentos', 'Métodos de pagamento usados', 'Histórico carteira (transações)', 'Timestamp e IP de cada operação'],
  },
  {
    cat: 'Apostas e Produto',
    legal: 'Art. 6.1.b (execução contrato de jogo)',
    retention: '10 anos após cada evento (Reg. MGA)',
    itens: ['Histórico de todas as apostas', 'Cash-outs efetuados', 'Bónus e rollover', 'Sessões de jogo'],
  },
  {
    cat: 'Marketing e Consentimento',
    legal: 'Art. 6.1.a consentimento explícito',
    retention: 'Enquanto não retirares consentimento + 3 anos',
    itens: ['Email / SMS / Push marketing', 'Newsletters', 'Sondagens e promoções', 'Consentimento guardado com timestamp'],
  },
  {
    cat: 'Técnico & Segurança',
    legal: 'Art. 6.1.f legítimo interesse (segurança)',
    retention: '18 meses após última sessão',
    itens: ['Endereço IP e user agent', 'Logs acesso e login', 'Fingerprint dispositivo', 'Session tokens encriptados'],
  },
];

export default function PrivacidadePage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-10 w-[620px] h-[620px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-60 left-10 w-[620px] h-[620px] bg-bet62-secondary/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">Política de Privacidade · RGPD</Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs"><Clock size={12} /> Revisão Jan 2026</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden bg-gradient-to-br from-emerald-500/5 via-bet62-bg to-bet62-primary/5 border-emerald-500/20">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="green" className="px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <Lock size={12} /> 100% Conforme RGPD UE + MGA
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                    Os teus dados pertencem <span className="text-emerald-400">sempre a ti.</span><br />
                    Nós só tratamos o <span className="text-bet62-primary">estritamente necessário.</span>
                  </h1>
                  <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-3xl">
                    Política transparente, sem surpresas. Respeitamos escrupulosamente o Regulamento (UE) 2016/679 (RGPD) e
                    a diretiva MGA/CRP/54/2019 do Malta Gaming Authority. Podes exercer os teus direitos em 3 cliques.
                  </p>
                  <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { i: ShieldCheck, t: 'Nunca vendemos dados', s: '0 parceiros terceiros publicitários' },
                      { i: Share2, t: 'Compart. mínimo legal', s: 'Só autoridades ou KYC' },
                      { i: MapPin, t: 'Servidores UE/Iceland', s: 'AWS Frankfurt + Backblaze B2 EU' },
                      { i: Cookie, t: 'Cookies opcionais', s: 'Tu decides tudo' },
                    ].map((x, i) => {
                      const Icon = x.i;
                      return (
                        <motion.div key={x.t} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}>
                          <Card>
                            <CardContent className="p-4 flex items-start gap-3">
                              <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"><Icon size={18} /></div>
                              <div className="min-w-0">
                                <p className="font-bold text-sm tracking-tight text-white">{x.t}</p>
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

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <UserCheck size={22} className="text-bet62-primary" /> Os teus 6 direitos fundamentais RGPD
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {RIGHTS.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <motion.div key={r.t} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}>
                      <Card className="h-full">
                        <CardContent className="p-5 space-y-2">
                          <div className="h-11 w-11 rounded-xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary">
                            <Icon size={20} />
                          </div>
                          <h3 className="font-bold tracking-tight text-white">{r.t}</h3>
                          <p className="text-sm text-white/60 leading-relaxed">{r.d}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Database size={22} className="text-bet62-secondary" /> Categorias de dados · Base legal · Retenção
              </h2>
              <div className="overflow-hidden rounded-3xl border border-bet62-border">
                <div className="grid md:grid-cols-[1.1fr_1.4fr_1.2fr_1.8fr] bg-bet62-surface/60 text-[11px] uppercase tracking-widest font-bold text-white/55 border-b border-bet62-border">
                  <div className="p-4">Categoria</div>
                  <div className="p-4">Base Legal (RGPD + Lei)</div>
                  <div className="p-4">Prazo Retenção</div>
                  <div className="p-4">Que dados concretamente</div>
                </div>
                {DATA_TABLE.map((row, i) => (
                  <motion.div key={row.cat} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }} className={i % 2 === 1 ? 'bg-white/[0.02]' : ''}>
                    <div className="grid md:grid-cols-[1.1fr_1.4fr_1.2fr_1.8fr] gap-x-4 border-b border-bet62-border/60 last:border-b-0">
                      <div className="p-4 font-bold tracking-tight text-white">{row.cat}</div>
                      <div className="p-4 text-sm text-white/65 font-mono text-xs leading-relaxed">{row.legal}</div>
                      <div className="p-4 text-sm text-white/65 font-mono text-xs leading-relaxed">{row.retention}</div>
                      <div className="p-4">
                        <ul className="space-y-1.5 text-sm text-white/70">
                          {row.itens.map((x) => (
                            <li key={x} className="flex items-start gap-2">
                              <ShieldCheck size={14} className="shrink-0 text-emerald-400 mt-0.5" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Mail size={22} className="text-bet62-accent" /> Exercício de direitos · Data Protection Officer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="blue" className="px-3 py-1 text-xs uppercase tracking-widest"><UserCheck size={12} /> Pedido rápido</Badge>
                    <h3 className="text-xl font-black tracking-tight text-white">Canais para exercer direitos RGPD</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>· Email dedicado: <span className="font-mono font-bold">privacy@bet62.example</span></li>
                      <li>· Área de Cliente: Definições → Privacidade → Exportar / Apagar / Rectificar</li>
                      <li>· Correio registado: BET62 AE · Triq il-Kbira 44, SLM1010 Sliema, Malta</li>
                    </ul>
                    <p className="text-xs text-white/50">Resposta obrigatória no prazo de 30 dias, extensível a 60 em casos complexos (art. 12 RGPD).</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="pink" className="px-3 py-1 text-xs uppercase tracking-widest"><ShieldAlert size={12} /> DPO / Encarregado Proteção Dados</Badge>
                    <h3 className="text-xl font-black tracking-tight text-white">Contacta o nosso DPO independente</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>· Nome: Maria João Pimentel, Advogada (Ordem Advogados Nº 48219/L)</li>
                      <li>· Email DPO: <span className="font-mono font-bold">dpo@bet62.example</span></li>
                      <li>· Prazo resposta interna reclamações: 10 dias úteis</li>
                      <li>· Autoridade controlo (se não satisfeito): CNPD Portugal · cnpd.pt</li>
                    </ul>
                    <Button asChild size="lg" variant="outline" className="mt-1"><Link href="/contacto?dept=dpo">Formulário DPO</Link></Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
