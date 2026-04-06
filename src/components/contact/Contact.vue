<template>
  <div class="container-fluid contact-section">
    <Particle />
    <div class="container" style="position: relative; z-index: 1">
      <!-- Header -->
      <h1 class="project-heading contact-heading">Get In <strong class="blue">Touch</strong></h1>
      <p class="contact-subheading">
        Have a project in mind or want to explore a collaboration? Send me a message. I typically
        respond within 24 hours.
      </p>

      <div class="row g-4">
        <!-- Contact Info Panel -->
        <div class="col-md-5">
          <div class="contact-info-card">
            <!-- Availability badge -->
            <div class="availability-badge mb-4">
              <span class="availability-dot"></span>
              Available for new projects
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon">
                <font-awesome-icon icon="envelope" aria-hidden="true" />
              </div>
              <div>
                <p class="contact-info-label">Email</p>
                <p class="contact-info-value">
                  <a href="mailto:muneerkhan31886@gmail.com">muneerkhan31886@gmail.com</a>
                </p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon">
                <font-awesome-icon icon="location-dot" aria-hidden="true" />
              </div>
              <div>
                <p class="contact-info-label">Location</p>
                <p class="contact-info-value">Karachi, Pakistan · Remote Worldwide</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true" />
              </div>
              <div>
                <p class="contact-info-label">LinkedIn</p>
                <p class="contact-info-value">
                  <a
                    href="https://www.linkedin.com/in/muneer-ahmed-a59362140/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Muneer Ahmed
                  </a>
                </p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon">
                <font-awesome-icon :icon="['fab', 'github']" aria-hidden="true" />
              </div>
              <div>
                <p class="contact-info-label">GitHub</p>
                <p class="contact-info-value">
                  <a href="https://github.com/muneer-ahmed-khan" target="_blank" rel="noreferrer">
                    muneer-ahmed-khan
                  </a>
                </p>
              </div>
            </div>

            <hr style="border-color: var(--color-border); margin: 20px 0" />

            <p class="contact-info-label" style="margin-bottom: 12px">Connect with me</p>
            <div class="contact-social-links">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                :target="link.url.startsWith('http') ? '_blank' : '_self'"
                rel="noreferrer"
                class="contact-social-link"
                :aria-label="link.name"
              >
                <font-awesome-icon :icon="link.icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-md-7">
          <div class="contact-form-card">
            <form @submit.prevent="submitForm">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Your Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div class="col-12">
                  <label class="form-label">Subject</label>
                  <input
                    v-model="form.subject"
                    type="text"
                    class="form-control"
                    placeholder="Project inquiry / Collaboration"
                    required
                  />
                </div>
                <div class="col-12">
                  <label class="form-label">Message</label>
                  <textarea
                    v-model="form.message"
                    class="form-control"
                    rows="6"
                    placeholder="Tell me about your project — what you're building, your timeline, and how I can help..."
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-submit" :disabled="sending || submitted">
                    <font-awesome-icon
                      :icon="sending ? 'spinner' : 'paper-plane'"
                      :spin="sending"
                    />
                    {{ submitted ? 'Message Sent!' : sending ? 'Sending...' : 'Send Message' }}
                  </button>
                </div>
                <div v-if="errorMsg" class="col-12">
                  <p class="form-error">{{ errorMsg }}</p>
                </div>
              </div>
            </form>

            <div v-if="submitted" class="form-success">
              <font-awesome-icon
                icon="circle-check"
                class="success-icon"
              />
              <br />
              Thanks for reaching out! I'll get back to you within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import Particle from '@/components/Particles.vue'
import { socialLinks } from '@/data/socialLinks'

const EMAILJS_SERVICE_ID = 'service_93szg14'
const EMAILJS_TEMPLATE_ID = 'template_551yede'
const EMAILJS_PUBLIC_KEY = 'Nsv5qp2kuAPze5MdL'

export default defineComponent({
  name: 'ContactPage',
  components: { Particle },
  setup() {
    const submitted = ref(false)
    const sending = ref(false)
    const errorMsg = ref('')

    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const submitForm = async () => {
      sending.value = true
      errorMsg.value = ''

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            reply_to: form.email
          },
          EMAILJS_PUBLIC_KEY
        )

        submitted.value = true
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''

        setTimeout(() => {
          submitted.value = false
        }, 5000)
      } catch {
        errorMsg.value =
          'Something went wrong. Please try emailing me directly at muneerkhan31886@gmail.com'
      } finally {
        sending.value = false
      }
    }

    return { form, submitted, sending, errorMsg, submitForm, socialLinks }
  }
})
</script>

<style scoped>
.form-error {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: #f87171;
  margin-top: 4px;
}

.success-icon {
  font-size: var(--text-2xl);
  margin-bottom: 8px;
}
</style>
