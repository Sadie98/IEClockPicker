<template>
  <div class="ie-clock-picker">
    <time-input
        placeholder="Enter the name"
        @showClockModal="showClockModal"
    />
    <clock-modal
        :isShown="isShownClockModal"
        @close="hideClockModal"
        @save="hideClockModal"
    />
  </div>
</template>

<script>

import TimeInput from "@/parts/timeInput";
import ClockModal from "@/parts/clockModal";

export default {
  name: 'IeClockPicker',
  components: {ClockModal, TimeInput},

  data() {
    return {
      isShownClockModal: false,
    }
  },

  computed: {},
  methods: {
    showClockModal() {
      this.isShownClockModal = true;
    },
    hideClockModal() {
      this.isShownClockModal = false;
    }
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./fonts/Roboto-Regular.ttf) format("truetype");
}

* {
  font-family: Roboto;
}

.ie-clock-picker p {
  margin: 0 0 1em;
}
</style>
