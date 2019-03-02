<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  overflow: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
}
ul, li {
  list-style: none;
}
input, select, button, input:focus{
  border: none;
  -webkit-appearance: none;
}
button {
  outline: none
}
</style>
