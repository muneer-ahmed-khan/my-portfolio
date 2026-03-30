<template>
  <div class="quote-card-view card">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p style="text-align: justify; color: #e2e8f0; line-height: 1.8">
          Hi, I'm <span class="blue">Muneer Ahmed</span> — a Full-Stack Developer based in
          <span class="blue">Karachi, Pakistan</span> with
          <span class="blue">5+ years</span> of experience building scalable web applications, SaaS
          platforms, and cloud-deployed systems.
          <br /><br />
          I hold a Bachelor's degree in Computer Science from Iqra University. Currently working as
          a Senior Application Engineer at <span class="blue">Nextgeni</span>, and also available
          for freelance projects through Upwork.
          <br /><br />
          When I'm not coding, I enjoy:
        </p>
        <ul class="activities-list">
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" class="activity-icon" />
            Gaming &amp; exploring new titles
          </li>
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" class="activity-icon" />
            Writing technical blog posts
          </li>
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" class="activity-icon" />
            Travelling and exploring new places
          </li>
          <li class="about-activity">
            <font-awesome-icon :icon="['fas', 'hand-point-right']" class="activity-icon" />
            Experimenting with AI / LLM tools
          </li>
        </ul>
        <p class="motto">"Build things that ship — and hold up after they do."</p>
        <footer class="blockquote-footer">Muneer Ahmed</footer>
      </blockquote>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'AboutCard' }
</script>

<style scoped>
.quote-card-view {
  background-color: rgba(24, 26, 39, 0.85);
  border: 1px solid rgba(108, 99, 255, 0.2);
  border-radius: 12px;
  color: #e2e8f0;
}

.blue {
  color: #007bff;
}

.activities-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 16px;
}

.about-activity {
  margin-bottom: 8px;
  color: #cbd5e1;
  font-size: 0.95rem;
}

.activity-icon {
  color: #007bff;
  margin-right: 8px;
}

.motto {
  color: #a5b4fc;
  font-style: italic;
  margin-top: 16px;
  border-left: 3px solid #6c63ff;
  padding-left: 12px;
}

.blockquote-footer {
  color: #64748b;
  font-size: 0.85rem;
  margin-top: 8px;
}
</style>
