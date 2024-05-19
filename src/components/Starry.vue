<template>
  <div class="starry-box">
    <div class="layer1" :style="getLayerStyle(1)"></div>
    <div class="layer2" :style="getLayerStyle(2)"></div>
    <div class="layer3" :style="getLayerStyle(3)"></div>
    <div class="layer4" :style="getLayerStyle(4)"></div>
    <div class="layer5" :style="getLayerStyle(5)"></div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue'

const getShadows = (n: number) => {
  let shadows = []
  for (let i = 0; i < n; i++) {
    shadows.push(`${Math.random() * 100}vw ${Math.random() * 100}vh #fff`)
  }
  return shadows.join(',')
}

const getLayerStyle = (n: number) => {
  const size = n / 10
  const duration = 200 / n
  const count = 500 / n
  return {
    position: 'fixed',
    width: size + 'vmin',
    height: size + 'vmin',
    borderRadius: '50%',
    left: 0,
    top: 0,
    background: '#fff',
    boxShadow: getShadows(count),
    animation: `moveUp ${duration}s linear infinite`,
  } as CSSProperties
}
</script>

<style scope>
.layer1::after {
  content: '';
  position: fixed;
  left: 0;
  top: 100vh;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  box-shadow: inherit;
}

.layer2::after {
  content: '';
  position: fixed;
  left: 0;
  top: 100vh;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  box-shadow: inherit;
}

.layer3::after {
  content: '';
  position: fixed;
  left: 0;
  top: 100vh;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  box-shadow: inherit;
}

.layer4::after {
  content: '';
  position: fixed;
  left: 0;
  top: 100vh;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  box-shadow: inherit;
}

.layer5::after {
  content: '';
  position: fixed;
  left: 0;
  top: 100vh;
  border-radius: inherit;
  width: inherit;
  height: inherit;
  box-shadow: inherit;
}

@keyframes moveUp {
  to {
    transform: translateY(-100vh);
  }
}
</style>
