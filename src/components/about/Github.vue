<template>
  <div style="padding-bottom: 40px">
    <h1 class="project-heading">Days I <strong class="blue">Code</strong></h1>

    <div v-if="loading" class="github-loading">
      <div class="github-skeleton"></div>
      <p style="color: #64748b; font-size: 0.9rem; margin-top: 12px">Loading GitHub contributions...</p>
    </div>

    <div v-else-if="error" class="github-error">
      <p>Could not load GitHub contributions. View on
        <a href="https://github.com/muneer-ahmed-khan" target="_blank" rel="noreferrer" style="color: #007bff">GitHub</a>.
      </p>
    </div>

    <template v-else-if="calendarData.length > 0">
      <CalendarHeatmap
        :values="calendarData"
        :end-date="new Date()"
        :range="365"
        :max="10"
        :range-color="['#1e2235', '#1e3a5f', '#1d4ed8', '#2563eb', '#60a5fa']"
        :round="2"
        style="border-radius: 8px; overflow: hidden"
      />
      <p style="color: #64748b; font-size: 0.8rem; margin-top: 12px; text-align: right">
        Last 365 days · GitHub: <a href="https://github.com/muneer-ahmed-khan" target="_blank" rel="noreferrer" style="color: #007bff">muneer-ahmed-khan</a>
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

export default defineComponent({
  name: 'GitHub',
  components: { CalendarHeatmap },
  setup() {
    const calendarData = ref<{ date: string; count: number }[]>([])
    const loading = ref(true)
    const error = ref(false)

    const fetchContributions = async () => {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/muneer-ahmed-khan?y=last'
        )
        if (!response.ok) throw new Error('API error')
        const data = await response.json()

        if (data.contributions && Array.isArray(data.contributions)) {
          calendarData.value = data.contributions.map((entry: { date: string; count: number }) => ({
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

    return { calendarData, loading, error }
  }
})
</script>

<style scoped>
.blue {
  color: #6c63ff;
}

.github-loading {
  padding: 40px 0;
  text-align: center;
}

.github-skeleton {
  height: 130px;
  background: linear-gradient(90deg, #1e2235 25%, #252a40 50%, #1e2235 75%);
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
  color: #64748b;
  background: rgba(24, 26, 39, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(108, 99, 255, 0.15);
}
</style>
