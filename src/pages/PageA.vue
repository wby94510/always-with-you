<template>
  <div class="page-a">
    <div class="text">
      <span style="font-size: 10vmin">遇见你</span>
      <span style="font-size: 15vmin">{{ withDate.day }} 天</span>
      <span style="font-size: 12vmin">{{ withDate.hour }} : {{ withDate.min }} : {{ withDate.sec }}</span>
    </div>
    <div class="open">
      <n-icon :size="150" color="#edd88a" :component="FingerPrintOutline" @click="next" />
      <img :src="images?.you" style="width: 50px; border-radius: 50%" @click="tickle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon, useMessage } from 'naive-ui'
import { FingerPrintOutline, Sparkles } from '@vicons/ionicons5'
import { h, inject, onMounted, reactive } from 'vue'
import { ImagesType } from '../App.vue'

onMounted(() => {
  updateTime()
})

const message = useMessage()
const images = inject<ImagesType>('images')

const withDate = reactive({ day: 99, hour: 99, min: 99, sec: 99 })

const updateTime = () => {
  // 2024-3-23 23:12, Date 月从0开始
  const startDate = new Date(2024, 2, 23, 23, 12).getTime()
  setInterval(() => {
    const difftime = (Date.now() - startDate) / 1000
    withDate.day = parseInt((difftime / 86400).toString())
    withDate.hour = parseInt((difftime / 3600).toString()) - 24 * withDate.day
    withDate.min = parseInt(((difftime % 3600) / 60).toString())
    withDate.sec = parseInt((difftime % 60).toString())
  }, 1000)
}

const emits = defineEmits(['next'])

const next = () => {
  emits('next')
}

const tickle = () => {
  message.warning('你拍了拍自己并说我好美', {
    icon: () => h(NIcon, null, { default: () => h(Sparkles) }),
  })
}
</script>

<style scope>
.page-a {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#339af0, #d0ebff);
}
</style>
