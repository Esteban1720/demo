<template>
  <article class="card">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  padding: 18px;
  border: 1px solid #e6efe9;
  box-shadow: 0 6px 16px rgba(15,23,42,.06);
  transition: transform .15s ease, box-shadow .15s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(15,23,42,.10);
}
.icon {
  font-size: 22px;
  line-height: 1;
  display: inline-flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: color-mix(in srgb, var(--up-green) 12%, #fff);
  color: var(--up-green);
  margin-bottom: 10px;
  font-weight: 800;
}
h3 {
  margin: 0 0 6px;
  color: var(--text-dark);
}
p {
  margin: 0;
  color: var(--text-light);
  font-size: 14.5px;
  line-height: 1.6;
}
</style>
