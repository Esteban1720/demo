<template>
  <section class="landing-v2">
    <div class="container">
      <header class="nav-v2">
        <a class="brand-v2" href="#">
          <div class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="40" height="40" focusable="false">
              <defs>
                <linearGradient id="upBrandGrad" x1="0" x2="1">
                  <stop offset="0" stop-color="#0a7d4f" />
                  <stop offset="1" stop-color="#2d6cdf" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="46" fill="#fff" />
              <circle cx="50" cy="50" r="44" fill="url(#upBrandGrad)" />
              <path d="M30 62 L50 28 L70 62 Z" fill="#fff" />
            </svg>
          </div>
          <div class="brand-copy">
            <span class="uni">Universidad del Pacífico</span>
            <span class="campus">Buenaventura</span>
          </div>
        </a>
        <nav class="menu">
          <a href="#beneficios">Beneficios</a>
          <a href="#descargar" class="pill">Descargar</a>
        </nav>
      </header>

      <div class="hero-v2">
        <div class="copy">
          <span class="badge">Control institucional</span>
          <h1>Acceso inteligente para la comunidad UP</h1>
          <p>
            Registra entradas y salidas con verificación en tiempo real.
            Rápido, seguro y diseñado para estudiantes y personal académico.
          </p>
          <div class="cta">
            <button class="btn primary" @click="openLink(playStoreLink)">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M4 2v20l15-10z" />
              </svg>
              Android
            </button>
            <button class="btn ghost" @click="openLink(appStoreLink)">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2z" />
              </svg>
              iOS
            </button>
          </div>
          <ul class="bullets">
            <li>Privacidad primero</li>
            <li>Integración SIGA</li>
            <li>Sin costo</li>
          </ul>
        </div>

        <div class="visual" aria-hidden="true">
          <div class="device">
            <div class="notch"></div>
            <div class="screen">
              <div class="ticket">
                <div class="row"><span class="label">Estudiante</span><span class="time">08:12</span></div>
                <div class="title in">ENTRADA</div>
                <div class="meta">
                  <div><small>Programa</small><strong>:xxxx</strong></div>
                  <div><small>Código</small><strong>:xxxx</strong></div>
                </div>
                <div class="hint">Acerque su código de barra al lector</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="beneficios" class="benefits">
        <article class="card">
          <div class="icon">⚡</div>
          <h3>Rápido</h3>
          <p>Escaneo instantáneo y registro en segundos.</p>
        </article>
        <article class="card">
          <div class="icon">🔒</div>
          <h3>Seguro</h3>
          <p>Validaciones con historial por estudiante.</p>
        </article>
        <article class="card">
          <div class="icon">🎯</div>
          <h3>Simple</h3>
          <p>Interfaz clara y pensada para todos.</p>
        </article>
      </section>

      <footer id="descargar" class="footer-v2">
        <p>© {{ new Date().getFullYear() }} Universidad del Pacífico — Buenaventura</p>
        <p>Desarrollada por Darwin &amp; Javier</p>
      </footer>
    </div>
  </section>
</template>

<script setup>
const playStoreLink = '#'; // reemplaza con el link real
const appStoreLink = '#'; // reemplaza con el link real

function openLink(url){
  if(!url) return;
  window.open(url, '_blank');
}
</script>

<style scoped>
/* Estilos scoped del componente, usando variables globales definidas en styles.css */
*{box-sizing:border-box}

.landing-v2{
  position:relative;overflow:hidden;
  background:
    radial-gradient(900px 500px at -10% -10%, color-mix(in srgb, var(--up-green) 24%, transparent), transparent 60%),
    radial-gradient(900px 500px at 110% -20%, color-mix(in srgb, var(--up-blue) 22%, transparent), transparent 60%),
    linear-gradient(180deg, #f8fcfa 0%, #f4f8ff 100%);
}

.container{position:relative;z-index:1;width:100%;max-width:1200px;margin:0 auto;padding:56px 24px}

/* Header / Brand */
.nav-v2{display:flex;align-items:center;justify-content:space-between;margin-bottom:40px}
.brand-v2{display:flex;align-items:center;gap:12px;text-decoration:none}
.brand-mark{width:46px;height:46px;border-radius:12px;background:#fff;display:grid;place-items:center;box-shadow:0 6px 16px rgba(15,23,42,.06);border:2px solid color-mix(in srgb, var(--up-green) 20%, transparent)}
.brand-copy .uni{display:block;font-weight:800;color:var(--text-dark)}
.brand-copy .campus{display:block;font-size:12px;color:var(--text-light);margin-top:2px}

.menu{display:flex;gap:12px}
.menu a{color:var(--text-light);text-decoration:none;font-weight:700;padding:8px 12px;border-radius:999px}
.menu a:hover{background:color-mix(in srgb, var(--up-green) 10%, transparent);color:var(--up-green)}
.menu .pill{background:linear-gradient(90deg,var(--up-green),var(--up-blue));color:#fff;box-shadow:0 6px 16px rgba(15,23,42,.08)}

/* Hero */
.hero-v2{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
.copy .badge{display:inline-block;padding:6px 10px;border-radius:999px;font-size:12px;font-weight:800;color:var(--up-green);background:color-mix(in srgb, var(--up-green) 12%, #fff);border:1px solid color-mix(in srgb, var(--up-green) 22%, #fff)}
.copy h1{margin:10px 0 10px;font-size:clamp(32px,4.6vw,56px);line-height:1.05;letter-spacing:-.02em;color:var(--text-dark)}
.copy p{margin:0;font-size:16px;color:var(--text-light);max-width:560px;line-height:1.75}

.cta{display:flex;gap:12px;margin:18px 0 8px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;border:1px solid transparent;font-weight:800;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease,background .2s ease,border-color .2s ease}
.btn svg{width:18px;height:18px}
.btn.primary{background:linear-gradient(90deg,var(--up-green),var(--up-blue));color:#fff;box-shadow:0 6px 16px rgba(15,23,42,.06)}
.btn.primary:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(15,23,42,.10)}
.btn.ghost{background:#fff;color:var(--text-dark);border-color:#d8e9e3}
.btn.ghost:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(15,23,42,.10);background:color-mix(in srgb, var(--up-green) 8%, #fff);border-color:#bfe0d3}

.bullets{display:flex;gap:14px;padding:0;margin:8px 0 0;list-style:none;color:var(--text-light);font-size:14px}
.bullets li::before{content:"• ";color:var(--up-green)}

/* Visual (mock device) */
.visual{display:flex;justify-content:center}
.device{width:320px;height:560px;background:linear-gradient(180deg,#111 0%, #1b2933 100%);border-radius:36px;padding:18px;box-shadow:0 40px 80px rgba(15,23,42,.22),inset 0 0 0 2px rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);position:relative}
.notch{position:absolute;top:10px;left:50%;transform:translateX(-50%);width:120px;height:18px;border-radius:999px;background:rgba(255,255,255,.12)}
.screen{background:radial-gradient(600px 260px at 100% 0%, color-mix(in srgb, var(--up-blue) 45%, transparent), transparent 60%), radial-gradient(600px 260px at 0% 100%, color-mix(in srgb, var(--up-green) 50%, transparent), transparent 60%), #0d1419;border-radius:28px;padding:16px;height:100%}
.ticket{background:rgba(255,255,255,.9);border-radius:18px;padding:16px;box-shadow:0 10px 26px rgba(0,0,0,.15);border:1px solid #e6eef0;margin-top:18px}
.ticket .row{display:flex;justify-content:space-between;align-items:center;color:var(--text-dark);margin-bottom:8px}
.ticket .label{font-weight:800}
.ticket .time{font-weight:800}
.ticket .title{margin-top:2px;font-weight:900;letter-spacing:.04em}
.ticket .title.in{color:var(--up-green)}
.ticket .meta{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}
.ticket small{color:#6b7280}
.ticket strong{color:#111827}
.ticket .hint{margin-top:12px;font-size:13px;color:#4b5563}

/* Benefits */
.benefits{margin:56px 0 16px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.benefits .card{background:#fff;border-radius:16px;padding:18px;border:1px solid #e6efe9;box-shadow:0 6px 16px rgba(15,23,42,.06);transition:transform .15s ease,box-shadow .15s ease}
.benefits .card:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(15,23,42,.10)}
.benefits .icon{font-size:22px;line-height:1;display:inline-flex;width:36px;height:36px;align-items:center;justify-content:center;border-radius:10px;background:color-mix(in srgb, var(--up-green) 12%, #fff);color:var(--up-green);margin-bottom:10px;font-weight:800}
.benefits h3{margin:0 0 6px;color:var(--text-dark)}
.benefits p{margin:0;color:var(--text-light);font-size:14.5px;line-height:1.6}

/* Footer */
.footer-v2{margin-top:34px;padding-top:16px;border-top:1px solid #eaf1ec;display:flex;gap:16px;justify-content:space-between;color:var(--text-light);font-size:14px}

/* Responsive */
@media (max-width:1024px){
  .hero-v2{grid-template-columns:1fr;gap:26px}
  .visual{order:-1}
  .device{width:300px;height:520px}
}
@media (max-width:720px){
  .container{padding:40px 18px}
  .benefits{grid-template-columns:1fr}
  .brand-copy .uni{font-size:16px}
}
</style>
