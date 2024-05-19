<template>
  <div class="page-c">
    <starry />
    <div class="text">
      <span style="font-size: 15vmin; opacity: 0.6">仰观星河</span>
    </div>
    <div class="open">
      <n-icon :size="150" color="#edd88a" :component="SparklesOutline" @click="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { SparklesOutline } from '@vicons/ionicons5'
import Starry from '../components/Starry.vue'

const emits = defineEmits(['next'])

const next = () => {
  emits('next')
}
</script>

<style scope>
.page-c {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#1864ab, #1c7ed6);
}
</style>
