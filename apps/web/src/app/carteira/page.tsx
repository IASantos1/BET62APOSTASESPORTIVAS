import { redirect } from 'next/navigation';

// A carteira e as apostas vivem no perfil.
export default function Page() {
  redirect('/conta/carteira');
}
