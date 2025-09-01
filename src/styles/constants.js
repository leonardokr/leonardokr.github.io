import theme from './theme';

// Exportar constantes do theme para evitar desestruturação repetitiva
export const { colors, fontSizes, fonts, loaderDelay, navDelay } = theme;

// Breakpoints comumente usados
export const GRID_LIMIT = 6;
export const DELTA = 5;

// Valores de transição comuns
export const fadeClassOptions = {
  fade: 'fade',
  fadedown: 'fadedown',
  fadeup: 'fadeup',
};

// Seletores comuns
export const srConfig = () => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay: 200,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});
