<template>
  <div :id="load ? 'preloader' : 'preloader-none'"></div>
</template>

<script setup lang="ts">
defineProps<{
  load: boolean
}>()
</script>

<style scoped>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: var(--color-bg);
  background-image: url(../../assets/preloader.svg);
  background-repeat: no-repeat;
  background-position: center;
}

#preloader-none {
  opacity: 0;
}
</style>
