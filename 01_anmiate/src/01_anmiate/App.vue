<template>
  <div class="app">
    <button @click="changeCmpn">切换</button>

<transition name="dunn" mode="out-in">
<component :is="showhu[showindex]" title="我是标题" :name=name></component>
</transition>
  </div>
</template>

<script>
import home from "./Home.vue";
import about from './About.vue'

export default {
  components:{
    home,
    about
  },

  data(){
return{
  showhu:["home","about"],
  showindex:0
}
  },
  methods:{
    changeCmpn(){

       this.showindex=this.showindex<this.showhu.length-1?this.showindex+=1:this.showindex=0
       console.log(this.showindex)
 

    }
  }

};
</script>

<style scoped>
.app{
  width: 200px;
  margin: 0 auto;
}
.dunn-enter-from,.dunn-leave-to{
  opacity: 0;
  transform: scale(0);
}
.dunn-enter-to,.dunn-leave-from{
 opacity: 1;
 transform: scale(1.2);
}
.dunn-enter-active,.dunn-leave-active{
  transition: all ease 1s;
}
</style>