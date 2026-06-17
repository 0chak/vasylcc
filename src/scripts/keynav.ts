/* ============================================================
   keynav — videogame-style keyboard navigation
   - move selection across [data-nav] elements (DOM order)
   - WASD / arrows / hjkl to move, Enter/Space to activate
   - number keys jump to [data-section]
   - "?" toggles help, Esc clears, "g" top
   - mouse hover syncs selection
   ============================================================ */

type Dir = 1 | -1;

const PREV = new Set(['ArrowUp', 'ArrowLeft', 'k', 'w', 'a', 'h']);
const NEXT = new Set(['ArrowDown', 'ArrowRight', 'j', 's', 'd', 'l']);
const ACTIVATE = new Set(['Enter', ' ']);

function init(): void {
  const items = (): HTMLElement[] =>
    Array.from(document.querySelectorAll<HTMLElement>('[data-nav]')).filter(
      (el) => el.offsetParent !== null
    );

  const sections = (): HTMLElement[] =>
    Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));

  let idx = -1;

  const clear = (): void => {
    items().forEach((el) => el.classList.remove('is-active'));
  };

  const select = (n: number, scroll = true): void => {
    const list = items();
    if (list.length === 0) return;
    idx = (n + list.length) % list.length;
    clear();
    const el = list[idx];
    el.classList.add('is-active');
    if (scroll) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    el.focus({ preventScroll: true });
  };

  const move = (dir: Dir): void => {
    if (idx === -1) {
      // start from the item nearest the viewport center
      const list = items();
      const mid = window.scrollY + window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      list.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const c = window.scrollY + r.top + r.height / 2;
        const d = Math.abs(c - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      select(best);
      return;
    }
    select(idx + dir);
  };

  const activate = (): void => {
    const el = items()[idx];
    if (!el) return;
    el.click();
    const href = el.getAttribute('href');
    if (href && !el.tagName.toLowerCase().includes('a')) {
      window.location.href = href;
    }
  };

  const jumpSection = (n: number): void => {
    const sec = sections()[n - 1];
    if (sec) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      idx = -1;
      clear();
    }
  };

  /* help overlay */
  const help = document.getElementById('help-overlay');
  const toggleHelp = (force?: boolean): void => {
    if (!help) return;
    const open = force ?? !help.classList.contains('is-open');
    help.classList.toggle('is-open', open);
  };

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const t = e.target as HTMLElement | null;
    const typing =
      t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if (typing) return;

    const k = e.key;

    if (k === '?') {
      e.preventDefault();
      toggleHelp();
      return;
    }
    if (k === 'Escape') {
      if (help?.classList.contains('is-open')) {
        toggleHelp(false);
      } else {
        idx = -1;
        clear();
        (document.activeElement as HTMLElement | null)?.blur();
      }
      return;
    }
    if (help?.classList.contains('is-open')) return;

    if (k === 'g') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      idx = -1;
      clear();
      return;
    }
    if (/^[1-9]$/.test(k)) {
      e.preventDefault();
      jumpSection(Number(k));
      return;
    }
    if (PREV.has(k)) {
      e.preventDefault();
      move(-1);
      return;
    }
    if (NEXT.has(k)) {
      e.preventDefault();
      move(1);
      return;
    }
    if (ACTIVATE.has(k) && idx !== -1) {
      e.preventDefault();
      activate();
    }
  });

  /* hover syncs selection */
  document.addEventListener('pointerover', (e) => {
    const el = (e.target as HTMLElement)?.closest<HTMLElement>('[data-nav]');
    if (!el) return;
    const list = items();
    const i = list.indexOf(el);
    if (i === -1) return;
    idx = i;
    clear();
    el.classList.add('is-active');
  });

  /* close help on backdrop click */
  help?.addEventListener('click', (e) => {
    if (e.target === help) toggleHelp(false);
  });
  document.querySelector('[data-help-close]')?.addEventListener('click', () =>
    toggleHelp(false)
  );
  document.querySelector('[data-help-open]')?.addEventListener('click', () =>
    toggleHelp(true)
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
