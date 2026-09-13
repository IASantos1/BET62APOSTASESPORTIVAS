'use client';

import Link from 'next/link';
import { ShieldCheck, Mail, MessageSquare, ShieldAlert, Facebook, Instagram, Twitter, Youtube, HeartHandshake, Award } from 'lucide-react';
import { Bet62Logo } from './Header';

const LINK_COLS = [
  {
    title: 'A BET62',
    links: [
      { label: 'Sobre Nós', href: '/sobre' },
      { label: 'Imprensa', href: '/imprensa' },
      { label: 'Carreiras', href: '/carreiras' },
      { label: 'Afiliados', href: '/afiliados' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos e Condições', href: '/termos' },
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Responsabilidade Social', href: '/jogo-responsavel' },
    ],
  },
  {
    title: 'Apoio ao Cliente',
    links: [
      { label: 'Central de Ajuda', href: '/ajuda' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Métodos de Pagamento', href: '/pagamentos' },
      { label: 'Regras de Apostas', href: '/regras' },
    ],
  },
];

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'X / Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="mt-20 relative border-t border-bet62-border bg-bet62-bg/95">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-bet62-primary/40 to-transparent" />
      <div className="mx-auto max-w-[1600px] px-4 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Bet62Logo />
            <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
              BET62 Apostas Esportivas · A plataforma futurista de entretenimento
              desportivo e cassino online. Licenciado, regulamentado e seguro.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-bet62-border bg-bet62-surface/60 text-xs text-white/70">
                <Award size={12} className="text-bet62-primary" /> MGA / Malta Gaming
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-bet62-border bg-bet62-surface/60 text-xs text-white/70">
                <ShieldCheck size={12} className="text-bet62-accent" /> SSL 256-bit
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-bet62-border bg-bet62-surface/60 text-xs text-white/70">
                <span className="font-mono font-bold text-bet62-secondary">€</span> EUR
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-bet62-border bg-bet62-surface/60 text-xs text-white/70">
                <span className="font-mono font-bold text-bet62-primary">18+</span> Jogo Responsável
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-9 w-9 rounded-xl border border-bet62-border bg-bet62-surface/60 inline-flex items-center justify-center text-white/60 hover:text-bet62-primary hover:border-bet62-primary/40 transition"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {LINK_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-white/60 hover:text-bet62-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-bet62-border/60 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-4 text-xs text-white/50">
            <div className="flex items-center gap-1.5"><MessageSquare size={12} /> support@bet62.example</div>
            <div className="flex items-center gap-1.5"><Mail size={12} /> chat 24/7 disponível</div>
            <div className="flex items-center gap-1.5"><HeartHandshake size={12} /><a href="https://www.gamblersanonymous.org/" target="_blank" rel="noreferrer" className="hover:text-bet62-secondary underline underline-offset-2">Jogadores Anónimos</a></div>
            <div className="flex items-center gap-1.5"><ShieldAlert size={12} /><a href="https://www.gamcare.org.uk/" target="_blank" rel="noreferrer" className="hover:text-bet62-secondary underline underline-offset-2">Auto-Exclusão / GamCare</a></div>
          </div>
          <p className="text-xs text-white/50 font-mono">
            © 2025 BET62 Apostas Esportivas · Todos os direitos reservados · Jogo 18+ · Jogue com responsabilidade
          </p>
        </div>
      </div>
    </footer>
  );
}
