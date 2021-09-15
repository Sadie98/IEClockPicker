<template>
  <div class="ie-clock-picker">
    <time-input
        :placeholder="placeholder"
        @showClockModal="showClockModal"
        :value="valueLocal"
    />
    <clock-modal
        :isShown="isShownClockModal"
        @close="hideClockModal"
        @save="save"
        :value="valueLocal"
    />
  </div>
</template>

<script>

import TimeInput from "@/parts/timeInput";
import ClockModal from "@/parts/clockModal";

export default {
  name: 'IeClockPicker',
  components: {ClockModal, TimeInput},

  props: {
    placeholder: String,
    value: String,
  },

  data() {
    return {
      isShownClockModal: false,
      valueLocal: String,
    }
  },

  created() {
    this.valueLocal = this.value ? this.value : '00:00';
  },

  methods: {
    showClockModal() {
      this.isShownClockModal = true;
    },
    hideClockModal() {
      this.isShownClockModal = false;
    },
    save(val){
      this.valueLocal = val;
      this.hideClockModal();
      console.log('save')
      this.$emit('save', val);
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
