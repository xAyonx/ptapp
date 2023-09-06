<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>

    <q-tabs v-model="tab" indicator-color="primary" active-color="primary" class="fixed-bottom bg-white">
      <q-route-tab v-for="nav in navigation" :key="nav.to" :icon="nav.icon" :to="nav.to" exact />
    </q-tabs>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('buchen')

const navigation = [
  {
    icon: 'home',
    to: '/'
  },
  {
    icon: 'sports_mma',
    to: '/booking'
  },
  {
    icon: 'history',
    to: '/history'
  },
  {
    icon: 'store',
    to: '/studio'
  },
  {
    icon: 'person',
    to: '/account'
  }
]
</script>
