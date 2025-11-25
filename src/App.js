import VisitorForm from '../demo-control-acceso-prime/frontend/src/components/VisitorForm.js'
import AccessLog from '../demo-control-acceso-prime/frontend/src/components/AccessLog.js'
import SimulationPanel from '../demo-control-acceso-prime/frontend/src/components/SimulationPanel.js'

export default {
  components: { VisitorForm, AccessLog, SimulationPanel },
  template: `
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
          <visitor-form class="visitor-form"></visitor-form>
        </div>

        <div class="card">
          <h3 style="margin:0 0 8px 0">Historial de accesos</h3>
          <access-log></access-log>
        </div>
      </main>

      <aside class="side">
        <div class="card">
          <h3 style="margin:0 0 8px 0">Panel de simulación</h3>
          <simulation-panel></simulation-panel>
        </div>
        <div class="card center muted">
          Nota: demo para presentación. No requiere dispositivos reales.
        </div>
      </aside>
    </div>
  `
}
