<template>
  <div class="brand-logo">
    <!-- Geometric monogram mark -->
    <svg
      class="brand-mark"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#007bff" />
          <stop offset="100%" stop-color="#6c63ff" />
        </linearGradient>
      </defs>
      <!-- Rounded square background -->
      <rect width="36" height="36" rx="9" fill="url(#brandGrad)" />
      <!-- Geometric M shape built from lines -->
      <path
        d="M8 25V11L14.5 19L18 14L21.5 19L28 11V25"
        stroke="white"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>

    <!-- Text wordmark -->
    <div class="brand-wordmark">
      <span class="brand-first">muneer</span><span class="brand-dot">.</span><span class="brand-last">ahmed</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'AppLogo' })
</script>

<style scoped>
.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-mark {
  flex-shrink: 0;
  filter: drop-shadow(0 2px 8px rgba(0, 123, 255, 0.4));
  transition: filter 0.3s ease;
}

.brand-logo:hover .brand-mark {
  filter: drop-shadow(0 4px 14px rgba(108, 99, 255, 0.6));
}

.brand-wordmark {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
}

.brand-first {
  color: #ffffff;
}

.brand-dot {
  color: #007bff;
  font-size: 1.3rem;
  font-weight: 700;
}

.brand-last {
  color: rgba(255, 255, 255, 0.75);
}
</style>
