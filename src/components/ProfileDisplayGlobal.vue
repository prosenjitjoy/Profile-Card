<script setup lang="ts">
import { store } from "../store"
</script>

<template>
  <section class="md:w-1/3 flex flex-col py-12">
    <h3 class="font-bold font-lg">{{ store.name }}</h3>
    <p class="mt-2">{{ store.occupation }} at {{ store.organisation }}</p>
    <p>Email: {{ store.email }}</p>
    <p>Phone Number: {{ store.number }}</p>
  </section>
</template>
