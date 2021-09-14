<template>
  <label class="iec-label">
    <p class="iec-input--title">{{ title }}</p>

    <input
        class="iec-input"
        :value="value"
        :placeholder="placeholder"
        @click="$emit('showClockModal')"
        @input="$emit('input', $event.target.value)"
        @keydown.enter="$emit('enter', $event.target.value)"
    >

  </label>
</template>

<script>
export default {
  name: "timeInput",
  props: {
    placeholder: String,
    title: String,
    value: String,
  }
}
</script>

<style scoped>
.iec-label {
  width: 100%;
}
.iec-input {
  width: 270px;
  height: 35px;
  background: #efefef;
  color: #808081;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 15px;
  transition: 0.5s;
}

.iec-input:active,
.iec-input:focus {
   outline: none;
   border: 1px solid #604CDF;
   background: #EDE6FE;
 }

.iec-input--title {
   font-size: 12px;
   color: #3D4044;
   margin-bottom: 5px;
 }

</style>
