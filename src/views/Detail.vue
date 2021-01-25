<template>
<div class="Detail bg-light col-12 border border-dark rounded">
  <h1 class="m-3">Dispatch Details</h1>
  <div class="container-fluid">
    <div class="row mb-4">
      <Map :coords="coords" class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" />
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-auto">
        <ul class="shadow list-group list-group-flush">
          <li 
            v-for="(property, index) in Object.keys(call)" 
            :key="index"
            class="list-group-item lead"
          >
            {{ formatPropString(property)}}: {{ call[property] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
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
    methods: {
      formatPropString(string) {
        string = string.replace(/_/g, " ").replace(/(?: |\b)(\w)/g, (letter) => {
          return letter.toUpperCase()
        }).trim()
        return string;
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
    .shadow {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    }
}

.Detail .list {
  border-radius: 0.50rem !important;
}
</style>