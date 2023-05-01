import { reactive } from "vue"

export const store = reactive({
  name: "",
  occupation: "",
  organisation: "",
  email: "",
  number: "",
  clear() {
    this.name = ""
    this.occupation = ""
    this.organisation = ""
    this.email = ""
    this.number = ""
  }
})