<script setup lang="ts">
import { onMounted, provide, reactive, ref } from 'vue'
import { NMessageProvider } from 'naive-ui'
import PageA from './pages/PageA.vue'
import PageB from './pages/PageB.vue'
import PageC from './pages/PageC.vue'
import PageD from './pages/PageD.vue'
import PageE from './pages/PageE.vue'
import Player from './components/Player.vue'
import { useLoader } from './hooks/useLoader'
import { useAssets } from './hooks/useAssets'

export type ImagesType = {
  you: string
  me: string
  haha: string
  watermelon: string
  sunset: string
}

const { getAsset } = useAssets()
const { preloadImage } = useLoader()

const images = reactive({} as ImagesType)
provide<ImagesType>('images', images)

onMounted(() => {
  preloadImage(getAsset('you.jpeg'), (url) => {
    images.you = url
  })
  preloadImage(getAsset('me.jpeg'), (url) => {
    images.me = url
  })
  preloadImage(getAsset('haha.gif'), (url) => {
    images.haha = url
  })
  preloadImage(getAsset('watermelon.jpg'), (url) => {
    images.watermelon = url
  })
  preloadImage(getAsset('sunset.jpg'), (url) => {
    images.sunset = url
  })
})

const player = ref()
const step = ref(1)

const next = () => {
  if (step.value < 5) step.value++
}

const open = () => {
  next()
  player.value.play()
}

const back = () => {
  step.value = 1
}
</script>

<template>
  <n-message-provider>
    <div class="pages">
      <player ref="player" />
      <page-a v-if="step === 1" class="delay page" @next="open"></page-a>
      <page-b v-if="step === 2" class="delay page" @next="next"></page-b>
      <page-c v-if="step === 3" class="delay page" @next="next"></page-c>
      <page-d v-if="step === 4" class="delay page" @next="next"></page-d>
      <page-e v-if="step === 5" class="delay page" @next="back"></page-e>
    </div>
  </n-message-provider>
</template>

<style>
.pages {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(#1f9ef4, #a1e1ff);
}

.page {
  padding: 5vw;
  overflow: hidden;
}

.text {
  flex: 1;
  color: #f0e2ae;
  font-size: 5vmin;
  margin: 5vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.open {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: move 1s linear;
}

.open svg {
  filter: drop-shadow(10px 10px 20px #fff);
  animation: blink 2s infinite;
}

.delay {
  animation-name: delay-display;
  animation-delay: 0.3s;
  animation-duration: 0.5s;
  animation-fill-mode: backwards;
}

@keyframes delay-display {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes move {
  0% {
    opacity: 0;
    transform: translateY(10vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0vh);
  }
}

@keyframes blink {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>
