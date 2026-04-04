<template>
  <div style="padding-bottom: 40px">
    <h1 class="project-heading">Days I <strong class="blue">Code</strong></h1>

    <div v-if="loading" class="github-loading">
      <div class="github-skeleton"></div>
      <p class="github-caption">Loading GitHub contributions...</p>
    </div>

    <div v-else-if="error" class="github-error">
      <p>Could not load GitHub contributions. View on
        <a href="https://github.com/muneer-ahmed-khan" target="_blank" rel="noreferrer" class="github-link">GitHub</a>.
      </p>
    </div>

    <template v-else-if="calendarData.length > 0">
      <CalendarHeatmap
        :values="calendarData"
        :end-date="new Date()"
        :range="365"
        :max="heatmapMax"
        :range-color="['#0a1a20', '#0d9488', '#2dd4bf', '#5eead4', '#99f6e4']"
        :dark-mode="true"
        :round="2"
        style="border-radius: 8px"
      />
      <p class="github-legend">
        Last 365 days · GitHub: <a href="https://github.com/muneer-ahmed-khan" target="_blank" rel="noreferrer" class="github-link">muneer-ahmed-khan</a>
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

export default defineComponent({
  name: 'GitHub',
  components: { CalendarHeatmap },
  setup() {
    const calendarData = ref<{ date: string; count: number }[]>([])
    const loading = ref(true)
    const error = ref(false)
    const heatmapMax = computed(() => {
      if (!calendarData.value.length) return 10
      return Math.max(...calendarData.value.map(d => d.count)) + 1
    })

    const fetchContributions = async () => {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/muneer-ahmed-khan?y=last'
        )
        if (!response.ok) throw new Error('API error')
        const data = await response.json()

        if (data.contributions && Array.isArray(data.contributions)) {
          calendarData.value = data.contributions
            .filter((entry: { date: string; count: number }) => entry.count > 0)
            .map((entry: { date: string; count: number }) => ({
              date: entry.date,
              count: entry.count
            }))
        } else {
          throw new Error('Invalid data')
        }
      } catch {
        error.value = true
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchContributions)

    return { calendarData, loading, error, heatmapMax }
  }
})
</script>

<style scoped>
.blue {
  color: var(--color-primary);
}

.github-link {
  color: var(--color-primary);
  text-decoration: none;
}

.github-link:hover {
  color: var(--color-accent);
}

.github-loading {
  padding: 40px 0;
  text-align: center;
}

.github-skeleton {
  height: 130px;
  background: linear-gradient(90deg, var(--color-surface) 25%, var(--color-surface-2) 50%, var(--color-surface) 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.github-error {
  text-align: center;
  padding: 30px;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.github-caption {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: 12px;
}

.github-legend {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: 12px;
  text-align: right;
}
</style>
