<template>
  <div>
    <div style="background-color:pink; width:10%; height:1000px; float:left;">
      <h4>Menu</h4>
  
        <P><router-link to="page1">Page1</router-link></P>
        <P><router-link to="page2">Page2</router-link></P>
        <P><router-link to="page3">Page3</router-link></P>
        <P><router-link to="page4">Page4</router-link></P>

    </div>
    <div style="float:left; height:300px; width:90%; background-color:green"></div>
  </div>

</template>

<script>
export default {
  name:"BodyTop"
}
</script>

<style scoped>
  
</style>
