<template>
  <div class="snows">
    <span v-for="snow in snows" :style="{ '--i': snow }">
      <n-icon :component="Snow" :size="10" color="#fff"></n-icon>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NIcon } from 'naive-ui'
import { Snow } from '@vicons/ionicons5'

const snows = ref([] as number[])
for (let i = 0; i < 100; i++) {
  snows.value.push(Math.random() * 10)
}
</script>

<style scope>
.snows {
  display: flex;
  justify-content: center;
}

.snows span {
  animation: animate calc(100s / var(--i)) linear infinite;
}

@keyframes animate {
  0% {
    transform: translateY(0) scale(0);
  }
  100% {
    transform: translateY(100vh) scale(5);
  }
}
</style>
