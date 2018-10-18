<template>
  <div id="app">
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
  import  Tab from './base/Tab'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>


<style>
 *{
   margin: 0;
   padding: 0;
 }
  ul li{list-style: none}
  a {text-decoration: none}
  input, button{
    -webkit-appearance: none;
  }
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
    background: yellow;
  }
</style>
