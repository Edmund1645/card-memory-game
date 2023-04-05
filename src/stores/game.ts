import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import randomEmojis from '@/util/random-emojis'

import { useDifficultyStore } from './difficulty'
import type { Difficulty } from './difficulty'

export type EmojiData = { id: string; emoji: string }

const emojicount: Record<Difficulty, number> = {
  easy: 3,
  medium: 4,
  hard: 5
}

export const useGameStore = defineStore('game', () => {
  const difficultyStore = useDifficultyStore()

  const emojis = ref<string[]>([])
  const temporaryRevealedCards = ref<string[]>([])
  const matchedCards = ref<string[]>([])

  const emojiList = computed((): EmojiData[] => {
    // double each emojis, flatten the array and then shuffle the elements
    return emojis.value
      .map((emoji) => [
        { id: uuidv4(), emoji },
        { id: uuidv4(), emoji }
      ])
      .flat()
      .sort(() => Math.random() - Math.random())
  })

  function generateRandomEmojis() {
    const generatedEmojis = randomEmojis.random(emojicount[difficultyStore.difficulty])
    emojis.value = generatedEmojis
  }
  function revealCardAndCheckMatches(id: string) {
    if (temporaryRevealedCards.value.length === 0) {
      temporaryRevealedCards.value.push(id)
      return
    }

    const previousEmoji = emojiList.value.find(
      (emoji) => emoji.id === temporaryRevealedCards.value[0]
    ) as EmojiData
    const newEmoji = emojiList.value.find((emoji) => emoji.id === id) as EmojiData

    if (previousEmoji.emoji === newEmoji.emoji) {
      matchedCards.value.push(previousEmoji.id, newEmoji.id)
      temporaryRevealedCards.value = []
    } else {
      //  reveal second card for it then close both
      temporaryRevealedCards.value.push(id)
      setTimeout(() => (temporaryRevealedCards.value = []), 500)
    }
  }
  function $reset() {
    matchedCards.value = []
    temporaryRevealedCards.value = []
    generateRandomEmojis()
  }

  return {
    $reset,
    emojiList,
    generateRandomEmojis,
    matchedCards,
    temporaryRevealedCards,
    revealCardAndCheckMatches
  }
})
