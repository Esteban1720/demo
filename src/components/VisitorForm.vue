<template>
  <div class="visitor-form">
    <h3>Registrar visitante</h3>
    <div>
      <label>Nombre</label>
      <input v-model="name" />
    </div>
    <div>
      <label>UID tarjeta (ej. CARD1234)</label>
      <input v-model="id_card" />
    </div>
    <div>
      <label>UID biométrico (ej. BIO123)</label>
      <input v-model="bio_uid" />
    </div>
    <div style="margin-top:8px">
      <button class="btn primary" @click="register">Registrar</button>
    </div>
    <div v-if="message" style="margin-top:8px;color:green">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'VisitorForm',
  data() {
    return { name: '', id_card: '', bio_uid: '', message: '' };
  },
  methods: {
    async register() {
      try {
        const res = await fetch('http://localhost:3000/visitors', {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ name: this.name, id_card: this.id_card, bio_uid: this.bio_uid })
        });
        if (!res.ok) throw new Error('Error');
        const data = await res.json();
        this.message = `Visitante creado: ${data.name} (id:${data.id})`;
        this.name=''; this.id_card=''; this.bio_uid='';
        setTimeout(()=> this.message=' ', 3000);
      } catch (err) { alert('Error registrando visitante'); }
    }
  }
}
</script>

<style scoped>
.visitor-form input{width:100%;padding:10px 12px;border-radius:10px;border:1px solid rgba(6,30,18,0.06);margin-top:8px}
</style>
