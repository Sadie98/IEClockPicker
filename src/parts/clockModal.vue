<template>
  <div class="iec-new-article-modal" v-if="isShown">
    <div class="iec-new-article-modal--overlay" @click="$emit('closeCLockModal')">
      <div class="iec-new-article-modal--window">
        hi hello
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clockModal",
  props: {
    isShown: Boolean,
  }
}
</script>

<style scoped>
.iec-new-article-modal--overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.iec-new-article-modal--window {
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
</style>
