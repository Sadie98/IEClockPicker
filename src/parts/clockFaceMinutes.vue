<template>
  <div class="iec-clock-minutes" >
    <div
        v-for="minuteCoordinates in minutesCoordinates"
        class="iec-clock-minute"
        :class="{'iec-clock-minute--tiny': minuteCoordinates.val === ''}"
        :style="{ top: minuteCoordinates.top, left: minuteCoordinates.left }"
        @click="$emit('selected', minuteCoordinates.val )"
    >
      {{ minuteCoordinates.val }}
    </div>
  </div>
</template>

<script>
import { minutesCoordinates } from "@/constants/minutesCoordinates";

export default {
  name: "clockFaceMinutes",
  data() {
    return {
      minutesCoordinates: minutesCoordinates,
    }
  },
}
</script>

<style scoped>
.iec-clock-minutes {
  height: 200px;
  width: 200px;
  margin: 25px;
  position: relative;
}
.iec-clock-minute {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  color: #3D4044;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  font-size: 12px;
}
.iec-clock-minute--tiny{
  width: 5px;
  height: 5px;
  background-color: #EDE6FE;
}
.iec-clock-minute:hover {
  background-color: #EDE6FE;
  color: white;
}
</style>
