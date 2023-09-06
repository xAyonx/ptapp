<template>
  <div class="text-h4">Dein Training bei {{ trainer.name }}</div>
  <q-page padding>

  </q-page>
</template>

<script setup>
const props = defineProps({
  id: String
})

const trainer = {
  id: props.id,
  name: 'Jascha'
}
</script>
