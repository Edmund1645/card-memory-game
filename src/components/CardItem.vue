<template>
  <button
    class="h-20 w-20 md:h-32 md:w-32 rounded-lg border-2 border-gray-500 bg-gray-100/50 text-7xl transition-transform"
    :class="{ 'flip transition-transform': revealed }"
    @click="store.revealCardAndCheckMatches(emoji.id)"
  >
    <span class="transition-opacity" :class="{ 'opacity-0 transition-opacity': !revealed }">{{
      emoji.emoji
    }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import type { EmojiData } from '@/stores/game'

type Props = {
  emoji: EmojiData
}
defineEmits(['click'])
const props = defineProps<Props>()

const store = useGameStore()

const revealed = computed(() => {
  if (store.temporaryRevealedCards.includes(props.emoji.id)) return true
  if (store.matchedCards.includes(props.emoji.id)) return true

  return false
})
</script>

<style scoped></style>
