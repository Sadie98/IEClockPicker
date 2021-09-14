<template>
  <div class="iec-clock-hours" >
    <div
      v-for="hourCoordinates in hoursCoordinates"
      class="iec-clock-hour"
      :style="{ top: hourCoordinates.top, left: hourCoordinates.left }"
    >
      {{ hourCoordinates.val }}
    </div>
  </div>
</template>

<script>
import { hoursCoordinates } from "@/constants/hoursCoordinates";

export default {
  name: "clockFaceHours",
  data() {
    return {
      hoursCoordinates: hoursCoordinates,
    }
  },
  mounted() {
    console.log(hoursCoordinates);
  }
}
</script>

<style scoped>
.iec-clock-hours {
  height: 200px;
  width: 200px;
  margin: 25px;
  position: relative;
}
.iec-clock-hour {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  background-color: bisque;
  text-align: center;
  line-height: 25px;
}
</style>
