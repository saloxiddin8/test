<template>
  <section class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col justify-center items-center text-white text-center space-y-6">
    <h1 class="text-5xl font-bold ">Hey there 👋</h1>

    <input
      v-model="name"
      type="text"
      placeholder="Enter your name"
      class="px-5 py-2 rounded-full text-black focus:outline-none shadow-md"
    />

    <button
      @click="handleHireMe"
      class="bg-yellow-500 text-white px-10 py-3 font-bold rounded-full shadow hover:scale-105 transition"
    >
      Hire Me
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const router = useRouter()

function handleHireMe() {
  if (name.value.trim() !== '') {
    localStorage.setItem('username', name.value)
    router.push('/loading')
  } else {
    alert("Please enter your name 😊")
  }
}
</script>