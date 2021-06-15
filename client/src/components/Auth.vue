<template> 
  <div class="hero-site">
    <hr>
    <div class="hero-image">
      <div class="hero-text">
        <p>ROLL100</p>
      </div>
    </div>  
    <br>
    <button class="goesTo" @click="goToChar()">Create a character</button>
    <button class="goesTo" @click="goToGame()">Import a characer from other players</button>
    <br><br><hr>
    <footer>
      <p>This site pretends to help new players so that they can play some d&#38;d games with friends without needing to learn everything.</p>
      <p>Of course, some basic competency will be required but this app can speed things up by a lot. It will also allow users to play using their character sheets.</p>
      <p>Without further ado, I hope you enjoy yourselves and good luck!</p>
    </footer>
    
  </div>
</template>

<script>
//import {db} from '../db.js'
//import Firebase from '../db.js'

export default {
  name: 'Auth',
  data(){
    return{

    }
  },
  methods:{
  goToChar:
    function(){
      this.$router.push("char")
    },
  goToGame:
  function(){
    this.$router.push("sala")
  }
    
    
  },
  
  computed:{

  },
  firestore: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/main.css"; 
</style>
