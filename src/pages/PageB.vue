<template>
  <div class="page-b">
    <div class="text">
      <span style="font-size: 10vmin">一见如故</span>
      <img width="100" style="border-radius: 50%" :src="images?.haha" @click="haha" />
      <span style="font-size: 10vmin">“哈哈”x40</span>
      <span style="font-size: 12vmin">“哈哈哈”x6</span>
      <span style="font-size: 15vmin">最爱西瓜</span>
      <img width="120" style="border-radius: 50%" :src="images?.watermelon" @click="lala" />
    </div>
    <div class="open">
      <n-icon :size="150" color="#edd88a" :component="LeafOutline" @click="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon, useMessage } from 'naive-ui'
import { LeafOutline, HappyOutline, HeartOutline } from '@vicons/ionicons5'
import { h, inject } from 'vue'
import { ImagesType } from '../App.vue'

const message = useMessage()
const images = inject<ImagesType>('images')

const emits = defineEmits(['next'])

const next = () => {
  emits('next')
}

const haha = () => {
  message.warning('哈哈哈，忍不了一点～', {
    icon: () => h(NIcon, null, { default: () => h(HappyOutline) }),
  })
}

const lala = () => {
  message.warning('🍉简直我的本命', {
    icon: () => h(NIcon, null, { default: () => h(HeartOutline) }),
  })
}
</script>

<style scope>
.page-b {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#228be6, #74c0fc);
}
</style>
