<template>
  <div class="flex justify-between">
    <p class="text-white">Difficulty</p>
    <select
      name="difficulty"
      id="difficulty"
      :value="difficultyStore.difficulty"
      @change="handleDifficultyChange"
    >
      <option
        v-for="(difficulty, index) in difficultyStore.difficultyList"
        :key="index"
        :value="difficulty"
      >
        {{ difficulty }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useDifficultyStore } from '@/stores/difficulty'
import { useGameStore } from '@/stores/game'
import type { Difficulty } from '@/stores/difficulty'

const difficultyStore = useDifficultyStore()
const gameStore = useGameStore()

const handleDifficultyChange = (event: Event) => {
  const newDifficulty = (event.target as HTMLSelectElement).value

  difficultyStore.setDifficulty(newDifficulty as Difficulty)
  gameStore.$reset()
}
</script>

<style lang="scss" scoped></style>
