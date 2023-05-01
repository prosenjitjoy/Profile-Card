<script setup lang="ts">
import { ref } from "vue"
const emits = defineEmits(["submit"])
const name = ref("")
const occupation = ref("")
const organisation = ref("")
const email = ref("")
const number = ref("")
const submitForm = () => {
  if (!name.value || !occupation.value || !organisation.value || !email.value || !number.value) return
  emits("submit", {
    name: name.value,
    occupation: occupation.value,
    organisation: organisation.value,
    email: email.value,
    number: number.value,
  })
}
const clear = () => {
  name.value = ""
  occupation.value = ""
  organisation.value = ""
  email.value = ""
  number.value = ""
  emits("submit", {})
}

</script>

<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center ">
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">Name</label>
      <input type="text" id="name" name="name" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="name" />

    </div>
    <div class="flex flex-col mt-2">
      <label for="occupation" class="flex text-gray-800 mb-2">Occupation</label>
      <input type="text" id="occupation" name="occupation" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="occupation">
    </div>

    <div class="flex flex-col mt-2">
      <label for="organisation" class="flex text-gray-800 mb-2">Organisation</label>

      <input type="text" id="organisation" name="organisation" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="organisation">
    </div>
    <div class="flex flex-col mt-2">
      <label for="email" class="flex text-gray-800 mb-2">email</label>

      <input type="email" id="email" name="email" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="email">
    </div>
    <div class="flex flex-col mt-2">
      <label for="number" class="flex text-gray-800 mb-2">number</label>

      <input type="text" id="number" name="number" class="border-2 border-solid border-blue-200 rounded px-2 py-1" v-model="number">
    </div>

    <div class="flex flex-row mt-12 gap-8">
      <button class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" type="button" @click="clear">
        Clear
      </button>
      <button class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" type="submit" @click="submitForm">
        Submit
      </button>
    </div>
  </section>
</template>
