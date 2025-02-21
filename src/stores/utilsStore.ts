import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUtilsStore = defineStore('utils', () => {
  const utils = reactive({ preferredMode: 'dark' })

  const togglePreferredMode = () => {
    utils.preferredMode = utils.preferredMode === 'dark' ? 'light' : 'dark'
  }

  return { utils, togglePreferredMode }
})
