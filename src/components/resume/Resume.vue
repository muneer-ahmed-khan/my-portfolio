<template>
  <div class="container-fluid resume-section">
    <Particles />
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
            <font-awesome-icon icon="arrow-down" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>

      <div class="resume-mobile-cta">
        <p>The resume is best viewed on desktop.<br />Download the PDF to view on mobile.</p>
        <a
          :href="pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
          style="display: inline-flex; align-items: center; gap: 6px; min-width: 200px; justify-content: center; font-size: 1rem; padding: 14px 28px"
        >
          <font-awesome-icon icon="arrow-down" aria-hidden="true" />
          Download CV
        </a>
      </div>

      <div class="resume-pdf-wrapper">
        <div class="resume">
          <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
        </div>
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
            <font-awesome-icon icon="arrow-down" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ResumePage' })
import { ref, onMounted } from 'vue'
import { VuePdf, createLoadingTask } from 'vue3-pdfjs'
import Particles from '@/components/ui/Particles.vue'
import pdf from '@/assets/Muneer-Ahmed-Resume.pdf'

const pdfSrc = ref<string>(pdf)
const numOfPages = ref(0)

onMounted(() => {
  const loadingTask = createLoadingTask(pdfSrc.value)
  loadingTask.promise.then((doc: { numPages: number }) => {
    numOfPages.value = doc.numPages
  })
})
</script>
