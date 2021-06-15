<template> 
<div class="back">
  
<div class="mainFicha">
  <notifications group="foo" position="top center"/>
    <div id="feature" class="featureExplained fuentetitulo" v-if="featureBoolean">
      <h1>{{featureExplained[0]}}</h1>
      {{featureExplained[1]}}
      <button @click="closeExpla()">Close</button>
    </div>
    <div  class="featureExplained fuentetitulo" v-if="deleteBoolean">
      <h1>DELETE A CHARACTER</h1>
      <br>
      <select id="delit" name=""><option v-for="(char,index) in fichasFiltered" v-bind:key="index" v-bind:value="char.name">{{char.name}}</option></select>
      <br>
      <button @click="deleteChar()">Delete</button>
      <br>
      <button @click="closeDel()">Close</button>
    </div>
    <div class="createChar">
      <button class="goesTo" @click="saveJson()">Save</button>
      <button class="goesTo" @click="()=>this.importar=!this.importar">Load</button>
      <button class="goesTo" @click="activateDeleteChar()">Delete</button>      
      <br><br><br>
      <select class="loader" @change="loadJson($event.target.value)" v-if="importar">
        <option value="-">-</option>
        <option v-for="(fichas,index) in fichasFiltered" v-bind:key="index" v-bind:value="index">{{fichas.name}}</option>
      </select>
      <header class="header">
        <div class="nombre fuentetitulo">
          <input id="name" type="text" class="name normalFo">
          <label for="name" >Character Name</label>
        </div>
        <div class="datos fuentetitulo">
          <section>
            <select @change="importClass($event.target.value)" name="class" id="class">
              <option value="none">---</option>
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>
            <label for="class">Class</label>
          </section>
          
          <section>
            <input v-model="lvl" min="1" max="20" id="lvl" type="number" @blur="checkNumber(lvl,1,20)">
            <label for="lvl">Lvl</label>
          </section>

          <section>
            <input id="bg" type="text">
            <label for="bg">Background</label>
          </section>

          <section>
            <input id="player" type="text">
            <label for="player">Player Name</label>
          </section>

          <section>
            <select name="race" id="race">
              <option value="none">---</option>
              <option value="dwarf">Dwarf</option>
              <option value="elf">Elf</option>
              <option value="halfing">Halfing</option>
              <option value="human">Human</option>
              <option value="dragonborn">Dragonborn</option>
              <option value="gnome">Gnome</option>
              <option value="half-elf">Half-Elf</option>
              <option value="half-orc">Half-Orc</option>
              <option value="tiefling">Tiefling</option>
            </select>
            <label for="race">Race</label>
          </section>

          <section>
            <select name="align" id="align">
              <option value="unaligned">Unaligned</option>
              <option value="lawfulgood">Lawful Good</option>
              <option value="neutralgood">Neutral Good</option>
              <option value="chaoticgood">Chaotic Good</option>
              <option value="lawfulneutral">Lawful Neutral</option>
              <option value="trueneutral">True Neutral</option>
              <option value="chaoticneutral">Chaotic Neutral</option>
              <option value="lawfulevil">Lawful Evil</option>
              <option value="neutralevil">Neutral Evil</option>
              <option value="chaoticevil">Chaotic Evil</option>
            </select>
            <label for="align">Alignement</label>
          </section>

          <section>
            <input id="exp" type="number" min="0">
            <label for="exp">Experience Points</label>
          </section>
        </div>
      </header>
      <div class="stats">
        <br>
        <div class="head">
          <section>
            <label for="wisPer" class="fuentetitulo"> Passive Wisdom Perception: </label>
            <input id="wisPer" type="number" v-bind:value="passiveWisdom" readonly disabled>
          </section>
          <section>
            <label for="hitPoints" class="fuentetitulo"> Hit Points: </label>
            <input id="hitPoints" type="number" v-bind:placeholder="hitPoints">
          </section>
          <section>
            <label for="proficiency" class="fuentetitulo">Proficiency Bonus +{{profi}}</label>
          </section>
          <section>
            <label for="initiative " class="fuentetitulo">Initiative: + </label><input placeholder="1d20 + dex" v-bind:value="Bonos[1]">
          </section>
          <section>
            <label  class="fuentetitulo">Speed: 30 feet</label>
          </section>
          <section>
            <label  class="fuentetitulo">CA: {{11+Bonos[2]}}</label>
          </section>
          
        </div>
        <br>
        <div class="statsSide">
          <div class="stats1">
            <div class="mainStats fuentetitulo">
              <div v-for="(stat,index) in statString" v-bind:key="index">
                <label v-bind:for="stat">{{stat}}</label>
                <input v-model="allStats[stat]" id="ms" type="number" min="1" max="30" @blur="checkALookStat()">
                <label class="bono" for="stat">{{Bonos[index]}}</label>
                <br>
              </div>
            </div>

            <div>

              <div class="savingThrows">
                <label for="">Standard: <label v-for="(rec,index) in recSkills" v-bind:key="index">{{rec}} </label></label>
                <div><input @change="selectOnly(2,$event,'st')" type="checkbox" name="st" id="stStr" value="Strength"><label for="stStr">Strength</label></div>
                <div><input @change="selectOnly(2,$event,'st')" type="checkbox" name="st" id="stDex" value="Dexterity"><label for="stDex">Dexterity</label></div>
                <div><input @change="selectOnly(2,$event,'st')" type="checkbox" name="st" id="stConsti" value="Constitution"><label for="stConsti">Constitution</label></div>
                <div><input @change="selectOnly(2,$event,'st')" type="checkbox" name="st" id="stInt" value="Intelligence"><label for="stInt">Intelligence</label></div>
                <div><input @change="selectOnly(2,$event,'st')" type="checkbox" name="st" id="stWis" value="Wisdom"><label for="stWis">Wisdom</label></div>
                <div><input @change="selectOnly(2,$event,'st')" type="checkbox" name="st" id="stCha" value="Charisma"><label for="stCha">Charisma</label></div>
                <label class="fuentetitulo" for="">Saving Throw</label>
              </div>

              <div class="savingThrows">
                <div v-for="(sk,index) in skillString" v-bind:key="index">
                  <input @click="checkSkills()" @change="selectOnlyAuto($event,'skill')" type="checkbox" name="skill" v-bind:id="sk" v-bind:value="sk" v-if="choosableSkills(sk)">
                  <label v-bind:for="sk" v-if="choosableSkills(sk)">{{sk}}</label>
                </div>
                <label class="titl fuentetitulo " for="">Skills: Choose {{maxSkills}}</label>
              </div>

            </div>

            <div class="features">
              <label class="fuentetitulo titl">Features</label>
              <label class="normalFo" v-for="(feat,index) in featuresFiltered" v-bind:key="index"><label v-for="(fe,ind) in feat" v-bind:key="ind" @click="explicame(fe)">{{fe}}<br></label></label>
            </div>

            <div class="features" v-if="hasSpells">
              <label class="titl fuentetitulo">Spell Casting</label>
              <div>
                <label class="fuentetitulo" >Cantrips </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][0]" v-bind:value="getHechizos(0,index)" v-bind:key="index +Math.random(1,1000)" name="spells1" v-bind:id="'spells0'+index">
                  <option v-for="(spell,index) in spellsFiltered[0]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 1 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][1]" v-bind:value="getHechizos(1,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells1'+index">
                  <option v-for="(spell,index) in spellsFiltered[1]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 2 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][2]" v-bind:value="getHechizos(2,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells2'+index">
                  <option v-for="(spell,index) in spellsFiltered[2]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 3 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][3]" v-bind:value="getHechizos(3,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells3'+index">
                  <option v-for="(spell,index) in spellsFiltered[3]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 4 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][4]" v-bind:value="getHechizos(4,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells4'+index">
                  <option v-for="(spell,index) in spellsFiltered[4]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 5 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][5]" v-bind:value="getHechizos(5,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells5'+index">
                  <option v-for="(spell,index) in spellsFiltered[5]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 6 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][6]" v-bind:value="getHechizos(6,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells6'+index">
                  <option v-for="(spell,index) in spellsFiltered[6]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 7 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][7]" v-bind:value="getHechizos(7,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells7'+index">
                  <option v-for="(spell,index) in spellsFiltered[7]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 8 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][8]" v-bind:value="getHechizos(8,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells8'+index">
                  <option v-for="(spell,index) in spellsFiltered[8]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
                <label class="fuentetitulo">Level 9 </label><select class="normalFo" v-for="index in this.className.lvlBonus.Spells[lvl][9]" v-bind:value="getHechizos(9,index)" v-bind:key="index+Math.random(1,1000)" name="spells1" v-bind:id="'spells9'+index">
                  <option v-for="(spell,index) in spellsFiltered[9]" v-bind:key="index" v-bind:value="spell">{{spell}}</option>
                </select><br><br>
              </div>

            </div>

            <div class="features fuentetitulo" v-if="hasSpells">
              <label class="titl fuentetitulo">Search Spells</label>
              <input v-model="searchSpell" placeholder="Click Below To See Results">
              <br>
              <label><b>Matching Spells</b></label>
                <select v-model="selectedSearchedSpell">
                  
                  <option v-for="(spell,index) in searchedSpells" v-bind:key="index" v-bind:value="spell">{{spell.name}}</option>
                </select>
              <label>School: {{selectedSearchedSpell.school}}</label>
              <label>Level: {{selectedSearchedSpell.lvl}}</label>
              <label>Components: {{selectedSearchedSpell.components}}</label>
              <label>Casting Time: {{selectedSearchedSpell.castingtime}}</label>
              <label>Effect: {{selectedSearchedSpell.effect}}</label>
              <label>Range: {{selectedSearchedSpell.range}}</label>
              <label>Duration: {{selectedSearchedSpell.duration}}</label>
              <label>Attack Saves: {{selectedSearchedSpell.attsv}}</label>
              <label>Clases: <li v-for="(cla,index) in selectedSearchedSpell.clases" v-bind:key="index"> {{cla}}</li></label>
              <label>Description: {{selectedSearchedSpell.description}}</label>
              <br>              
            </div>

          </div>
          <div class="writeALot">
            <div class="customWriteALot" v-for="(title,index) in ['Personality Traits','Ideals','Bonds','Flaws','Other Proficiency or Languages']" v-bind:key="index">
              <label class="titl fuentetitulo">{{title}}</label>
              <br>
              <textarea v-bind:id="'textos'+index" class="areaDeTexto"></textarea>
            </div>
          </div>

        </div>
      </div>
        
    </div>
    
  </div>
</div>
  
</template>

<script>
import $ from 'jquery';
import {db} from '../db.js';
import Firebase from '../db.js'
/*db.collection("clases").doc("bard").set({
  
})*/

export default {
  name: 'Auth',
  props: {
    
  },
  data(){
    return{
      statString:["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"],
      skillString:["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stealth","Survival"],
      marc:0,
      features:"",
      featureExplained:["name","ex"],
      featureBoolean:false,
      deleteBoolean:false,
      allStats:{
        Strength:1,
        Dexterity:1,
        Constitution:1,
        Intelligence:1,
        Wisdom:1,
        Charisma:1
      },
      lvl:1,
      skills:[],
      recSkills:["None",""],
      maxSkills:0,
      clase:[],
      className:"Select Class",
      data:{},
      fichas:{},
      hitPoints:"",
      loaded:-1,
      searchSpell:"",
      selectedSearchedSpell:"Light",
      importar:false
    }
  },
  methods:{
    activateDeleteChar:function(){
      this.deleteBoolean=true;
    },
    deleteChar:function(){
      var name=$("#delit").val();
      
      this.fichas.forEach((el)=>{
        if(el.a.name==name&&el.a.account==Firebase.auth.currentUser.email){
            db.collection('fichas')
              .doc(el.id)
              .delete();
          this.$notify({
            group: 'foo',
            title: 'Successful!',
            position:'bottom left',
            text: 'Successfully deleted!'
          });
        }
      })
      this.closeDel();
    },
    saveJson:function(){
      try{
        if($("#name").val()==""){
          this.$notify({
          group: 'foo',
          title: 'Careful!',
          type:'warn',
          position:'bottom left',
          text: 'You need to select a name!'
        });return
        }
        var hechizos=[[],[],[],[],[],[],[],[],[],[]];
      if(this.className.lvlBonus.Spells){
        for(var i=0;i<=9;i++){
          for(var e=1;e<=this.className.lvlBonus.Spells[this.lvl][i];e++){
          hechizos[i].push($('#spells'+i+e).val())
        }
        }
      }
      var a={
        account:Firebase.auth.currentUser.email,
        name:$("#name").val(),
        class:$("#class").val(),
        lvl:this.lvl,
        background:$("#bg").val(),
        player:$("#player").val(),
        race:$("#race").val(),
        align:$("#align").val(),
        exp:$("#exp").val(),
        hitPoints:$("#hitPoints").val(),
        savingThrows:[$("#stStr").is(':checked'),$("#stDex").is(':checked'),$("#stConsti").is(':checked'),$("#stInt").is(':checked'),$("#stWis").is(':checked'),$("#stCha").is(':checked')],
        skills:this.skills,
        stats:[this.allStats.Strength,this.allStats.Dexterity,this.allStats.Constitution,this.allStats.Intelligence,this.allStats.Wisdom,this.allStats.Charisma],
        spells0:hechizos[0],
        spells1:hechizos[1],
        spells2:hechizos[2],
        spells3:hechizos[3],
        spells4:hechizos[4],
        spells5:hechizos[5],
        spells6:hechizos[6],
        spells7:hechizos[7],
        spells8:hechizos[8],
        spells9:hechizos[9],
        cositas:[$("#textos0").val(),$("#textos1").val(),$("#textos2").val(),$("#textos3").val(),$("#textos4").val()]

      }
      var bool=false;
      var num=0;
      this.fichasFiltered.forEach((ficha,index)=>{
        if(ficha.account==Firebase.auth.currentUser.email && ficha.name==$("#name").val()){
          bool=true;
          num=index;
        }
      });
      if(bool){
        db.collection("fichas").doc(this.fichas[num].id).set({
          a
        })
      }else{
        db.collection("fichas").doc().set({
          a
        })
        this.$notify({
          group: 'foo',
          title: 'Successful',
          text: 'A new character has been created!'
        });
      }
      }catch(error){
        this.$notify({
          group: 'foo',
          title: 'Careful!',
          type:'warn',
          position:'bottom left',
          text: 'You need to select a class!'
        });
      }
      
      
    },
    loadJson:function(n){
      this.importar=false
      this.loaded=n;
      if(n!="-"){
        var character=this.fichasFiltered[n];
        $("#name").val(character.name);
        $("#class").val(character.class);
        this.importClass(character.class);
        this.lvl=character.lvl;
        $("#bg").val(character.background);
        $("#player").val(character.player);
        $("#race").val(character.race);
        $("#align").val(character.align);
        $("#exp").val(character.exp);
        $("#hitPoints").val(character.hitPoints);
        $("#stStr").prop("checked",character.savingThrows[0]);
        $("#stDex").prop("checked",character.savingThrows[1]);
        $("#stConsti").prop("checked",character.savingThrows[2]);
        $("#stInt").prop("checked",character.savingThrows[3]);
        $("#stWis").prop("checked",character.savingThrows[4]);
        $("#stCha").prop("checked",character.savingThrows[5]);
        this.skills=character.skills;
        for(var i=0;i<character.skills.length;i++){
          $("#"+character.skills[i]).prop("checked",true);
        }
        this.allStats.Strength=character.stats[0];
        this.allStats.Dexterity=character.stats[1];
        this.allStats.Constitution=character.stats[2];
        this.allStats.Intelligence=character.stats[3];
        this.allStats.Wisdom=character.stats[4];
        this.allStats.Charisma=character.stats[5];
        $("#textos0").val(character.cositas[0]);
        $("#textos1").val(character.cositas[1]);
        $("#textos2").val(character.cositas[2]);
        $("#textos3").val(character.cositas[3]);
        $("#textos4").val(character.cositas[4]);
        this.$notify({
          group: 'foo',
          title: 'Successful!',
          position:'bottom left',
          text: 'Successfully imported!'
        });
      }else{
        this.importar=false;
        this.$notify({
          group: 'foo',
          title: 'Careful!',
          type:'warn',
          position:'bottom left',
          text: 'You need to select a class!'
        });
      }
      
      
    },
    getHechizos:function(n,index){
      switch(n){
        case 0:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells0[index-1]}else{return $("#spells0"+index).val()}
        case 1:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells1[index-1]}else{return $("#spells1"+index).val()}
        case 2:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells2[index-1]}else{return $("#spells2"+index).val()}
        case 3:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells3[index-1]}else{return $("#spells3"+index).val()}
        case 4:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells4[index-1]}else{return $("#spells4"+index).val()}
        case 5:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells5[index-1]}else{return $("#spells5"+index).val()}
        case 6:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells6[index-1]}else{return $("#spells6"+index).val()}
        case 7:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells7[index-1]}else{return $("#spells7"+index).val()}
        case 8:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells8[index-1]}else{return $("#spells8"+index).val()}
        case 9:if(this.fichasFiltered[this.loaded]){return this.fichasFiltered[this.loaded].spells9[index-1]}else{return $("#spells9"+index).val()}
      }
      
    },
    getBono:function(stat){
        switch(true){
          case (stat==1):return -5;
          case (stat<=3):return -4;
          case (stat<=5):return -3;
          case (stat<=7):return -2;
          case (stat<=9):return -1;
          case (stat<=11):return 0;
          case (stat<=13):return 1;
          case (stat<=15):return 2;
          case (stat<=17):return 3;
          case (stat<=19):return 4;
          case (stat<=21):return 5;
          case (stat<=23):return 6;
          case (stat<=25):return 7;
          case (stat<=27):return 8;
          case (stat<=29):return 9;
          case (stat==30):return 10;
          default:return "X";
      }
    },
    receiveStat:function(name){
      if(name)return "dexBono"
    },
    selectOnly:function(nu,event,name){
      if($("input[name="+name+"]:checked").length > nu){
        $(event.path[0]).prop("checked",false)
      }
    },
    selectOnlyAuto:function(event,name){
      var n=0
      if(this.className!="Select Class")
        n=this.className.proficiency.skillsNumber;
      if($("input[name="+name+"]:checked").length > n){
        $(event.path[0]).prop("checked",false)
      }
    },
    checkALookStat:function(){
      var num=event.target.value;
      if(num>30){
        event.target.value=30;
      }else{
        if(num<1)
        event.target.value=1;
      }
      
    },
    checkSkills:function(){
      this.skills=[];
      var habilidades=$("input[name='skill']");
      for(var i=0; i<habilidades.length;i++){
        if($(habilidades[i]).prop("checked") && this.skills.length<this.maxSkills&&habilidades[i].value!=event.target.value){
          this.skills.push(habilidades[i].value);
        }
      }
      if($(event.target).prop("checked") && this.skills.length<this.maxSkills)this.skills.push(event.target.value);
    },
    importClass:function(className){
        switch(className){
          case "barbarian":this.className=this.clase[0].barbarian;break;
          case "bard":this.className=this.clase[1].bard;break;
          case "cleric":this.className=this.clase[2].cleric;break;
          case "druid":this.className=this.clase[3].druid;break;
          case "fighter":this.className=this.clase[4].fighter;break;
          case "monk":this.className=this.clase[5].monk;break;
          case "paladin":this.className=this.clase[6].paladin ;break;
          case "ranger":this.className=this.clase[7].ranger ;break;
          case "rogue":this.className=this.clase[8].rogue ;break;
          case "sorcerer":this.className=this.clase[9].sorcerer ;break;
          case "warlock":this.className=this.clase[10].warlock;break;
          case "wizard":this.className=this.clase[11].wizard;break;
          default:this.className="Select Class";
        }
        if(this.className!="Select Class"){
          this.recSkills=this.className.proficiency.savingThrows
          this.maxSkills=this.className.proficiency.skillsNumber
          this.features=this.className.lvlBonus.features
          this.hitPoints=parseInt(this.className.hitPoints)+" + "+this.className.hitMod
        }else{
          this.recSkills=["None",""]
          this.maxSkills=0
          this.features=""
          this.hitPoints="Select Class"
        }
      
    },
    explicame:function(name){
      var a=this.data[0].features;
      Object.keys(a).forEach((key)=> {
        if(name==key){
          this.featureExplained=[key,a[key]];
          this.featureBoolean=true;
        }
      });
    },
    closeExpla:function(){
      this.featureBoolean=false;
    },
    closeDel:function(){
      this.deleteBoolean=false;
    },
    checkNumber:function(value,min,max){
      if(value>max)this.lvl=max
      if(value<min)this.lvl=min
    },
    choosableSkills:function(skill){
      if(this.className!="Select Class"){
        if(this.className.proficiency.skills.includes(skill)||this.className.proficiency.skills[0]=="all"){
          return true;
        }else{
          return false
        }
      }
      return true
    },
    fixString:function(){
      var string=this.selectedSearchedSpell
      if(string){
        for(var i=0;i<string.length;i++){
        if(string[i]==" ")string[i]="_"
      }
      return string;
      }
      
    }
    
  },
  computed:{
    Bonos:function(){
      return [this.getBono(this.allStats.Strength),this.getBono(this.allStats.Dexterity),this.getBono(this.allStats.Constitution),this.getBono(this.allStats.Intelligence),this.getBono(this.allStats.Wisdom),this.getBono(this.allStats.Charisma)]
    },
    profi:function(){
        switch(true){
          case (this.lvl<5):return 2;
          case (this.lvl<9):return 3;
          case (this.lvl<13):return 4;
          case (this.lvl<17):return 5;
          case (this.lvl<=20):return 6;
      }
        return "selecciona nivel"
    },
    featuresFiltered:function(){
      var array=[];
      var feat=this.features;
      Object.keys(feat).forEach((el)=>{          
        if(parseInt(el)<=this.lvl)array.push(feat[el])
      })
      return array
    },
    fichasFiltered:function(){
      var fichasFiltradas=[];
      Object.keys(this.fichas).forEach((el)=>{          
        if(this.fichas[el].a.account==Firebase.auth.currentUser.email){fichasFiltradas.push(this.fichas[el].a)}
      })
      return fichasFiltradas
    },
    spellsFiltered:function(){
      var array=[[],[],[],[],[],[],[],[],[],[]];
      if(this.className!="Select Class"){
        Object.keys(this.data[1].spells).forEach((el)=>{
          if(this.data[1].spells[el].clases){
            if(this.data[1].spells[el].clases.includes($( "#class" ).val())){
              array[this.data[1].spells[el].lvl].push(el)
            }
          }
          
        })
        return array
      }else{
        return "nanai"
      }
    },
    searchedSpells:function(){
      var array=[];
      Object.keys(this.data[1].spells).forEach((el)=>{
        if(this.data[1].spells[el].name){
          if(this.data[1].spells[el].name.toLowerCase().includes(this.searchSpell.toLowerCase()))
          array.push(this.data[1].spells[el])
        }
          
        })
      return array
    },
    passiveWisdom:function(){
      var a=10+this.Bonos[4]
      if(this.skills.includes("Perception"))a+=this.profi
      return a;
    },
    hasSpells:function(){
      if(this.className!="Select Class"){if(this.className.lvlBonus.Spells){return true}else{return false}}else{return false}
    }
  },
  firestore: {
      clase:db.collection("clases"),
      data:db.collection("data"),
      fichas:db.collection("fichas")
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../styles/main.css"; 
</style>
