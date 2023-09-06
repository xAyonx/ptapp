<template>
  <div class="text-h4">Neuigkeiten</div>
  <q-page padding>
    <q-card v-for="n in news" :key="n.id">
      <q-card-section>
        <div class="text-subtitle2">{{ n.date }}</div>
        <div class="text-h6">{{ n.title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ n.content }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>

const news = [
  {
    id: 1,
    title: 'Öffnungszeiten',
    date: '02.09.2023',
    content: 'Auch an Weihnachten haben wir für euch offen'
  }
]

</script>
