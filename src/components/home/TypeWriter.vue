<template>
  <div>
    <span class="Typewriter__wrapper">{{ currentString }}</span>
    <span class="Typewriter__cursor">|</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const strings = [
  'Full-Stack Developer',
  'SaaS Builder',
  'Vue & React Engineer',
  'Node.js / Python Developer',
  'Freelancer on Upwork',
  'AI-powered Dev Workflows',
  'Open Source Contributor'
]

const currentString = ref('')
const stringIndex = ref(0)
const charIndex = ref(0)
const isTyping = ref(true)
const delay = 100
const deleteSpeed = 100

let typingTimer: ReturnType<typeof setTimeout> | null = null

const type = () => {
  const currentText = strings[stringIndex.value]

  if (isTyping.value) {
    if (charIndex.value < currentText.length) {
      currentString.value += currentText.charAt(charIndex.value)
      charIndex.value++
      typingTimer = setTimeout(type, delay)
    } else {
      typingTimer = setTimeout(() => {
        isTyping.value = false
        type()
      }, 1000)
    }
  } else {
    if (charIndex.value > 0) {
      currentString.value = currentText.substring(0, charIndex.value - 1)
      charIndex.value--
      typingTimer = setTimeout(type, deleteSpeed)
    } else {
      isTyping.value = true
      stringIndex.value = (stringIndex.value + 1) % strings.length
      typingTimer = setTimeout(type, 500)
    }
  }
}

onMounted(() => {
  type()
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
})
</script>

<style scoped>
/* Cursor blink — class matches .Typewriter__cursor in template and main.css */
.Typewriter__cursor {
  animation: Typewriter-cursor 1s infinite;
  margin-left: 1px;
}

@keyframes Typewriter-cursor {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
