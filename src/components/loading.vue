<template>
  <div class="min-h-screen bg-black text-white flex justify-center items-center text-4xl font-bold">
    <transition name="fade">
      <div v-if="showText">Welcome, {{ username }} 😄</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const showText = ref(false)
const username = ref(localStorage.getItem('username') || 'Guest')
const router = useRouter()

onMounted(() => {
  setTimeout(() => showText.value = true, 500)
  setTimeout(() => router.push('/home'), 3000)
})
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>