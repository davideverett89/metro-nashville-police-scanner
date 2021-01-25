<template>
  <div class="Home bg-light col-12 border border-dark rounded">
    <div class="col-6 mx-auto d-flex flex-column justify-content-center align-items-center m-1">
      <h1>Active Calls</h1>
      <h6>Last Update: {{ lastUpdate }}</h6>
    </div>
    <Table :data="activeCalls" :handleClick="handleClick">
      <template v-slot:headers>
         <th data-prop="address">Address</th>
         <th data-prop="call_received">Call Received</th>
         <th data-prop="city">Sector</th>
         <th data-prop="incident_type">Incident Type</th>
         <th data-prop="incident_type_code">Incident Code</th>
         <th data-prop="last_updated">Last Update</th>
      </template>
    </Table>
  </div>
</template>

<script>
import dataManager from '../modules/dataManager';
import { DateTime } from 'luxon';

import Table from '../components/Table';

export default {
    name: 'Home',
    components: {
      Table
    },
    data() {
      return {
        activeCalls: [],
        lastUpdate: ''
      }
    },
    methods: {
      handleClick(x) {
        alert(x);
      },
      getData() {
        dataManager.getCalls().then(data => this.activeCalls = data);
        this.lastUpdate = DateTime.local().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
      }
    },
    mounted() {
      this.getData();
      setInterval(() => {
          this.getData();
        }, 180000);
    }
}
</script>

<style lang="scss" scoped>
.Home {
  display: block;
}
</style>