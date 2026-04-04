<template>
  <div class="container-fluid resume-section">
    <Particle />
    <div style="position: relative; z-index: 1">
      <h1 class="project-heading" style="text-align: center; margin-bottom: 30px">
        My <strong class="blue">Resume</strong>
      </h1>
      <div class="row justify-content-center mb-4">
        <div class="col-auto">
          <a
            :href="pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
            style="display: inline-flex; align-items: center; gap: 6px; min-width: 180px; justify-content: center"
          >
            <font-awesome-icon icon="arrow-down" />
            Download CV
          </a>
        </div>
      </div>

      <div class="resume">
        <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
      </div>

      <div class="row justify-content-center mt-4 mb-4">
        <div class="col-auto">
          <a
            :href="pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
            style="display: inline-flex; align-items: center; gap: 6px; min-width: 180px; justify-content: center"
          >
            <font-awesome-icon icon="arrow-down" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { VuePdf, createLoadingTask } from 'vue3-pdfjs'
import Particle from '@/components/Particles.vue'
import pdf from '@/assets/Muneer-Ahmed-Resume.pdf'

export default defineComponent({
  name: 'ResumeNew',
  components: { Particle, VuePdf },
  setup() {
    const pdfSrc = ref<string>(pdf)
    const numOfPages = ref(0)

    onMounted(() => {
      const loadingTask = createLoadingTask(pdfSrc.value)
      loadingTask.promise.then((doc: { numPages: number }) => {
        numOfPages.value = doc.numPages
      })
    })

    return { pdfSrc, numOfPages, pdf }
  }
})
</script>
