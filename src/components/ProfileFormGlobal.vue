<script setup lang="ts">
import { store } from "../store"
</script>

<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center ">
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">Name</label>
      <input type="text" id="name" name="name" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="store.name" />
    </div>

    <div class="flex flex-col mt-2">
      <label for="occupation" class="flex text-gray-800 mb-2">Occupation</label>
      <input type="text" id="occupation" name="occupation" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="store.occupation">
    </div>

    <div class="flex flex-col mt-2">
      <label for="organisation" class="flex text-gray-800 mb-2">Organisation</label>
      <input type="text" id="organisation" name="organisation" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="store.organisation">
    </div>

    <div class="flex flex-col mt-2">
      <label for="email" class="flex text-gray-800 mb-2">email</label>
      <input type="email" id="email" name="email" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="store.email">
    </div>

    <div class="flex flex-col mt-2">
      <label for="number" class="flex text-gray-800 mb-2">number</label>
      <input type="text" id="number" name="number" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="store.number">
    </div>
  </section>
</template>
