<template> 
  <header class="cabecera">
    <notifications group="home" position="top center" height="700"/>
    <div class="usuario">
      <p @click="goTo('enter')" class="Title"><img src="https://firebasestorage.googleapis.com/v0/b/roll100.appspot.com/o/dice.png?alt=media&token=5630d073-f6e2-4976-afa3-73c1992a1813" class="Logo"> Roll100</p>
      <div v-if="user.email"><p>User: {{user.name}}</p><p> Email:{{user.email}}</p></div>
      <div v-if="!user.email"><p>You need to log in</p></div>
      <button class="login" v-if="!this.user.email" @click="login()">Log in</button>
      <button class="logout" v-if="this.user.email" @click="logout()">Log Out</button>
    </div>
    
  </header>
</template>

<script>
import Firebase from '../db.js'

export default {
  name: 'Cabecera',
  props: {
    msg: String
  },
  mounted(){
    Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.data = user;
          this.user.email = user.email;
          this.user.name = user.displayName;
        }
        else {
          this.user.data = {};
          this.user.email = null;
          this.user.name = null;
        }
      })
    
  },
  data(){
    return{
      user: {
          email: null,
          name:null,
          data: {}
      },
      marc:0,
      var:{}
    }
  },
  computed:{
    
  },
  methods:{
    login() {
        if(Firebase.login())
          this.$notify({
            group: 'home',
            title: 'login',
            text: 'Se ha realizado la operación con exito'
          });
      },
      logout() {
        Firebase.logout()
        this.$notify({
          group: 'home',
          title: 'logout',
          text: 'Se ha cerrado sesión con exito'
        });
      },
    goTo:function(url){
      this.$router.push(url).catch(()=>{});
    }
  },

  firestore: {
      
  },
  firebase(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{margin:0;}
  @import "../styles/main.css"; 
</style>
