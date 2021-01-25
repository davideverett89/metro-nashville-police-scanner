<template>
  <div class="Home bg-light col-12 border border-dark rounded">
    <h1 class="m-3">Active Calls</h1>
    <Table :data="activeCalls" :handleClick="handleClick">
      <template v-slot:headers>
         <th data-prop="address">Address</th>
         <th data-prop="call_received">Call Received</th>
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
// import { DateTime } from 'luxon';

import Table from '../components/Table';

export default {
    name: 'Home',
    components: {
      Table
    },
    data() {
      return {
        activeCalls: [],
      }
    },
    methods: {
      handleClick(x) {
        alert(x);
      }
    },
    mounted() {
      // console.log(DateTime.fromISO("2021-01-24T14:32:55.000").toString());
      dataManager.getCalls().then(data => this.activeCalls = data);
    }
}
</script>

<style lang="scss" scoped>
.Home {
  display: block;
}
</style>