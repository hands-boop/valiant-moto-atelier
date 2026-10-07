/**
 * VALIANT MOTO ATELIER - JAVASCRIPT CONTROLLER
 * Ultra-Responsive Modern Automotive Experience
 */

// --- PRODUCT CATALOG DATA ---
const productsData = {
  'hero-helmet': {
    title: 'JET-X20 MLAG TITANIUM',
    category: 'Koleksi Flagship Atelier',
    price: 3450000,
    img: 'assets/images/hero-helmet.png?v=3',
    desc: 'Helm flagship Valiant dengan konstruksi cangkang komposit Forged Carbon dan aksen emas champagne. Dilengkapi dengan visor polikarbonat optik kelas 1 anti-gores, tali Double D-Ring titanium, dan bantalan interior mewah berpori antimikroba.',
    specs: { cert: 'ECE 22.06 & SNI', weight: '1.250g', shell: 'Forged Carbon', warranty: '5 Tahun' }
  },
  'chrome-visor': {
    title: 'CHROME WITH VISOR PLAIN',
    category: 'Helm Seri Chrome Heritage',
    price: 3250000,
    img: 'assets/images/chrome-visor.png?v=3',
    desc: 'Finishing cermin chrome elektrolitik dengan lapisan pernis pelindung UV ultra-keras. Menggabungkan gaya retro murni dengan sistem aerodinamis modern berkecepatan tinggi.',
    specs: { cert: 'ECE 22.06 & DOT', weight: '1.300g', shell: 'Fiberglass Tri-Composite', warranty: '3 Tahun' }
  },
  'gloves': {
    title: 'SARUNG TANGAN KULIT PRO',
    category: 'Perlengkapan Pelindung Tangan',
    price: 850000,
    img: 'assets/images/gloves.jpg?v=2',
    desc: 'Sarung tangan kulit kambing perforasi dengan pelindung buku jari berbahan serat karbon asli. Mendukung kendali layar sentuh ponsel dan ventilasi sejuk saat berkendara di iklim tropis.',
    specs: { cert: 'CE Level 1 KP', weight: '220g', shell: 'Top Grain Leather & Carbon', warranty: '1 Tahun' }
  },
  'retro-white': {
    title: 'CLASSIC JET DUAL-STRIPE',
    category: 'Helm Open Face Klasik',
    price: 2450000,
    img: 'assets/images/retro-white.jpg?v=2',
    desc: 'Helm open-face berbalut putih mutiara dengan garis balap kembar bernuansa vintage. Didesain untuk kenyamanan berkendara harian di perkotaan dan motor custom klasik.',
    specs: { cert: 'SNI & DOT', weight: '1.150g', shell: 'Multi-Fiber Matrix', warranty: '3 Tahun' }
  },
  'frontal-white': {
    title: 'AETHER TOURING SERIES',
    category: 'Helm Full Face Aerodinamis',
    price: 3100000,
    img: 'assets/images/frontal-white.jpg?v=2',
    desc: 'Desain cangkang aerodinamis yang telah diuji di lorong angin untuk stabilitas maksimal saat melaju cepat. Dilengkapi pelindung dagu kokoh dan sistem sirkulasi udara mutakhir.',
    specs: { cert: 'ECE 22.06 & SNI', weight: '1.380g', shell: 'Advanced Polycarbonate Shell', warranty: '4 Tahun' }
  },
  'goggles': {
    title: 'VINTAGE SMOKED GOGGLE',
    category: 'Kacamata Pelindung Vintage',
    price: 650000,
    img: 'assets/images/goggles.jpg?v=2',
    desc: 'Kacamata goggle berkontur kulit lembut dengan lensa tahan benturan berwarna asap anti-silau dan lapisan anti-embun permanen.',
    specs: { cert: 'UV400 & ANSI Z87.1', weight: '140g', shell: 'Real Leather & TPU Frame', warranty: '1 Tahun' }
  },
  'camo-helmet': {
    title: 'JET CAMO MLAG STEALTH',
    category: 'Helm Edisi Kamuflase Taktis',
    price: 2950000,
    img: 'assets/images/camo-helmet.jpg?v=2',
    desc: 'Grafis kamuflase geometris berfinishing matte slate dengan visor gelap magnetik, siap melengkapi penampilan pengendara petualang sejati.',
    specs: { cert: 'ECE 22.06 & SNI', weight: '1.280g', shell: 'Carbon Kevlar Hybrid', warranty: '3 Tahun' }
  },
  'carbon-scrambler': {
    title: 'SCRAMBLER RAW FORGED CARBON',
    category: 'Helm Seri Scrambler Petualang',
    price: 3600000,
    img: 'assets/images/carbon-scrambler.jpg?v=2',
    desc: 'Permukaan serat karbon anyam ekspos tanpa cat dengan pet pelindung matahari yang dapat dilepas pasang dan pengunci kacamata goggle belakang.',
    specs: { cert: 'ECE 22.06 & SNI', weight: '1.180g', shell: 'Pure Forged Carbon Fiber', warranty: '5 Tahun' }
  }
};

// --- CART STATE ---
let cart = [
  { id: 'hero-helmet', title: 'JET-X20 MLAG TITANIUM', price: 3450000, qty: 1, img: 'assets/images/hero-helmet.png?v=3' },
  { id: 'gloves', title: 'SARUNG TANGAN KULIT PRO', price: 850000, qty: 1, img: 'assets/images/gloves.jpg?v=2' }
];

// --- MINI HERO STATE ---
const miniHeroList = [
  { title: 'VM-500 CHROME', img: 'assets/images/chrome-visor.png?v=3', id: 'chrome-visor' },
  { title: 'JET CAMO MLAG', img: 'assets/images/camo-helmet.jpg?v=2', id: 'camo-helmet' },
  { title: 'SCRAMBLER RAW', img: 'assets/images/carbon-scrambler.jpg?v=2', id: 'carbon-scrambler' }
];
let miniHeroIndex = 0;

// --- CATEGORIES STATE ---
const categoryList = [
  {
    name: 'HELM OPEN FACE',
    desc: 'Valiant Moto Accessories Ltd. menghadirkan jajaran helm open face premium dengan cangkang berbobot ringan, visor aerodinamis optik jernih, dan kenyamanan sirkulasi udara luar biasa untuk pengendara kota maupun pecinta motor kustom.'
  },
  {
    name: 'HELM TOURING FULL-FACE',
    desc: 'Perlindungan maksimal dengan cangkang multi-komposit berdaya serap benturan tinggi. Dirancang untuk meredam kebisingan angin dan memberikan kestabilan optimal dalam kecepatan tinggi.'
  },
  {
    name: 'AKSESORI & SARUNG TANGAN',
    desc: 'Dibuat dari kulit premium pilihan dengan perlindungan serat karbon pada persendian buku jari, serta kacamata goggle berkontur kulit vintage dengan perlindungan UV400.'
  }
];
let currentCategoryIndex = 0;

// --- LINEUP CAROUSEL STATE ---
const lineupList = [
  { id: 'carbon-scrambler', name: 'Scrambler', sub: 'Raw Carbon Series', price: 3600000, img: 'assets/images/carbon-scrambler.jpg?v=2' },
  { id: 'camo-helmet', name: 'Jet Camo', sub: 'Stealth Tactical Mlag', price: 2950000, img: 'assets/images/camo-helmet.jpg?v=2' },
  { id: 'chrome-visor', name: 'Chrome', sub: 'With Visor Plain', price: 3250000, img: 'assets/images/chrome-visor.png?v=3' },
  { id: 'frontal-white', name: 'Zero', sub: 'Pure Titanium Touring', price: 3100000, img: 'assets/images/frontal-white.jpg?v=2' },
  { id: 'retro-white', name: 'Ball-Re Dot', sub: 'Classic Pearl White', price: 2450000, img: 'assets/images/retro-white.jpg?v=2' }
];
let activeLineupIndex = 2; // Default centered on Chrome

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  setupTiltEffects();
});

// --- AUDIO FEEDBACK (SYNTHESIZED MECHANICAL CLICK) ---
function playMechanicalClick() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Ignore audio restrictions
  }
}

// --- THEME COLOR SWITCHER ---
function switchTheme(themeName) {
  playMechanicalClick();
  document.body.setAttribute('data-theme', themeName);
}

// --- 3D TILT EFFECT ON HERO HELMET ---
function setupTiltEffects() {
  const helmet = document.getElementById('heroFloatingHelmet');
  if (!helmet) return;

  const heroWrapper = document.querySelector('.hero-wrapper');
  if (heroWrapper) {
    heroWrapper.addEventListener('mousemove', (e) => {
      const rect = helmet.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const tiltX = (y / 40) * -1;
      const tiltY = (x / 40);
      helmet.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-5px)`;
    });

    heroWrapper.addEventListener('mouseleave', () => {
      helmet.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }
}

// --- MINI HERO CAROUSEL CONTROLS ---
function prevMiniHero() {
  playMechanicalClick();
  miniHeroIndex = (miniHeroIndex - 1 + miniHeroList.length) % miniHeroList.length;
  updateMiniHeroDisplay();
}

function nextMiniHero() {
  playMechanicalClick();
  miniHeroIndex = (miniHeroIndex + 1) % miniHeroList.length;
  updateMiniHeroDisplay();
}

function updateMiniHeroDisplay() {
  const item = miniHeroList[miniHeroIndex];
  const thumb = document.getElementById('miniHeroThumb');
  const title = document.getElementById('miniHeroTitle');
  if (thumb && title) {
    thumb.src = item.img;
    thumb.alt = item.title;
    title.textContent = item.title;
    thumb.onclick = () => openQuickView(item.id);
  }
}

// --- CATEGORY SWITCHER ---
function prevCategory() {
  playMechanicalClick();
  currentCategoryIndex = (currentCategoryIndex - 1 + categoryList.length) % categoryList.length;
  updateCategoryDisplay();
}

function nextCategory() {
  playMechanicalClick();
  currentCategoryIndex = (currentCategoryIndex + 1) % categoryList.length;
  updateCategoryDisplay();
}

function updateCategoryDisplay() {
  const cat = categoryList[currentCategoryIndex];
  const titleEl = document.getElementById('categoryTitleText');
  const descEl = document.getElementById('categoryDescText');
  if (titleEl && descEl) {
    titleEl.textContent = cat.name;
    descEl.textContent = cat.desc;
  }
}

// --- BOTTOM LINEUP CAROUSEL ---
function rotateLineup(direction) {
  playMechanicalClick();
  activeLineupIndex = (activeLineupIndex + direction + lineupList.length) % lineupList.length;
  updateLineupDisplay();
}

function selectLineup(index) {
  playMechanicalClick();
  activeLineupIndex = index;
  updateLineupDisplay();
}

function updateLineupDisplay() {
  const item = lineupList[activeLineupIndex];
  const centerTitle = document.getElementById('lineupCenterTitle');
  const centerSub = document.getElementById('lineupCenterSubtitle');
  const centerImg = document.getElementById('lineupCenterImg');
  const centerItem = document.getElementById('lineupCenterItem');

  if (centerTitle && centerSub && centerImg) {
    centerTitle.textContent = item.name;
    centerSub.textContent = item.sub;
    centerImg.src = item.img;
    centerImg.alt = item.name;
    centerItem.onclick = () => openQuickView(item.id);
  }
}

// --- QUICK VIEW MODAL ---
let currentQuickViewId = null;

function openQuickView(productId) {
  playMechanicalClick();
  const product = productsData[productId] || productsData['hero-helmet'];
  currentQuickViewId = productId;

  document.getElementById('qvTitle').textContent = product.title;
  document.getElementById('qvCategory').textContent = product.category;
  document.getElementById('qvPrice').textContent = 'Rp ' + product.price.toLocaleString('id-ID');
  document.getElementById('qvDesc').textContent = product.desc;
  document.getElementById('qvImg').src = product.img;

  const modal = document.getElementById('quickViewModal');
  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  modal.classList.remove('active');
}

function handleQuickViewAddToCart() {
  if (currentQuickViewId && productsData[currentQuickViewId]) {
    const p = productsData[currentQuickViewId];
    addToCart(p.title, p.price, p.img, currentQuickViewId);
    closeQuickView();
  }
}

// --- CART DRAWER LOGIC ---
function openCartDrawer() {
  playMechanicalClick();
  document.getElementById('cartOverlay').classList.add('active');
  document.getElementById('cartDrawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cartOverlay').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('open');
}

function addToCart(title, price, img, id) {
  playMechanicalClick();
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: id || 'item-' + Date.now(), title, price, qty: 1, img });
  }
  renderCart();
  openCartDrawer();
}

function removeFromCart(index) {
  playMechanicalClick();
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const badge = document.getElementById('cartCountBadge');
  const subtotalEl = document.getElementById('cartSubtotalText');
  if (!container) return;

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badge) badge.textContent = totalCount;
  if (subtotalEl) subtotalEl.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 12px; opacity: 0.5;">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Keranjang pesanan Anda masih kosong.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <img src="${item.img}" alt="${item.title}" class="cart-item-thumb">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.title}</div>
        <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')} &times; ${item.qty}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})" title="Hapus">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `).join('');
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Keranjang belanja Anda masih kosong.');
    return;
  }
  const orderList = cart.map(i => `• ${i.title} (${i.qty}x) - Rp ${(i.price * i.qty).toLocaleString('id-ID')}`).join('%0A');
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const message = `Halo Valiant Moto Atelier Indonesia,%0A%0ASaya ingin memesan helm / gear berikut:%0A${orderList}%0A%0ATotal Pesanan: Rp ${totalPrice.toLocaleString('id-ID')}%0AMohon info ketersediaan stok & metode pengiriman. Terima kasih!`;
  const waUrl = `https://wa.me/6281234567890?text=${message}`;
  window.open(waUrl, '_blank');
}

// --- DESIGN SUBMISSION MODAL ---
function openDesignModal() {
  playMechanicalClick();
  document.getElementById('designModal').classList.add('active');
}

function closeDesignModal() {
  document.getElementById('designModal').classList.remove('active');
}

function handleFileSelected(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('fileNameDisplay').textContent = 'Berkas Terpilih: ' + file.name;
  }
}

function submitDesignForm(e) {
  e.preventDefault();
  alert('Terima kasih! Konsep desain Anda telah berhasil dikirimkan ke Tim Kurator Valiant Moto Atelier. Tim kami akan menghubungi Anda melalui WhatsApp jika karya Anda terpilih!');
  closeDesignModal();
}

// --- VIDEO MODAL ---
function openVideoModal(title) {
  playMechanicalClick();
  if (title) {
    document.getElementById('videoModalTitleText').textContent = title;
  }
  document.getElementById('videoModal').classList.add('active');
}

function closeVideoModal() {
  document.getElementById('videoModal').classList.remove('active');
}

// --- SEARCH MODAL ---
function openSearchModal() {
  playMechanicalClick();
  document.getElementById('searchModal').classList.add('active');
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 150);
    handleSearch('');
  }
}

function closeSearchModal() {
  document.getElementById('searchModal').classList.remove('active');
}

function handleSearch(query) {
  const resultsContainer = document.getElementById('searchResultsList');
  if (!resultsContainer) return;

  const q = query.trim().toLowerCase();
  const keys = Object.keys(productsData);
  const matched = keys.filter(k => {
    const p = productsData[k];
    return p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
  });

  if (matched.length === 0) {
    resultsContainer.innerHTML = '<div style="font-size: 0.85rem; color: var(--text-muted); padding: 1rem 0;">Tidak ditemukan produk dengan kata kunci tersebut.</div>';
    return;
  }

  resultsContainer.innerHTML = matched.map(k => {
    const p = productsData[k];
    return `
      <div onclick="openQuickView('${k}'); closeSearchModal();" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; border-radius: 6px; background: var(--bg-canvas); cursor: pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(197, 146, 53, 0.1)'" onmouseout="this.style.background='var(--bg-canvas)'">
        <img src="${p.img}" style="width: 44px; height: 44px; object-fit: contain;">
        <div>
          <div style="font-weight: 700; font-size: 0.85rem;">${p.title}</div>
          <div style="font-size: 0.75rem; color: var(--color-primary); font-weight: 700;">Rp ${p.price.toLocaleString('id-ID')}</div>
        </div>
      </div>
    `;
  }).join('');
}

// --- MOBILE NAVIGATION TOGGLE ---
function toggleMobileNav() {
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');
  if (navLeft && navRight) {
    const isShowing = navLeft.style.display === 'flex';
    if (isShowing) {
      navLeft.style.display = 'none';
      navRight.style.display = 'none';
    } else {
      navLeft.style.display = 'flex';
      navLeft.style.flexDirection = 'column';
      navLeft.style.position = 'absolute';
      navLeft.style.top = '84px';
      navLeft.style.left = '0';
      navLeft.style.width = '100%';
      navLeft.style.background = '#ffffff';
      navLeft.style.padding = '1.5rem';
      navLeft.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      navRight.style.display = 'flex';
      navRight.style.flexDirection = 'column';
      navRight.style.position = 'absolute';
      navRight.style.top = '250px';
      navRight.style.left = '0';
      navRight.style.width = '100%';
      navRight.style.background = '#ffffff';
      navRight.style.padding = '1.5rem';
    }
  }
}

// --- SMOOTH SCROLL HELPER ---
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
