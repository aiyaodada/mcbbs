<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: 'HarmonyOS';
  src: url('../public/font/HarmonyOS_Sans_SC_Medium.ttf') format('truetype'); /* 相对路径从public目录开始 */
  font-weight: normal;
  font-style: normal;
}
html,body,#app{
  width: 100%;
  height: 100%;
  background: url(public/images/bg.jpg) no-repeat center / cover;
}
*{
  margin: 0;
  padding: 0;
  font-family: 幼圆;
  font-family: 'HarmonyOS',sans-serif;
}
ul>li{
  list-style: none;
}
img{
  display: block;
}
a{
  text-decoration: none;
}
.container{
  width: 1150px;
  margin: 0 auto;
}
.mr-2{
  margin-top: 2rem;
}
.nav_bg{
  background: url(public/images/header/nav_bg.jpg);
}
.box-bg{
  background: rgba(255, 255, 255, 0.8);
}
.text-center{
  text-align: center;
}
.df{
  display: flex;
}
.jcsa{
  justify-content: space-around;
}
.jcsb{
  justify-content: space-between;
}
.fdrr{
  flex-direction: row-reverse;
}
/*垂直居中 父元素和子元素需要高宽*/
.asc{
  -webkit-align-self: center;
  align-self: center;
}
.fww{
  flex-wrap: wrap;
}
/*鼠标划上去变成小手指*/
.cp{
  cursor: pointer;
}
.h100{
  height: 100%;
}
.px-1{
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
