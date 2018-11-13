<template>
  <div id="app">
    <div class="left">
      <div class="left-top"></div>
      <div>
        <tab></tab>
      </div>
    </div>
    <div class="right">
      <div class="right-top"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
export default {
  components: {
    Tab
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body,#app{
  width:100%;
  height:100%;
  background:greenyellow;
}
.right{
  width:80%;
  flex:4;
  height:1000px;
}
.left{
  width:20%;
  flex:1;
  height:100%;
  background: #001529;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display:flex;
  background:pink;
}
  .right-top{
    height:56px;
    width:100%;
    background: red;
  }
  .left-top{
    height:56px;
    width:100%;
    background: #002140;
    overflow: hidden;
  }
</style>
