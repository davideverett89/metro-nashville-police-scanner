<template>
  <div class="Home">

  </div>
</template>

<script>
import dataManager from '../modules/dataManager';

export default {
    name: 'Home',
    data() {
      return {
        activeCalls: [],
      }
    },
    mounted() {
      dataManager.get().then(data => this.activeCalls = data);
    }
}
</script>

<style lang="scss" scoped>
.Home {
  display: block;
}
</style>