// =============================================
// FARMERS STOP – Main JS (Homepage)
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderFlashProducts();
  renderNewArrivals();
  startCountdown();
  rotateAds();
});

function renderFlashProducts() {
  const el = document.getElementById('flashProducts');
  if (!el) return;
  const flash = PRODUCTS.filter(p => p.discount >= 27).slice(0, 8);
  el.innerHTML = flash.map(renderProductCard).join('');
}

function renderNewArrivals() {
  const el = document.getElementById('newArrivals');
  if (!el) return;
  const arrivals = PRODUCTS.filter(p => p.fresh).slice(0, 8);
  el.innerHTML = arrivals.map(renderProductCard).join('');
}

// Countdown timer for flash sale
function startCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  let stored = localStorage.getItem('fs_countdown_end');
  let endTime;
  if (stored) {
    endTime = parseInt(stored);
    if (endTime < Date.now()) {
      endTime = Date.now() + 6 * 60 * 60 * 1000;
      localStorage.setItem('fs_countdown_end', endTime);
    }
  } else {
    endTime = Date.now() + 6 * 60 * 60 * 1000;
    localStorage.setItem('fs_countdown_end', endTime);
  }
  function tick() {
    const diff = endTime - Date.now();
    if (diff <= 0) { el.textContent = '00:00:00'; return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  tick();
  setInterval(tick, 1000);
}

// Rotate ads every 4s
function rotateAds() {
  const slides = document.querySelectorAll('.ad-slide');
  if (!slides.length) return;
  let idx = 0;
  setInterval(() => {
    slides.forEach(s => s.classList.remove('active'));
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 4000);
}
