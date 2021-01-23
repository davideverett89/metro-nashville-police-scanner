<template>
<div class="Map col-12 mx-auto">
    <GmapMap
        class="Map shadow col-12 mx-auto border border-dark rounded"
        :center="coords"
        :zoom="13"
        map-type-id="terrain"
        style="width: 1000px; height: 500px"
    >
        <GmapMarker
            :position="google && new google.maps.LatLng(coords.lat, coords.lng)"
            :clickable="true"
            :draggable="true"
        />
    </GmapMap>
</div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
    name: 'Map',
    props: {
        coords: {
            type: Object,
            default() {
                return {
                    lat: 0,
                    lng: 0
                }
            }
        }
    },
    computed: {
    google: gmapApi
  }
}
</script>

<style lang="scss" scoped>
.Map {
    display: block;
    overflow: hidden;
    .shadow {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    }
}
</style>