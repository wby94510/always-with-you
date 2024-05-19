<template>
  <div class="page-d">
    <snow />
    <div class="text">
      <span style="font-size: 15vmin; opacity: 0.6">俯踏雪泥</span>
    </div>
    <div class="open">
      <n-icon :size="150" color="#edd88a" :component="SnowOutline" @click="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { SnowOutline } from '@vicons/ionicons5'
import Snow from '../components/Snow.vue'

const emits = defineEmits(['next'])

const next = () => {
  emits('next')
}
</script>

<style scope>
.page-d {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#4dabf7, #a5d8ff);
}
</style>
