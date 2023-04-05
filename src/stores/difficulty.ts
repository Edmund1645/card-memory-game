import { defineStore } from 'pinia'
import { ref } from 'vue'

const difficultyList = ['easy', 'medium', 'hard'] as const
export type Difficulty = (typeof difficultyList)[number]

export const useDifficultyStore = defineStore('difficulty', () => {
  const difficulty = ref<Difficulty>('easy')

  function setDifficulty(newDifficulty: Difficulty) {
    difficulty.value = newDifficulty
  }

  return {
    difficultyList,
    difficulty,
    setDifficulty
  }
})
