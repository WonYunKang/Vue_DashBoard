<template>
  <div id="app">
      <Navs/>
      <BodyTop/>
      <BodyBottom/>
    <router-view/>
  
  
  </div>
</template>

<script>
import Navs from '@/components/Navs'
import BodyTop from '@/components/BodyTop'
import BodyBottom from '@/components/BodyBottom'
export default {
  name: 'App',
  components:{
    Navs:Navs,
    BodyTop:BodyTop,
    BodyBottom:BodyBottom
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
</style>
