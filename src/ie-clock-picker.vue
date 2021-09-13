<template>
  <div class="ie-clock-picker">
    <time-input
        placeholder="Enter the name"
        @showClockModal="showClockModal"
    />
    <clock-modal
        :isShown="isShownClockModal"
        @closeCLockModal="hideClockModal"
    />
  </div>
</template>

<script>

import TimeInput from "@/parts/timeInput";
import ClockModal from "@/parts/clockModal";
export default /*#__PURE__*/{
  name: 'IeClockPicker',
  components: {ClockModal, TimeInput },

  data() {
    return {
      isShownClockModal: false,
    }
  },

  computed: {

  },
  methods: {
    showClockModal(){
      this.isShownClockModal = true;
    },
    hideClockModal(){
      this.isShownClockModal = false;
    }
  },
};
</script>



<style scoped>
  .ie-clock-picker p {
    margin: 0 0 1em;
  }
</style>
