<template>
  <div id="app">
    <Nav />
    <div class="container-fluid p-xl-5 p-lg-5 p-md-3 px-sm-0 py-sm-3 px-0 py-3">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
