(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],h=0,f=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0a51":function(t,e,a){},"0aca":function(t,e,a){"use strict";a("6dd6")},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"EventBus",(function(){return H}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Cabecera"),a("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("notifications",{attrs:{group:"home",position:"top center",height:"700"}}),a("p",{staticClass:"Title",on:{click:function(e){return t.goTo("enter")}}},[a("img",{staticClass:"Logo",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/roll100.appspot.com/o/dice.png?alt=media&token=ff89caa5-8deb-4da9-9fcb-7c59f82fa923"}}),t._v(" Roll100")]),t.user.name?a("p",[t._v("Usuario: "+t._s(t.user.name)+" Email:"+t._s(t.user.email))]):t._e(),a("button",{on:{click:function(e){return t.login()}}},[t._v("Log in")]),a("button",{on:{click:function(e){return t.logout()}}},[t._v("Log Out")])],1)},o=[],l=(a("b0c0"),a("159b"),a("260b")),c=(a("e71f"),a("ea7b"),a("588e"),{apiKey:"AIzaSyCsszAx8WirXBYbR5ua9XTLlUjEuEw64Vw",authDomain:"roll100.firebaseapp.com",projectId:"roll100",storageBucket:"roll100.appspot.com",messagingSenderId:"775849556162",appId:"1:775849556162:web:32f9a4bf6d266b0449635b",measurementId:"G-JDL5RKQWXL"}),u=l["a"].initializeApp(c).firestore(),h=(l["a"].storage(),l["a"].firestore);h.Timestamp,h.GeoPoint;u.settings({timestampsInSnapshots:!0});var f,p={auth:l["a"].auth(),login:function(){var t=new l["a"].auth.GoogleAuthProvider;l["a"].auth().signInWithPopup(t).then((function(t){console.log(t)})).catch((function(t){var e=t.code,a=t.message,s=t.email,n=t.credential;console.log(e,a,s,n)}))},logout:function(){l["a"].auth().signOut().then((function(){})).catch((function(t){console.log(t)}))}},v={name:"Cabecera",props:{msg:String},mounted:function(){var t=this;p.auth.onAuthStateChanged((function(e){e?(t.user.data=e,t.user.email=e.email,t.user.name=e.displayName):(t.user.data={},t.user.email=null,t.user.name=null)}))},data:function(){return{user:{email:null,name:null,data:{}},variab:[],marc:0,var:{}}},computed:{},methods:{cosa:function(){u.collection("productos").add({tuprima:"la del pueblo",num:this.marc}),this.marc++},borr:function(){this.variab.length>0&&this.variab.forEach((function(t){u.collection("productos").doc(t.id).delete()}))},login:function(){p.login()&&this.$notify({group:"home",title:"login",text:"Se ha realizado la operación con exito"})},logout:function(){p.logout(),this.$notify({group:"home",title:"logout",text:"Se ha cerrado sesión con exito"})},goTo:function(t){this.$router.push(t).catch((function(){}))}},firestore:{variab:u.collection("productos")},firebase:function(){}},d=v,m=(a("b514"),a("2877")),g=Object(m["a"])(d,i,o,!1,null,"7c9ebe1f",null),b=g.exports,_={name:"App",components:{Cabecera:b},mounted:function(){var t=this;p.auth.onAuthStateChanged((function(e){e?(t.user.loggedIn=!0,t.user.data=e,H.$emit("logged",t.user.loggedIn)):(t.user.loggedIn=!1,t.user.data={},H.$emit("logged",t.user.loggedIn),"/enter"!=t.$router.url&&t.$router.push("/enter").catch((function(){})))}))},data:function(){return{user:{loggedIn:!1,data:{}}}},computed:{username:function(){return this.$route.params.username}}},k=_,y=(a("034f"),Object(m["a"])(k,n,r,!1,null,null,null)),S=y.exports,C=a("8c4f"),x=a("ee98"),w=a.n(x),N=a("0ff2"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hr"),a("notifications",{attrs:{group:"hero",position:"top center",height:"700"}}),t._m(0),a("br"),a("button",{on:{click:function(e){return t.goToChar()}}},[t._v("Create a character")]),a("button",{on:{click:function(e){return t.goToGame()}}},[t._v("Join a game")]),a("br"),a("br"),a("hr"),a("p",[t._v("This site pretends to help new players so that they can play some d&d games with friends without needing to learn everything.")]),a("p",[t._v("Of course, some basic competency will be required but this app can speed things up by a lot. It will also allow users to play using their character sheets.")]),a("p",[t._v("Without further ado, I hope you enjoy yourselves and good luck!")]),a("hr")],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-image"},[a("div",{staticClass:"hero-text"},[a("p",[t._v("ROLL100")])])])}],O={name:"Auth",data:function(){return{marc:0,var:{}}},methods:{goToChar:function(){this.$router.push("char")},goToGame:function(){this.$notify({group:"hero",title:"To be implemented",text:"Aun no se ha implementado"})}},computed:{},firestore:{}},I=O,B=(a("9a3b"),Object(m["a"])(I,P,E,!1,null,"203dca32",null)),$=B.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.featureBoolean?a("div",{staticClass:"featureExplained",attrs:{id:"feature"}},[a("h1",[t._v(t._s(t.featureExplained[0]))]),t._v(" "+t._s(t.featureExplained[1])+" "),a("button",{on:{click:function(e){return t.closeExpla()}}},[t._v("Close")])]):t._e(),a("div",{staticClass:"createChar"},[a("header",{staticClass:"header"},[t._m(0),a("div",{staticClass:"datos"},[a("section",[a("select",{attrs:{name:"class",id:"class"},on:{change:function(e){return t.importClass(e.target.value)}}},[a("option",{attrs:{value:"none"}},[t._v("---")]),a("option",{attrs:{value:"barbarian"}},[t._v("Barbarian")]),a("option",{attrs:{value:"bard"}},[t._v("Bard")]),a("option",{attrs:{value:"cleric"}},[t._v("Cleric")]),a("option",{attrs:{value:"druid"}},[t._v("Druid")]),a("option",{attrs:{value:"fighter"}},[t._v("Fighter")]),a("option",{attrs:{value:"monk"}},[t._v("Monk")]),a("option",{attrs:{value:"paladin"}},[t._v("Paladin")]),a("option",{attrs:{value:"ranger"}},[t._v("Ranger")]),a("option",{attrs:{value:"rogue"}},[t._v("Rogue")]),a("option",{attrs:{value:"sorcerer"}},[t._v("Sorcerer")]),a("option",{attrs:{value:"warlock"}},[t._v("Warlock")]),a("option",{attrs:{value:"wizard"}},[t._v("Wizard")])]),a("label",{attrs:{for:"class"}},[t._v("Class")])]),a("section",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lvl,expression:"lvl"}],attrs:{min:"1",max:"20",id:"lvl",type:"number"},domProps:{value:t.lvl},on:{blur:function(e){return t.checkNumber(t.lvl,1,20)},input:function(e){e.target.composing||(t.lvl=e.target.value)}}}),a("label",{attrs:{for:"lvl"}},[t._v("Lvl")])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])]),a("div",{staticClass:"stats"},[a("br"),a("div",{staticClass:"head"},[a("section",[a("label",{attrs:{for:"wisPer"}},[t._v(" Passive Wisdom Perception: ")]),a("input",{attrs:{id:"wisPer",type:"number",readonly:"",disabled:""},domProps:{value:t.passiveWisdom}})]),a("section",[a("label",{attrs:{for:"hitPoints"}},[t._v(" Hit Points: ")]),a("input",{attrs:{id:"hitPoints",type:"number",placeholder:t.hitPoints}})]),a("section",[a("label",{attrs:{for:"proficiency"}},[t._v("Proficiency Bonus +"+t._s(t.profi))])]),a("section",[a("label",{attrs:{for:"initiative "}},[t._v("Initiative: +/- ")]),a("input",{attrs:{placeholder:"1d20 + dex"},domProps:{value:t.Bonos[1]}})]),t._m(6),t._m(7)]),a("br"),a("div",{staticClass:"statsSide"},[a("div",{staticClass:"stats1"},[a("div",{staticClass:"mainStats"},t._l(t.statString,(function(e,s){return a("div",{key:s},[a("label",{attrs:{for:e}},[t._v(t._s(e))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.allStats[e],expression:"allStats[stat]"}],attrs:{id:"ms",type:"number",min:"1",max:"30"},domProps:{value:t.allStats[e]},on:{blur:function(e){return t.checkALookStat()},input:function(a){a.target.composing||t.$set(t.allStats,e,a.target.value)}}}),a("label",{staticClass:"bono",attrs:{for:"stat"}},[t._v(t._s(t.Bonos[s]))]),a("br")])})),0),a("div",[a("div",{staticClass:"savingThrows"},[a("label",{attrs:{for:""}},[t._v("Standard: "),t._l(t.recSkills,(function(e,s){return a("label",{key:s},[t._v(t._s(e)+" ")])}))],2),a("div",[a("input",{attrs:{type:"checkbox",name:"st",id:"stStr",value:"Strength"},on:{change:function(e){return t.selectOnly(2,e,"st")}}}),a("label",{attrs:{for:"stStr"}},[t._v("Strength")])]),a("div",[a("input",{attrs:{type:"checkbox",name:"st",id:"stDex",value:"Dexterity"},on:{change:function(e){return t.selectOnly(2,e,"st")}}}),a("label",{attrs:{for:"stDex"}},[t._v("Dexterity")])]),a("div",[a("input",{attrs:{type:"checkbox",name:"st",id:"stConsti",value:"Constitution"},on:{change:function(e){return t.selectOnly(2,e,"st")}}}),a("label",{attrs:{for:"stConsti"}},[t._v("Constitution")])]),a("div",[a("input",{attrs:{type:"checkbox",name:"st",id:"stInt",value:"Intelligence"},on:{change:function(e){return t.selectOnly(2,e,"st")}}}),a("label",{attrs:{for:"stInt"}},[t._v("Intelligence")])]),a("div",[a("input",{attrs:{type:"checkbox",name:"st",id:"stWis",value:"Wisdom"},on:{change:function(e){return t.selectOnly(2,e,"st")}}}),a("label",{attrs:{for:"stWis"}},[t._v("Wisdom")])]),a("div",[a("input",{attrs:{type:"checkbox",name:"st",id:"stCha",value:"Charisma"},on:{change:function(e){return t.selectOnly(2,e,"st")}}}),a("label",{attrs:{for:"stCha"}},[t._v("Charisma")])]),a("label",{attrs:{for:""}},[t._v("Saving Throw")])]),a("div",{staticClass:"savingThrows"},[t._l(t.skillString,(function(e,s){return a("div",{key:s},[t.choosableSkills(e)?a("input",{attrs:{type:"checkbox",name:"skill",id:e},domProps:{value:e},on:{click:function(e){return t.checkSkills()},change:function(e){return t.selectOnlyAuto(e,"skill")}}}):t._e(),t.choosableSkills(e)?a("label",{attrs:{for:e}},[t._v(t._s(e))]):t._e()])})),a("label",{attrs:{for:""}},[t._v("Skills: Choose "+t._s(t.maxSkills))])],2)]),a("div",{staticClass:"features"},[a("label",{staticClass:"titl"},[t._v("Features")]),t._l(t.featuresFiltered,(function(e,s){return a("label",{key:s},t._l(e,(function(e,s){return a("label",{key:s,on:{click:function(a){return t.explicame(e)}}},[t._v(t._s(e)),a("br")])})),0)}))],2)]),a("div",{staticClass:"writeALot"},t._l(["Personality Traits","Ideals","Bonds","Flaws","Other Proficiency or Languages"],(function(e,s){return a("div",{key:s,staticClass:"customWriteALot"},[a("label",{staticClass:"titl"},[t._v(t._s(e))]),a("br"),a("textarea")])})),0)])])])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nombre"},[a("input",{attrs:{id:"name",type:"text"}}),a("label",{attrs:{for:"name"}},[t._v("Character Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("input",{attrs:{id:"bg",type:"text"}}),a("label",{attrs:{for:"bg"}},[t._v("Background")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("input",{attrs:{id:"player",type:"text"}}),a("label",{attrs:{for:"player"}},[t._v("Player Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("select",{attrs:{name:"race",id:"race"}},[a("option",{attrs:{value:"none"}},[t._v("---")]),a("option",{attrs:{value:"dwarf"}},[t._v("Dwarf")]),a("option",{attrs:{value:"elf"}},[t._v("Elf")]),a("option",{attrs:{value:"halfing"}},[t._v("Halfing")]),a("option",{attrs:{value:"human"}},[t._v("Human")]),a("option",{attrs:{value:"dragonborn"}},[t._v("Dragonborn")]),a("option",{attrs:{value:"gnome"}},[t._v("Gnome")]),a("option",{attrs:{value:"half-elf"}},[t._v("Half-Elf")]),a("option",{attrs:{value:"half-orc"}},[t._v("Half-Orc")]),a("option",{attrs:{value:"tiefling"}},[t._v("Tiefling")])]),a("label",{attrs:{for:"race"}},[t._v("Race")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("select",{attrs:{name:"align",id:"align"}},[a("option",{attrs:{value:"unaligned"}},[t._v("Unaligned")]),a("option",{attrs:{value:"lawfulgood"}},[t._v("Lawful Good")]),a("option",{attrs:{value:"neutralgood"}},[t._v("Neutral Good")]),a("option",{attrs:{value:"chaoticgood"}},[t._v("Chaotic Good")]),a("option",{attrs:{value:"lawfulneutral"}},[t._v("Lawful Neutral")]),a("option",{attrs:{value:"trueneutral"}},[t._v("True Neutral")]),a("option",{attrs:{value:"chaoticneutral"}},[t._v("Chaotic Neutral")]),a("option",{attrs:{value:"lawfulevil"}},[t._v("Lawful Evil")]),a("option",{attrs:{value:"neutralevil"}},[t._v("Neutral Evil")]),a("option",{attrs:{value:"chaoticevil"}},[t._v("Chaotic Evil")])]),a("label",{attrs:{for:"align"}},[t._v("Alignement")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("input",{attrs:{id:"exp",type:"number",min:"0"}}),a("label",{attrs:{for:"exp"}},[t._v("Experience Points")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("label",{attrs:{for:"initiative "}},[t._v("Speed:{{}}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("label",{attrs:{for:"initiative "}},[t._v("CA:{{}}")])])}],j=(a("caad"),a("b64b"),a("2532"),a("1157")),L=a.n(j),W={name:"Auth",props:{},data:function(){return{statString:["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"],skillString:["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stealth","Survival"],variab:[],marc:0,var:{},features:"",featureExplained:["name","ex"],featureBoolean:!1,allStats:{Strength:1,Dexterity:1,Constitution:1,Intelligence:1,Wisdom:1,Charisma:1},lvl:1,skills:[],recSkills:["None",""],maxSkills:0,clase:[],className:"Select Class",data:{},hitPoints:""}},methods:{getBono:function(t){switch(!0){case 1==t:return-5;case t<=3:return-4;case t<=5:return-3;case t<=7:return-2;case t<=9:return-1;case t<=11:return 0;case t<=13:return 1;case t<=15:return 2;case t<=17:return 3;case t<=19:return 4;case t<=21:return 5;case t<=23:return 6;case t<=25:return 7;case t<=27:return 8;case t<=29:return 9;case 30==t:return 10;default:return"X"}},receiveStat:function(t){if(t)return"dexBono"},selectOnly:function(t,e,a){L()("input[name="+a+"]:checked").length>t&&L()(e.path[0]).prop("checked",!1)},selectOnlyAuto:function(t,e){var a=0;"Select Class"!=this.className&&(a=this.className.proficiency.skillsNumber),L()("input[name="+e+"]:checked").length>a&&L()(t.path[0]).prop("checked",!1)},checkALookStat:function(){var t=event.target.value;t>30?event.target.value=30:t<1&&(event.target.value=1)},checkSkills:function(){this.skills=[];for(var t=L()("input[name='skill']"),e=0;e<t.length;e++)L()(t[e]).prop("checked")&&this.skills.length<this.maxSkills&&t[e].value!=event.target.value&&this.skills.push(t[e].value);L()(event.target).prop("checked")&&this.skills.length<this.maxSkills&&this.skills.push(event.target.value)},importClass:function(t){switch(t){case"barbarian":this.className=this.clase[0].barbarian;break;case"bard":this.className=this.clase[1].bard;break;case"cleric":this.className=this.clase[2].cleric;break;case"druid":this.className=this.clase[3].druid;break;case"fighter":this.className=this.clase[4].fighter;break;case"monk":this.className=this.clase[5].monk;break;case"paladin":this.className=this.clase[6].paladin;break;case"ranger":this.className=this.clase[7].ranger;break;case"rogue":this.className=this.clase[8].rogue;break;case"sorcerer":this.className=this.clase[9].sorcerer;break;case"warlock":this.className=this.clase[10].warlock;break;case"wizard":this.className=this.clase[11].wizard;break;default:this.className="Select Class"}"Select Class"!=this.className?(this.recSkills=this.className.proficiency.savingThrows,this.maxSkills=this.className.proficiency.skillsNumber,this.features=this.className.lvlBonus.features,this.hitPoints=parseInt(this.className.hitPoints)+" + "+this.className.hitMod):(this.recSkills=["None",""],this.maxSkills=0,this.features="",this.hitPoints="Select Class")},explicame:function(t){var e=this,a=this.data[0].features;Object.keys(a).forEach((function(s){t==s&&(e.featureExplained=[s,a[s]],e.featureBoolean=!0)}))},closeExpla:function(){this.featureBoolean=!1},checkNumber:function(t,e,a){t>a&&(this.lvl=a),t<e&&(this.lvl=e)},choosableSkills:function(t){return"Select Class"==this.className||!(!this.className.proficiency.skills.includes(t)&&"all"!=this.className.proficiency.skills[0])}},computed:{Bonos:function(){return[this.getBono(this.allStats.Strength),this.getBono(this.allStats.Dexterity),this.getBono(this.allStats.Constitution),this.getBono(this.allStats.Intelligence),this.getBono(this.allStats.Wisdom),this.getBono(this.allStats.Charisma)]},profi:function(){switch(!0){case this.lvl<5:return 2;case this.lvl<9:return 3;case this.lvl<13:return 4;case this.lvl<17:return 5;case this.lvl<=20:return 6}return"selecciona nivel"},featuresFiltered:function(){var t=this,e=[],a=this.features;return Object.keys(a).forEach((function(s){parseInt(s)<=t.lvl&&e.push(a[s])})),e},spellsFiltered:function(){var t=[];return Object.keys(this.data[1].spells).forEach((function(e){t.push(e)})),console.log(t),t},passiveWisdom:function(){var t=10+this.Bonos[4];return this.skills.includes("Perception")&&(t+=this.profi),t},hasSpells:function(){return"Select Class"!=this.className&&!!this.className.lvlBonus.Spells}},firestore:{clase:u.collection("clases"),data:u.collection("data")}},D=W,G=(a("0aca"),Object(m["a"])(D,A,T,!1,null,"a6a6a3a4",null)),z=G.exports,H=new s["default"];H.$on("logged",(function(t){S&&(f=t)})),s["default"].config.productionTip=!1,s["default"].use(N["a"]),s["default"].use(C["a"]),s["default"].config.productionTip=!1,s["default"].use(w.a);var R=[{path:"/",component:$,props:!0},{path:"/enter",component:$,props:!0},{path:"/char",component:z,props:!0}],M=new C["a"]({routes:R});M.afterEach((function(t,e,a){f||M.push("enter").catch((function(){}))}));e["default"]=M;new s["default"]({render:function(t){return t(S)},router:M}).$mount("#app")},"6dd6":function(t,e,a){},"85ec":function(t,e,a){},"9a3b":function(t,e,a){"use strict";a("af59")},af59:function(t,e,a){},b514:function(t,e,a){"use strict";a("0a51")}});
//# sourceMappingURL=app.1b9d39ef.js.map