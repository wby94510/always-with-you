<template>
  <div id="box">
    <audio hidden ref="player" controls :src="getAsset('bgm-with.mp4')"></audio>
    <img class="icon" :src="getAsset('bgm-icon.svg')" :style="{ '--play': isPlay ? 'rotate' : '' }" @click="switchPlay" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAssets } from '../hooks/useAssets'
const { getAsset } = useAssets()

const player = ref()
const isPlay = ref(false)

const switchPlay = () => (isPlay.value ? pause() : play())

const play = () => {
  player.value.play()
  isPlay.value = true
}

const pause = () => {
  player.value.pause()
  isPlay.value = false
}

defineExpose({ play })
</script>

<style scope>
#box {
  position: fixed;
  float: right;
  top: 2vmin;
  right: 2vmin;
  width: 10vmin;
  height: 10vmin;
  border-radius: 50%;
  background-image: linear-gradient(#6eaad3, #d1edf9);
}

.icon {
  width: 10vmin;
  height: 10vmin;
  padding: 2vmin;
  cursor: pointer;
  animation: var(--play) 5s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
