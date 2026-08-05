/**
 * Entrypoint Vite.
 * Importa el sistema de estilos global y arranca LIA_OS.
 */

// CSS is now loaded via <link> in index.html
import { LIA_OS } from './core/LIA_OS.js';

const boot = () => {
  if (window.__lia_booted__) return;
  window.__lia_booted__ = true;
  const os = new LIA_OS();
  os.boot().catch((err) => {
    console.error('[LIA_OS] Boot fallido:', err);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
