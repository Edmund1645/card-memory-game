<script setup lang="ts">
import CardGrid from '@/components/CardGrid.vue'
import DifficultyPicker from './components/DifficultyPicker.vue'
</script>

<template>
  <main class="min-h-screen bg-gradient-to-tl from-cyan-500 to-blue-500 relative">
    <div class="max-w-xl mx-auto pt-20 flex flex-col gap-y-6 justify-center">
      <DifficultyPicker />
      <CardGrid />
    </div>
  </main>
</template>

<style scoped></style>
