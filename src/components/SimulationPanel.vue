<template>
  <div>
    <div class="sim-grid">
      <div class="sim-card">
        <label>Simular tarjeta</label>
        <input v-model="uidCard" />
        <button class="btn primary" @click="simulateCard">Simular tarjeta</button>
      </div>
      <div class="sim-card">
        <label>Simular biometría</label>
        <input v-model="uidBio" />
        <button class="btn primary" @click="simulateBio">Simular biometría</button>
      </div>
    </div>
    <div style="margin-top:10px">
      <button class="btn ghost" @click="simulateUnknownCard">Tarjeta desconocida (NO)</button>
    </div>
    <div v-if="message" style="margin-top:8px;color:var(--muted)">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'SimulationPanel',
  data() { return { uidCard: 'CARD1234', uidBio: 'BIO123', message: '' }; },
  methods: {
    async simulate(method, uid) {
      try {
        const fd = new FormData();
        fd.append('method', method);
        fd.append('uid', uid);
        const res = await fetch('http://localhost:3000/access', { method: 'POST', body: fd });
        const data = await res.json();
        this.message = `Resultado: allowed=${data.allowed} ` + (data.visitor ? `- ${data.visitor.name}` : ' - visitante no reconocido');
        // emit global event not necessary in SFC; components can refresh via polling or button
      } catch (err) { console.error(err); }
    },
    simulateCard() { this.simulate('card', this.uidCard); },
    simulateBio() { this.simulate('bio', this.uidBio); },
    simulateUnknownCard() { this.simulate('card', 'UNKNOWN123'); }
  }
}
</script>

<style scoped>
.sim-card input{width:100%;padding:8px;margin-top:8px;border-radius:8px;border:1px solid rgba(0,0,0,0.06)}
</style>
