<template>
  <div id="app">
  <Navs/>
  <BodyTop/>
  <body/>
  <router-view/> 
  </div>
</template>

<script>
import Body from '@/components/Body/Body'
import Navs from '@/components/Body/Navs'
import BodyTop from '@/components/Body/BodyTop'
import BodyBottom from '@/components/Body/BodyBottom'


export default {
  name: 'App',
  components:{
    Body:Body,
    Navs:Navs,
    BodyTop:BodyTop,
    BodyBottom:BodyBottom,
  
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
