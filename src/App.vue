<script setup lang="ts">
import HeaderLocal from './components/HeaderLocal.vue'
import ProfileFormLocal from './components/ProfileFormLocal.vue'
import ProfileDisplayLocal from './components/ProfileDisplayLocal.vue'

import HeaderGlobal from './components/HeaderGlobal.vue'
import ProfileFormGlobal from './components/ProfileFormGlobal.vue'
import ProfileDisplayGlobal from './components/ProfileDisplayGlobal.vue'

import { reactive } from "vue"

interface Obj {
  name: string
  occupation: string
  organisation: string
  email: string
  number: string
}

const formData = reactive({
  name: "",
  occupation: "",
  organisation: "",
  email: "",
  number: "",
})
const update = (data: Obj) => {
  formData.name = data.name
  formData.occupation = data.occupation
  formData.organisation = data.organisation
  formData.email = data.email
  formData.number = data.number
} 
</script>

<template>
  <div>
    <HeaderLocal />
    <div class="flex flex-col md:flex-row">
      <ProfileFormLocal @submit="update" />
      <ProfileDisplayLocal :form-data="formData" />
    </div>
  </div>

  <div>
    <HeaderGlobal />
    <div class="flex flex-col md:flex-row">
      <ProfileFormGlobal />
      <ProfileDisplayGlobal />
    </div>
  </div>
</template>
