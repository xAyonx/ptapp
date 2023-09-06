<template>
  <div class="text-h4">Deine Buchungen</div>
  <q-page padding>
    <q-list bordered>
      <q-item v-for="buchung in buchungen" :key="buchung.id" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            <img :src="buchung.trainer.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ buchung.kurs }}</q-item-label>
          <q-item-label caption>{{ buchung.trainer.name }}</q-item-label>
          <q-item-label caption>{{ new Date(buchung.timestamp).toLocaleDateString("de-DE") }}</q-item-label>
        </q-item-section>

      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
const buchungen = [
  {
    id: 1,
    timestamp: Date.now(),
    kurs: 'Wettkampfvorbereitung',
    trainer: {
      name: 'Jascha',
      avatar: 'https://cdn.quasar.dev/img/avatar.png'
    }
  },
  {
    id: 2,
    timestamp: Date.now(),
    kurs: 'Technik für Anfänger',
    trainer: {
      name: 'Jascha',
      avatar: 'https://cdn.quasar.dev/img/avatar.png'
    }
  }
]
</script>
