<template>
  <div id="app1">
    <button @click="showLoading != showLoading">点击</button>
    <!-- <tx-loading v-if="showLoading"></tx-loading> -->
    <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
  </div>
</template>

<script>
import TxLoading from './lib/tx-vue-loading'
import Lottie from 'vue-lottie' 
import * as animationData from './assets/animation-w800-h800.json'
export default {
  name: 'app1',
  data () {
    return {
      showLoading:true,
      defaultOptions: animationData,
      anim:{}
    }
  },
  components:{
    TxLoading: TxLoading,
    Lottie,
  },
  methods: {
      handleAnimation(anim) {
          this.anim =anim;
        }
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
