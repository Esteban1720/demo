<template>
  <div>
    <h3>Historial de accesos</h3>
    <button class="btn ghost" @click="load">Refrescar</button>
    <div v-if="logs.length===0" style="margin-top:8px">No hay registros</div>
    <ul class="log-list" v-else>
      <li v-for="l in logs" :key="l.id" :class="['log-item', l.allowed ? 'success' : 'denied']">
        <div>
          <div><strong>{{ formatDate(l.created_at) }}</strong></div>
          <div class="meta">{{ l.method }} — <em>{{ l.visitor_name || 'Desconocido' }}</em></div>
          <div class="meta">UID: {{ l.method_uid }} — Permitido: {{ l.allowed ? 'SI' : 'NO' }}</div>
        </div>
        <div v-if="l.image_path"><img :src="'http://localhost:3000'+l.image_path" style="max-width:120px;border-radius:6px"/></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AccessLog',
  data() { return { logs: [] }; },
  mounted() { this.load(); },
  methods: {
    async load() {
      try {
        const res = await fetch('http://localhost:3000/access-logs');
        this.logs = await res.json();
      } catch (err) { console.error(err); }
    },
    formatDate(s) {
      try { return new Date(s).toLocaleString(); } catch(e){ return s }
    }
  }
}
</script>

<style scoped>
.log-list{max-height:300px;overflow:auto;padding:0;margin:0;list-style:none}
.log-item{display:flex;justify-content:space-between;align-items:center;padding:10px;border-bottom:1px solid rgba(0,0,0,0.04)}
.meta{color:var(--muted);font-size:0.9rem}
</style>
