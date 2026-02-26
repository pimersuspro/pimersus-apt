document.addEventListener('DOMContentLoaded', function () {

  const promoSection = document.getElementById('promo-section');
  if (!promoSection) return;

  // --- Configuración ---
  const MIN_PIMERSUS_VERSION = "3.8.0";
  const UPDATE_URL = "https://sourceforge.net/projects/pimersusos/files/Info-Versions-and-Updates/";
  
  // 1. Obtener versión inyectada por el C del navegador
  const rawVersion = window.PIMERSUS ? window.PIMERSUS.version : null;

  /* ===============================
     LÓGICA DE ACTUALIZACIÓN (ANTI-CACHE)
     =============================== */
  function normalizeVersion(v) {
    if (!v) return null;
    v = String(v).trim().replace(/^v/i, "").split("-")[0];
    const parts = v.split(".");
    while (parts.length < 3) parts.push("0");
    return parts.join(".");
  }

  function versionLessThan(a, b) {
    const pa = a.split('.').map(Number);
    const pb = b.split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      if ((pa[i] || 0) < (pb[i] || 0)) return true;
      if ((pa[i] || 0) > (pb[i] || 0)) return false;
    }
    return false;
  }

  const version = normalizeVersion(rawVersion);

  // Si no hay versión o es vieja, dibujamos la interfaz
  const isOutdated = !version || versionLessThan(version, MIN_PIMERSUS_VERSION);

  /* ===============================
     RENDERIZADO DEL GRID
     =============================== */
  promoSection.innerHTML = `
    <h2>SPONSORS</h2>
    <div id="promo-grid">
      <a class='promo-item' href='https://na.filtrospurificadoresdeagua.com/'>
        <div class='promo-icon'><img src='https://pimersuspro.github.io/pimersus-apt/img/agua.png'></div>
        <div class='promo-label'>Wellness<br>Products</div>
      </a>
      <a class='promo-item' href='https://pimersuspro.hotmart.host/your-journey-to-true-wealth-6d21017e-4ea8-4015-81e7-27c47735aeb0'>
        <div class='promo-icon'><img src='https://pimersuspro.github.io/pimersus-apt/img/ebook1.png'></div>
        <div class='promo-label'>Ebook<br>Pimersus</div>
      </a>
      <a class='promo-item' href='https://play.google.com/store/apps/dev?id=7774033461197030799'>
        <div class='promo-icon'><img src='https://pimersuspro.github.io/pimersus-apt/img/apps.png'></div>
        <div class='promo-label'>Pimersus<br>Android Apps</div>
      </a>
      <a class='promo-item' href='https://www.amazon.com?&linkCode=ll2&tag=pimersus020c-20&linkId=a871872a82c49e1ad4a5a3a61a2d1250&language=es_US&ref_=as_li_ss_tl'>
        <div class='promo-icon'><img src='https://pimersuspro.github.io/pimersus-apt/img/compras.png'></div>
        <div class='promo-label'>Amazon<br>Deals</div>
      </a>
      <a class='promo-item' href='https://panel.mdmhost.com/aff.php?aff=25517'>
        <div class='promo-icon'><img src='https://pimersuspro.github.io/pimersus-apt/img/hosting.png'></div>
        <div class='promo-label'>Web<br>Hosting</div>
      </a>
    </div>
  `;

  if (isOutdated) {
    const grid = document.getElementById('promo-grid');
    const updateBtn = document.createElement('a');
    updateBtn.className = 'promo-item';
    updateBtn.href = UPDATE_URL;
    updateBtn.style.border = "2px solid #ffc107";
    updateBtn.style.background = "rgba(255, 193, 7, 0.15)";
    updateBtn.innerHTML = `
      <div class='promo-icon'><img src='https://us.pimersuspro.online/html/img/browser/updatep.png'></div>
      <div class='promo-label' style="color:#856404;font-weight:bold;">Update<br>Available</div>
    `;
    grid.prepend(updateBtn);

    // TRUCO MAESTRO: Si estamos en una versión vieja, forzamos al navegador 
    // a intentar descargar una copia fresca del script para la próxima vez.
    const bustCache = document.createElement('script');
    bustCache.src = "https://us.pimersuspro.online/html/js/sponsor.js?t=" + new Date().getTime();
    document.head.appendChild(bustCache);
  }

  /* ===============================
     USAGE COUNTER
     =============================== */
  fetch("https://sos.pimersuspro.online/wprs/browser/count.php", {
    method: "POST",
    keepalive: true,
    body: JSON.stringify({ v: rawVersion || 'legacy' }) // Enviamos la versión al contador
  }).catch(() => {});

});
