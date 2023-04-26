const {createApp} = Vue;

createApp({
  data(){
    return {
      arrEmails: [],
      email: "",
      limit: 100
    }
  },
  methods: {
    getMail(){


      for(let i = 0; i < this.limit; i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(result => {
          this.email = result.data.response
          this.arrEmails.push(this.email)
          
        })
       
        
      }

    }
  },
  mounted(){
    this.getMail()
  
  }
}).mount("#app")