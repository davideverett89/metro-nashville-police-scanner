<template>
<div class="Detail bg-light col-12 border border-dark rounded">
  <h1>Detail</h1>
  <Map />
</div>
</template>

<script>
import Map from '../components/Map';

import dataManager from '../modules/dataManager';

export default {
    name: 'Detail',
    components: {
      Map
    },
    data() {
      return {
        coords: {}
      }
    },
    props: {
      call: {
        type: Object,
        default() {
          return {
            incident_type_code: '',
            incident_type: '',
            call_received: '',
            last_updated: '',
            address: '',
            city: ''
          }
        }
      }
    },
    mounted() {
      dataManager.getCoordinates(this.call.address).then(response => this.coords = response);
    }
}
</script>

<style lang="scss" scoped>
.Detail {
    display: block;
}
</style>