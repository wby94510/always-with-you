<template>
  <div class="page-e" :style="{ '--bgUrl': `url(${images?.sunset})` }">
    <div class="text">
      <span style="font-size: 10vmin">我想你</span>
      <span style="font-size: 15vmin">晚风微起</span>
      <span style="font-size: 12vmin">斗转星移</span>
    </div>
    <div class="open">
      <n-icon :size="150" color="#edd88a" :component="InfiniteOutline" @click="next" />
      <img :src="images?.me" style="width: 50px; border-radius: 50%" @click="tickle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, inject } from 'vue'
import { ImagesType } from '../App.vue'
import { NIcon, useMessage } from 'naive-ui'
import { LeafOutline, InfiniteOutline } from '@vicons/ionicons5'

const message = useMessage()
const images = inject<ImagesType>('images')

const emits = defineEmits(['next'])

const next = () => {
  emits('next')
}

const tickle = () => {
  message.warning('你拍了拍我并说我想你', {
    icon: () => h(NIcon, null, { default: () => h(LeafOutline) }),
  })
}
</script>

<style scope>
.page-e {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%), var(--bgUrl);
}
</style>
