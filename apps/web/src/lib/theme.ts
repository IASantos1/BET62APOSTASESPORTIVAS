// Tema automático: claro das 07:00 às 20:00 (hora do aparelho), escuro no resto do dia.
// O script corre antes da página (sem piscar) e o AutoTheme volta a verificar a cada minuto.
export const LIGHT_FROM_HOUR = 7;
export const DARK_FROM_HOUR = 20;

/** Corre antes da página: aplica o tema da hora atual. */
export const themeScript = `try{var h=new Date().getHours();var l=h>=${LIGHT_FROM_HOUR}&&h<${DARK_FROM_HOUR};var c=document.documentElement.classList;c.toggle('light',l);c.toggle('dark',!l);}catch(e){}`;

export function isLightNow(d = new Date()) {
  const h = d.getHours();
  return h >= LIGHT_FROM_HOUR && h < DARK_FROM_HOUR;
}

/** Aplica o tema da hora atual (no navegador). */
export function applyAutoTheme() {
  const light = isLightNow();
  const c = document.documentElement.classList;
  if (c.contains('light') === light && c.contains('dark') === !light) return;
  c.toggle('light', light);
  c.toggle('dark', !light);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#eceff3' : '#0a0e17');
}
