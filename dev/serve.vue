<script>
import Vue from 'vue';
import IeClockPicker from '@/ie-clock-picker.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    IeClockPicker
  }
});
</script>

<template>
  <div id="app">
    <ie-clock-picker />
  </div>
</template>
