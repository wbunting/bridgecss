function getRect(el) {
  return el.getBoundingClientRect();
}

/**
 * FLIP
 * F = First
 * L = Last
 * I = Invert
 * P = Play
 */
function flip(doSomething, firstEl, getLastEl = () => firstEl) {
  // First
  const firstRect = getRect(firstEl);

  requestAnimationFrame(() => {
    // (something that changes layout)
    doSomething();

    // Last
    let lastEl = getLastEl();
    const lastRect = getRect(lastEl);

    // Invert
    const dx = lastRect.x - firstRect.x;
    const dy = lastRect.y - firstRect.y;
    const dw = lastRect.width / firstRect.width;
    const dh = lastRect.height / firstRect.height;

    // (so CSS knows it's being flipped)
    // data-flipping="true"
    lastEl.dataset.flipping = true;

    lastEl.style.setProperty('--dx', dx);
    lastEl.style.setProperty('--dy', dy);
    lastEl.style.setProperty('--dw', dw);
    lastEl.style.setProperty('--dh', dh);

    requestAnimationFrame(() => {
      delete lastEl.dataset.flipping;
    });
  });
}

export default flip
