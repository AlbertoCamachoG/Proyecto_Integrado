<template>
  <div id="app">
    <Cabecera></Cabecera>
    <router-view></router-view>
  </div>
</template>

<script>
//import Auth from './components/Auth.vue'
import Cabecera from './components/Cabecera.vue'
import Firebase from './db.js'
import { EventBus } from './main';

export default {
  name: 'App',
  components: {
    Cabecera
  },
  mounted () {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        this.user.loggedIn = true;
        this.user.data = user;
        EventBus.$emit('logged', this.user.loggedIn);

      }
      else {
        this.user.loggedIn = false;
        this.user.data = {};
        EventBus.$emit('logged', this.user.loggedIn);
        if(this.$router.url!="/enter")this.$router.push("/enter").catch(()=>{});
      }
    })
  },
  data(){
    return{
      user: {
        loggedIn: false,
        data: {}
      }
    }
  },

  computed: {
    username() {
      return this.$route.params.username
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
