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
          <stop offset="0%" stop-color="#2dd4bf" />
          <stop offset="100%" stop-color="#fbbf24" />
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

<script setup lang="ts">
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
  filter: drop-shadow(0 2px 8px rgba(45, 212, 191, 0.4));
  transition: filter 0.3s ease;
}

.brand-logo:hover .brand-mark {
  filter: drop-shadow(0 4px 14px rgba(251, 191, 36, 0.5));
}

.brand-wordmark {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-none);
}

.brand-first {
  color: var(--color-text);
}

.brand-dot {
  color: var(--color-primary);
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
}

.brand-last {
  color: var(--color-text-muted);
}
</style>
