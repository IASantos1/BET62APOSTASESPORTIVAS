// Partilhado entre o layout (servidor) e o botão do tema (cliente).
export const THEME_KEY = 'bet62-theme';

/** Corre antes da página: aplica o tema guardado (por omissão, o escuro). */
export const themeScript = `try{var t=localStorage.getItem('${THEME_KEY}');var c=document.documentElement.classList;c.toggle('light',t==='light');c.toggle('dark',t!=='light');}catch(e){}`;
