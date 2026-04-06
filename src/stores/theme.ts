import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true)

  const applyTheme = (dark: boolean) => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    isDark.value = dark
  }

  const toggle = () => {
    applyTheme(!isDark.value)
  }

  const init = () => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    applyTheme(dark)
  }

  return { isDark, toggle, init }
})
