const {createApp} = Vue;

createApp({
  data(){
    return {
      email: ""
    }
  },
  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(result => {
      this.email = result.data.response
    })
  }
}).mount("#app")