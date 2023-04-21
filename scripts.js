const {createApp} = Vue;

createApp({
  data(){
    return {
      arrEmails: [],
      email: "",
      loading: true
    }
  },
  methods: {
    getMail(){


      for(let i = 0; i < 10; i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(result => {
          this.email = result.data.response
          this.arrEmails.push(this.email)
          setTimeout(() =>{
            this.loading = false},2000)
          
        })
       
        
      }

    }
  },
  mounted(){
    this.getMail()
  
  }
}).mount("#app")