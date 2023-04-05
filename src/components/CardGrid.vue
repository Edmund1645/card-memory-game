<template>
  <div class="inline-grid gap-3 grid-cols-3 justify-items-center">
    <CardItem v-for="emoji in store.emojiList" :emoji="emoji" :key="emoji.id" />
  </div>
  <button class="p-2 text-white font-bold" v-if="showReplayButton" @click="store.$reset()">
    Play again
  </button>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useGameStore } from '@/stores/game'

import CardItem from './CardItem.vue'

const store = useGameStore()

const showReplayButton = computed(() => store.matchedCards.length === store.emojiList.length)

onBeforeMount(() => store.generateRandomEmojis())
</script>

<style scoped></style>
