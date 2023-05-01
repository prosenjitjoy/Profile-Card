<script setup lang="ts">
const props = defineProps({
  formData: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <section class="md:w-1/3 flex flex-col py-12">
    <h3 class="font-bold font-lg">{{ props.formData.name }}</h3>
    <p class="mt-2">{{ props.formData.occupation }} at {{ props.formData.organisation }}</p>
    <p>Email: {{ props.formData.email }}</p>
    <p>Phone Number: {{ props.formData.number }}</p>
  </section>
</template>
