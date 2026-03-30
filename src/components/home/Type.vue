<template>
  <div>
    <span class="Typewriter__wrapper">{{ currentString }}</span>
    <span class="Typewriter__cursor">|</span>
  </div>
</template>

<script>
export default {
  name: 'TypewriterComponent',

  data() {
    return {
      strings: [
        'Full-Stack Developer',
        'SaaS Builder',
        'Vue & React Engineer',
        'Node.js / Go Developer',
        'Freelancer on Upwork',
        'AI-powered Dev Workflows',
        'Open Source Contributor'
      ],
      currentString: '', // Holds the current string being typed
      stringIndex: 0, // Index to track which string is being typed
      charIndex: 0, // Index to track the character in the current string
      isTyping: true, // Flag to determine if we are typing or deleting
      delay: 100, // Delay between typing each character
      deleteSpeed: 100 // Speed of deleting characters
    }
  },

  methods: {
    type() {
      const currentText = this.strings[this.stringIndex]

      if (this.isTyping) {
        // Typing mode: Add characters one by one
        if (this.charIndex < currentText.length) {
          this.currentString += currentText.charAt(this.charIndex)
          this.charIndex++
          setTimeout(this.type, this.delay)
        } else {
          // After typing the full string, switch to deleting mode
          setTimeout(() => {
            this.isTyping = false
            this.type()
          }, 1000) // Pause before starting to delete
        }
      } else {
        // Deleting mode: Remove characters one by one
        if (this.charIndex > 0) {
          this.currentString = currentText.substring(0, this.charIndex - 1)
          this.charIndex--
          setTimeout(this.type, this.deleteSpeed)
        } else {
          // After deleting the string, move to the next string
          this.isTyping = true
          this.stringIndex = (this.stringIndex + 1) % this.strings.length // Cycle through the strings
          setTimeout(this.type, 500) // Pause before typing the next string
        }
      }
    }
  },

  mounted() {
    this.type() // Start the typewriter effect when the component is mounted
  }
}
</script>

<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.typewriter-cursor {
  -webkit-animation: Typewriter-cursor 1s infinite;
  animation: Typewriter-cursor 1s infinite;
  margin-left: 1px;
}
@-webkit-keyframes Typewriter-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes Typewriter-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
