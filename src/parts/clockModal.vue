<template>
  <div class="iec-clock-modal" v-if="isShown">
    <div class="iec-clock-modal--overlay">
      <div class="iec-clock-modal--window">
        <div class="iec-clock-modal--result"> 11:20 </div>
        <clock-face-hours/>
        <div class="iec-clock-modal--buttons">
          <div class="iec-clock-modal--button" @click="$emit('close')">CANCEL</div>
          <div class="iec-clock-modal--button" @click="$emit('save')">SAVE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClockFaceHours from "@/parts/clockFaceHours";
export default {
  name: "clockModal",
  components: {ClockFaceHours},
  props: {
    isShown: Boolean,
  }
}
</script>

<style scoped>
.iec-clock-modal--overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.iec-clock-modal--window {
  width: 250px;
  height: 400px;
  position: relative;
  transform: translateY(-50%);
  box-sizing: border-box;
  margin: 50vh auto 16px auto;
  background: white;
  border-radius: 4px;
  overflow: hidden;
}

.iec-clock-modal--result{
  height: 100px;
  line-height: 100px;
  background-color: #604CDF;
  color: white;
  font-size: 45px;
  text-align: center;
}

.iec-clock-modal--buttons {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f3f2ff;
  font-size: 15px;
  color: #907eff;
}
.iec-clock-modal--button{
  cursor: pointer;
}
.iec-clock-modal--button:hover{
  color: #5c48d6
}
</style>
