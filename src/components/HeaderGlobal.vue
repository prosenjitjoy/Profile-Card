<script setup lang="ts">
import { store } from "../store"
</script>

<template>
  <header class="w-full  p-4 border-b bg-blue-300 border-gray-700 flex justify-between items-center">
    <h2 class="text-xl text-gray-800">Profile Card Generator - <strong>Global State</strong></h2>
    <button class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" type="button" @click="store.clear()">
      Reset
    </button>
  </header>
</template>
