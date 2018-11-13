<template>
  <div id="app">
    <div class="left">
      <div class="left-top"></div>
      <div>
        <tab></tab>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <poo></poo>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import Poo from './components/head/head'
export default {
  components: {
    Tab,
    Poo
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
html{
  width:100%;
  height:100%;
}
body,#app{
  width:100%;
  background:greenyellow;
}
.right{
  flex-grow:4;
}
.left{
  width:200px;
  background: #001529;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-content: stretch;
  display:flex;
  background: #F0F2F5;
}
  .right-top{
    height:56px;
    width:100%;
    background: red;
    overflow: hidden;
  }
  .left-top{
    height:56px;
    width:100%;
    background: #002140;
    overflow: hidden;
  }
</style>
