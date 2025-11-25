<template>
  <div class="container">
    <header class="header">
      <div class="brand">
        <div class="logo">UP</div>
        <div>
          <div class="title">Demo Control de Acceso</div>
          <div class="subtitle">Simulación — Universidad del Pacífico</div>
        </div>
      </div>
      <div class="note">Simulación sin hardware — tarjetas y biometría emuladas</div>
    </header>

    <main class="main">
      <div class="card">
        <visitor-form />
      </div>

      <div class="card">
        <h3 style="margin:0 0 8px 0">Historial de accesos</h3>
        <access-log />
      </div>
    </main>

    <aside class="side">
      <div class="card">
        <h3 style="margin:0 0 8px 0">Panel de simulación</h3>
        <simulation-panel />
      </div>
      <div class="card center muted">
        Nota: demo para presentación. No requiere dispositivos reales.
      </div>
    </aside>
  </div>
</template>

<script>
import VisitorForm from './components/VisitorForm.vue'
import AccessLog from './components/AccessLog.vue'
import SimulationPanel from './components/SimulationPanel.vue'

export default {
  name: 'App',
  components: { VisitorForm, AccessLog, SimulationPanel }
}
</script>

<style>
/* You can add global component styles here if needed */
</style>
