'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  HelpCircle,
  Search,
  MessageCircle,
  CreditCard,
  BadgeDollarSign,
  Gift,
  ShieldCheck,
  Ticket,
  RefreshCcw,
  Smartphone,
  Lock,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  FileText,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';

const CATEGORIES = [
  { icon: CreditCard, t: 'Depósitos & Pagamentos', count: 7, href: '#depositos' },
  { icon: BadgeDollarSign, t: 'Levantamentos', count: 6, href: '#levantamentos' },
  { icon: Gift, t: 'Bónus & Promoções', count: 8, href: '#bonus' },
  { icon: Ticket, t: 'Apostas & Mercados', count: 9, href: '#apostas' },
  { icon: RefreshCcw, t: 'Cash-out', count: 3, href: '#cashout' },
  { icon: ShieldCheck, t: 'KYC, Segurança & Fraude', count: 5, href: '#kyc' },
  { icon: Lock, t: 'Conta, Login & Password', count: 5, href: '#conta' },
  { icon: Smartphone, t: 'App / PWA / Mobile', count: 3, href: '#mobile' },
];

type FaqItem = { q: string; a: string };
const FAQs: Record<string, FaqItem[]> = {
  depositos: [
    { q: 'Qual o depósito mínimo?', a: '€10 para todos os métodos (cartão, MB WAY, Multibanco, Pix, SEPA). Pix Brasil mínimo R$50 (equivalente ~€10). Não há depósito máximo diário para contas KYC nível 2 completo.' },
    { q: 'Depósito MB WAY ainda não caiu?', a: 'Confirmação instantânea (geralmente <30s). Se demorar mais de 5min, o pedido foi cancelado pela tua app bancária. Tenta novamente: 1) valor exato 2) telemóvel correto 3) sem espaço no nome.' },
    { q: 'Referência Multibanco expirou?', a: 'Referências são válidas 7 dias. Após isso basta gerar nova na Área de Cliente → Carteira → Depósito → Multibanco. NÃO pagues referências expiradas (pagamento recusado e demora 5-7 dias úteis devolução por parte do SIBS).' },
    { q: 'Cartão recusado 3D Secure?', a: 'Motivos comuns: 1) 3DS cancelado no teu banco, 2) limite online desativado, 3) cartão pré-pago internacional (recomendamos Visa/Mastercard clássico), 4) país emissor ≠ país registado. Contacta o teu banco.' },
    { q: 'Há taxa de depósito?', a: 'Taxa 0% em TODOS os métodos. A BET62 não cobra comissões. Eventuais taxas de conversão cambial são exclusivamente do teu banco (cartão internacional).' },
    { q: 'Aceitam Bitcoin / cripto?', a: 'Apenas USDC (Polygon) para tiers Afiliados Ouro. Para jogadores comuns: apenas métodos fiat (cartão, transferências, carteiras digitais MB WAY, Pix).' },
    { q: 'Depósito de outra pessoa?', a: 'PROIBIDO: depósitos devem ser sempre de uma conta/método em nome próprio, igual ao titular KYC. Depósitos terceiros são rejeitados e valor devolvido deduzido taxa anti-branqueamento 5%.' },
  ],
  levantamentos: [
    { q: 'Levantamento mínimo?', a: '€20 (ou equivalente na moeda do teu método). Levantamentos abaixo de €20 podem ser solicitados por exceção via apoio, sujeitos a taxa administrativa €2.' },
    { q: 'Quanto tempo demora a receber?', a: 'Cartão: 1-3 dias úteis. Transferência SEPA: 1-2 dias úteis. MB WAY / Pix Brasil: até 2h (horário comercial). Wise (USDC): < 3h 24/7.' },
    { q: 'Porque é que preciso de KYC para levantar?', a: 'Obrigação legal anti-Lavagem (Lei 83/2017 PT) e regulamento MGA artigo 9°. Pedimos BI + comprovativo morada + selfie para o PRIMEIRO levantamento apenas.' },
    { q: 'Posso levantar para uma conta diferente do depósito?', a: 'Regra geral NÃO (método de levantamento = método depósito, anti-mixing). Exceções: transferência SEPA para conta bancária titular, após validação de titularidade e justificação.' },
    { q: 'Há limite de levantamento por mês?', a: 'KYC L1: €2.000 / semana · €10.000 / mês. KYC L2 completo: €20.000 / semana · sem limite mensal. VIP alto roller: limites personalizados mediante comprovativo de rendimentos/fundos.' },
    { q: 'Taxa de levantamento?', a: 'Taxa 0% até 4 levantamentos gratuitos por mês. 5º levantamento e seguintes: 2% (mín. €2) para custos processadores.' },
  ],
  bonus: [
    { q: 'Como funciona o bónus 100% até €20?', a: 'Depósito ≥€10 → recebe +100% valor bónus até €20. Rollover = 5x sobre valor do BÓNUS, odd ≥1.50, em 7 dias. Dinheiro real É sempre levantável em qualquer altura (bónus separado em carteira bónus).' },
    { q: 'Rollover é sobre depósito + bónus?', a: 'NUNCA. Rollover BET62 é sempre SOBRE BÓNUS, nunca sobre o teu dinheiro real. Somos transparentes — é um dos diferenciais.' },
    { q: 'Posso cancelar um bónus ativo?', a: 'Sim, a qualquer momento em Carteira → Bónus ativos → Cancelar. Ao cancelar, o saldo bónus é removido (0) mas o teu dinheiro real fica intacto.' },
    { q: 'Freebet expira?', a: 'Sim. Prazo padrão 7 dias calendário a partir do momento do crédito. Odd mínima freebet = 1.50. Freebet não paga stake, só lucro.' },
    { q: 'Porque o meu bónus foi removido?', a: 'Causas comuns: 1) 2 contas (multi-account), 2) surebets em escala / matched betting profissional, 3) VPN/IP Tor, 4) bónus expirado sem completar rollover, 5) violação termos.' },
    { q: 'Cashback semanal 5% como funciona?', a: 'Calculado todas as segundas 02:00 UTC sobre perdas líquidas da semana anterior (dom 00:00 a sáb 23:59). Mínimo a receber €1, máximo €20/semana. Rollover cashback = 3x sobre valor creditado.' },
    { q: 'Bónus amigos?', a: 'Amigo regista-se com o teu código, faz depósito ≥€10 → TU recebes €10 FreeBet e ELE recebe €5 FreeBet. Ambas válidas 14 dias, odd mínima 1.50.' },
    { q: 'Freebet funciona em mercados ao vivo?', a: 'Sim, todos os mercados ao vivo e pré-jogo são elegíveis, exceto mercados especiais "Entretenimento" / Política / Premiações (são aposta dinheiro real apenas).' },
  ],
  apostas: [
    { q: 'Que formatos de odds existem?', a: 'Decimais (europeu, padrão), fracionário (UK) e americano (US). Alterar em Conta → Preferências → Formato Odd.' },
    { q: 'Posso apostar ao vivo e fazer cash-out?', a: 'Claro que sim. Cash-out TOTAL e PARCIAL em mais de 80% dos mercados ao vivo (18 ligas futebol principais, NBA, ATP, etc.). Há mercados onde é suspenso em momentos de volatilidade (ex: golo iminente).' },
    { q: 'Aposta foi aceite, mas mudou a odd?', a: 'Odd que aparece no momento da CONFIRMAÇÃO é a odd vinculativa. Se no momento do clique a odd já tinha mudado, recebes aviso "Odd atualizada, aceitas a nova?" antes de concluir.' },
    { q: 'Resultado da aposta errado?', a: 'Resultados oficiais provêm de GOAL API (futebol) e PropLine (restantes modalidades). Se discordares, reclama via apoio em 72h após evento. Re-analisamos e corrigimos manualmente se confirmado erro.' },
    { q: 'Jogo foi adiado / cancelado?', a: 'Aposta é cancelada (Void) e valor integralmente devolvido à carteira. Em caso de adiamento <48h no mesmo dia, mantemos aposta válida.' },
    { q: 'O que é "handicap asiático 0.25"?', a: 'Aposta dividida em 2: metade em handicap -0 e metade em -0.5. Se ganhar por 1+ ganhas tudo; se empatar: metade stake volta, metade perde.' },
    { q: 'Sistema / Acumuladora máxima?', a: 'Máximo 20 seleções numa acumuladora. Odd mínima total: 1.05. Odd mínima por seleção: 1.01 (recomendamos ≥1.20 para valor).' },
    { q: 'Aposta aparece como "em análise"?', a: 'Tratamento manual: apostas >€500 single, >€200 acumulada, odds muito discrepantes, ou utilizador em suspeita fraude. Resolvido em <30 min horário comercial.' },
    { q: 'Posso anular uma aposta já feita?', a: 'Antes do evento começar: sim, até 5 minutos após confirmação, desde que odds ainda não tenham sido suspensas. Durante evento: NÃO (a menos que bug técnico comprovado).' },
  ],
  cashout: [
    { q: 'Porque desapareceu o botão cash-out?', a: 'Mercado em volatilidade extrema (golo, lance, último minuto), mercado suspenso temporariamente pelo provider, ou aposta em risco suspeita. Volta < 30 segundos normalmente.' },
    { q: 'Cash-out parcial funciona com freebet?', a: 'Apenas cash-out TOTAL em freebets. Cash-out PARCIAL é exclusivo para apostas com dinheiro real.' },
    { q: 'Valor cash-out é justo?', a: 'Valor cash-out = odd atual da tua aposta × probabilidade ao vivo. Usamos feed direto do provider, sem markup BET62.' },
  ],
  kyc: [
    { q: 'Quais documentos aceitam para KYC L1?', a: 'Frente + verso BI / Passaporte válido (menos 3 meses), comprovativo morada (água, luz, gás, internet, extrato bancário) EM NOME PRÓPRIO, emitido há < 3 meses, e selfie a segurar o documento + papel com "BET62 + data" escrito manualmente.' },
    { q: 'Quanto tempo demora validação KYC?', a: 'Média atual: 12 min (automático Sumsub / Onfido). Casos complexos (documentos de países lusófonos ex. Brasil, Angola): até 4h úteis. Validação manual 24/7.' },
    { q: 'KYC L2 adicional, o que é?', a: 'Para limites acima de €10.000/mês: comprovativo de origem de fundos: 3 últimos extratos bancários, IRS / declaração de rendimentos, holerite, ou recibo de venda de ativos.' },
    { q: 'Porque a minha conta está limitada / restringida?', a: '90% das vezes: falta completar KYC L1 após primeiro levantamento. Causa restante: deteção padrão risco fraude (VPN + IP suspeito, multi-conta, etc.). Fala com apoio em 10 min resolve.' },
    { q: 'Partilho casa / IP com irmão, podemos ter 2 contas?', a: 'Sim, desde que: documentos separados, dados bancários SEPARADOS (cada um levanta para a SUA conta), e não apostam entre si no mesmo mercado (opostos). IP partilhado é OK, há confirmação facial para login se suspeita.' },
  ],
  conta: [
    { q: 'Esqueci-me da password?', a: 'Login → "Esqueci-me da palavra-passe". Recebes email reset válido 1 hora. Se não chegares ao email: apoio confirma 3 dados (morada, data nascimento, último depósito) e reseta manualmente.' },
    { q: 'Mudei de email / telemóvel?', a: 'Alterar email requer validação de identidade (selfie + documento). Alterar telemóvel: código SMS para o novo número. Sem custo.' },
    { q: 'Alterar país / moeda?', a: 'Moeda e país são fixos após primeiro depósito (regulação MGA anti-mixing). Para mudar, fecha conta e abre nova com dados corretos. Transferência de saldo disponível.' },
    { q: 'Ativar autenticação de 2 fatores (2FA)?', a: 'Recomendado vivamente. Conta → Segurança → Ativar 2FA. App Google Authenticator, Authy ou SMS. Não pedimos códigos 2FA por chat (phishing: NUNCA digas o código a ninguém).' },
    { q: 'Fechar a conta definitivamente?', a: 'Auto-exclusão 1, 3 ou 5 anos (irrevogável). Ou fecho normal por pedido: 30 dias de reflexão, depois saldo residual é enviado por SEPA para conta bancária titular. Sem penalizações.' },
  ],
  mobile: [
    { q: 'Há app para iOS / Android?', a: 'Ainda não loja oficial (Apple proíbe casinos reais em vários países). Em vez disso tens PWA (App Web Progressiva): abre bet62 no Safari (iOS) ou Chrome (Android) → Partilhar → "Adicionar ao ecrã inicial". Funciona igual app nativa, offline mode suporte login biometrico.' },
    { q: 'Posso jogar no tablet?', a: 'Sim, 100% responsive. Layout adapta tablets 7" a 13" em landscape e portrait. Os mesmos mercados e cash-out.' },
    { q: 'Consome muitos dados móveis?', a: 'Streaming vídeo não incluído (ainda). Apenas dados, odds e animações: média ~20 MB / hora. Wi-Fi recomendado para longas sessões ao vivo.' },
  ],
};

export default function AjudaPage() {
  const [query, setQuery] = React.useState('');
  const [open, setOpen] = React.useState<Record<string, number | null>>({});
  const toggle = (cat: string, idx: number) => setOpen((s) => ({ ...s, [cat]: s[cat] === idx ? null : idx }));

  const q = query.trim().toLowerCase();
  const matches = React.useMemo(() => {
    if (!q) return null;
    const all: Array<{ cat: string; idx: number; item: FaqItem }> = [];
    Object.keys(FAQs).forEach((cat) =>
      FAQs[cat].forEach((item, idx) => {
        if (item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) {
          all.push({ cat, idx, item });
        }
      }),
    );
    return all.slice(0, 30);
  }, [q]);

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-10 w-[620px] h-[620px] bg-bet62-secondary/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-60 left-10 w-[620px] h-[620px] bg-bet62-primary/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="blue" className="px-3 py-1 text-xs uppercase tracking-widest">Central de Ajuda & FAQ</Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs"><Clock size={12} /> Resposta média chat: 3 min · 24/7</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden bg-gradient-to-br from-bet62-surface via-bet62-bg to-bet62-surface-2 border-bet62-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center max-w-4xl mx-auto">
                    <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <HelpCircle size={12} /> Bases de conhecimento + Apoio humano 24/7
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                      A tua pergunta tem <span className="text-bet62-primary">resposta aqui.</span>
                    </h1>
                    <p className="mt-5 text-white/65 text-base md:text-lg max-w-2xl mx-auto">
                      Pesquisa na base de conhecimento abaixo. Se não encontrares, o nosso chat humano está a 3 minutos de distância.
                    </p>
                    <div className="mt-8 relative max-w-3xl mx-auto">
                      <Search size={22} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="search"
                        placeholder="Ex: levantar dinheiro, rollover bonus, KYC documentos, cash out desapareceu..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full h-16 rounded-3xl border border-bet62-border bg-bet62-bg/70 pl-16 pr-5 text-base md:text-lg text-white placeholder:text-white/35 focus:outline-none focus:border-bet62-primary focus:ring-2 focus:ring-bet62-primary/30 transition"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      {['levantamento tempo', 'kyc documentos', 'bonus rollover', 'mbway nao caiu', 'cash out desapareceu'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setQuery(s)}
                          className="px-3 py-1.5 rounded-full border border-bet62-border bg-bet62-surface/60 text-xs text-white/70 hover:text-white hover:border-white/20 transition"
                        >
                          #{s}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {matches && (
              <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <Search size={20} className="text-bet62-accent" /> Resultados para <span className="font-mono text-bet62-primary">"{q}"</span> ({matches.length})
                </h2>
                <div className="space-y-2">
                  {matches.length === 0 && (
                    <Card>
                      <CardContent className="p-6 flex items-center gap-4">
                        <HelpCircle size={22} className="text-bet62-primary shrink-0" />
                        <div>
                          <p className="font-bold tracking-tight text-white">Sem resultados diretos.</p>
                          <p className="text-sm text-white/60 mt-1">Tenta palavras-chave mais simples ou abre um ticket no chat ao vivo abaixo.</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  {matches.map(({ cat, idx, item }) => (
                    <Card key={cat + idx} className="hover:border-bet62-primary/40 transition cursor-pointer" onClick={() => toggle(cat, idx)}>
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-bold text-white">{item.q}</p>
                          <Badge variant="outline" className="text-[10px] whitespace-nowrap">{cat}</Badge>
                        </div>
                        {open[cat] === idx && <p className="mt-3 text-sm text-white/70 leading-relaxed border-t border-bet62-border pt-3">{item.a}</p>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>
            )}

            {!matches && (
              <>
                <section>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                    <FileText size={22} className="text-bet62-primary" /> Categorias principais
                  </h2>
                  <div className="grid md:grid-cols-4 gap-3">
                    {CATEGORIES.map((c, i) => {
                      const Icon = c.icon;
                      return (
                        <motion.a key={c.t} href={c.href} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}>
                          <Card className="h-full group hover:border-bet62-primary/40 transition">
                            <CardContent className="p-5 space-y-2">
                              <div className="h-11 w-11 rounded-xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary group-hover:scale-105 transition">
                                <Icon size={20} />
                              </div>
                              <div className="flex items-baseline justify-between">
                                <h3 className="font-bold tracking-tight text-white">{c.t}</h3>
                                <span className="text-xs text-white/45">{c.count} artigos</span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.a>
                      );
                    })}
                  </div>
                </section>

                {Object.keys(FAQs).map((cat) => {
                  const items = FAQs[cat];
                  const catMeta = CATEGORIES.find((c) => c.href === `#${cat}`);
                  const Icon = catMeta?.icon || HelpCircle;
                  return (
                    <section key={cat} id={cat}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-9 w-9 rounded-xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary"><Icon size={17} /></div>
                        <h2 className="text-xl md:text-2xl font-black tracking-tight">{catMeta?.t || cat}</h2>
                        <Badge variant="outline" className="text-[10px]">{items.length} respostas</Badge>
                      </div>
                      <div className="space-y-2.5">
                        {items.map((item, i) => {
                          const isOpen = open[cat] === i;
                          return (
                            <motion.div key={item.q} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.02 }}>
                              <Card className={cn('overflow-hidden transition', isOpen && 'border-bet62-primary/40 shadow-lg shadow-bet62-primary/5')}>
                                <button
                                  onClick={() => toggle(cat, i)}
                                  className="w-full text-left p-5 flex items-start justify-between gap-5"
                                >
                                  <h3 className="font-bold tracking-tight text-white pr-4">{item.q}</h3>
                                  <div className={cn('shrink-0 h-8 w-8 rounded-xl flex items-center justify-center border transition', isOpen ? 'bg-bet62-primary border-bet62-primary text-bet62-bg rotate-180' : 'bg-bet62-surface/60 border-bet62-border text-white/55')}>
                                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                  </div>
                                </button>
                                <div className={cn('grid transition-all duration-300 ease-out', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                                  <div className="overflow-hidden">
                                    <div className="px-5 pb-5 pt-0 border-t border-bet62-border/60">
                                      <p className="pt-4 text-sm md:text-base text-white/70 leading-relaxed whitespace-pre-line">{item.a}</p>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </>
            )}

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.55 }}>
              <Card className="border-bet62-primary/40 bg-gradient-to-br from-bet62-primary/5 via-bet62-bg to-bet62-accent/5">
                <CardContent className="p-8 md:p-10">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center mb-6">
                    <div>
                      <Badge variant="green" className="mb-2">Ainda não resolveste?</Badge>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight">A nossa equipa está aqui para ti. 24h, todos os dias.</h3>
                    </div>
                    <Button asChild size="xl" variant="glow" className="whitespace-nowrap md:justify-self-end">
                      <MessageCircle size={18} /> Abrir Chat Ao Vivo
                    </Button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-5 flex items-start gap-3">
                        <MessageSquare size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[11px] uppercase tracking-widest font-bold text-white/50">Chat Ao Vivo</p>
                          <p className="font-bold tracking-tight text-white">Resposta média 3 minutos</p>
                          <p className="text-xs text-white/55 mt-1">Canto inferior direito, disponível sempre</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-start gap-3">
                        <Mail size={20} className="text-bet62-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[11px] uppercase tracking-widest font-bold text-white/50">Email</p>
                          <p className="font-bold tracking-tight text-white font-mono">support@bet62.example</p>
                          <p className="text-xs text-white/55 mt-1">Ticket resolvido &lt; 2h útil</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-5 flex items-start gap-3">
                        <Phone size={20} className="text-bet62-secondary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[11px] uppercase tracking-widest font-bold text-white/50">WhatsApp (VIP)</p>
                          <p className="font-bold tracking-tight text-white font-mono">+351 300 610 000</p>
                          <p className="text-xs text-white/55 mt-1">Tier Prata+ · Comercial 9-18h</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
