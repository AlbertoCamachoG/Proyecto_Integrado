<template> 
    <div class="sheets-container">
      <notifications group="foo" position="top center"/>
      <div class="container" v-for="ficha,index in fichasNoMias" v-bind:key="index">
        <p>Name: {{ficha.a.name}}</p>
        <p>Class: {{ficha.a.class}}</p>
        <p>Player Name: {{ficha.a.player}}</p>
        <p>Strength:{{ficha.a.stats[0]}} | Dexterity: {{ficha.a.stats[1]}} | Constitution:{{ficha.a.stats[2]}} </p>
        <p>Intelligence: {{ficha.a.stats[3]}} | Wisdom: {{ficha.a.stats[4]}} | Charisma: {{ficha.a.stats[5]}}</p>
        <p>Raza: {{ficha.a.race}}</p>
        <p>Owner: {{ficha.a.account}}</p>
        <br>
        <button @click="copiar(ficha)">ADD</button>
      </div>
    </div>
</template>

<script>
import {db} from '../db.js';
import Firebase from '../db.js'

export default {
  name: 'Cabecera',
  props: {
    
  },
  mounted(){
    
  },
  data(){
    return{
      fichas:"",
    }
  },
  computed:{
    fichasNoMias:function(){
      var array=[];
      this.fichas.forEach(element => {
        if(element.a.account!=Firebase.auth.currentUser.email){
          array.push(element)
        }
      });
      return array;
    },
    fichasFiltered:function(){
      var fichasFiltradas=[];
      Object.keys(this.fichas).forEach((el)=>{          
        if(this.fichas[el].a.account==Firebase.auth.currentUser.email){fichasFiltradas.push(this.fichas[el].a)}
      })
      return fichasFiltradas
    }
  },
  methods:{
    sendMessage:function(){
      this.$socket.client.emit('messageChannel', "prueba");
      console.log("ayuda")
    },
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.client.emit('pingServer', 'PING!')
    },
    copiar(ficha){
      var a=ficha.a;
      var bool=false;
      var num=0;
      this.fichasFiltered.forEach((ficha,index)=>{
        if(ficha.account==Firebase.auth.currentUser.email && ficha.name==a.name){
          bool=true;
          num=index;
        }
      });
      if(bool){
        console.log("ganaste")
        db.collection("fichas").doc(this.fichas[num].id).set({
          a
        })
      }else{
         a.account=Firebase.auth.currentUser.email;
        db.collection("fichas").doc().set({
          a
        })
        this.$notify({
          group: 'foo',
          title: 'Successful',
          text: 'A new character has been created!'
        });
      }
    }
  },

  firestore: {
      fichas:db.collection("fichas")
  },
  firebase(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/main.css"; 
</style>
