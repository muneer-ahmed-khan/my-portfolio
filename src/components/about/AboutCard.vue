<template>
  <div class="quote-card-view card">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p style="text-align: justify; color: #e2e8f0; line-height: 1.8">
          Hi, I'm <span class="blue">Muneer Ahmed</span>, a Full-Stack Developer from
          <span class="blue">Karachi, Pakistan</span> with
          <span class="blue">6+</span> years of experience. I've built web apps, SaaS products and
          cloud-based systems for clients across different industries, with Python and
          <span class="blue">Django</span> being a regular part of my backend work alongside
          Node.js and other frameworks. I also work on Go (Golang) projects myself using
          Claude Code and AI-assisted development, and I have a Go developer on my team as well.
          <br /><br />
          Some of the products I've contributed to include
          <span class="blue">Heronos</span>, a German platform for deploying AI-powered digital
          specialists and workflow automation across enterprise sectors;
          <span class="blue">Wear That</span>, a UAE and KSA personal styling platform that
          connects customers with professional stylists for curated fashion recommendations;
          <span class="blue">SmartMentor</span>, an entrepreneurial education platform that helps
          founders validate and grow their businesses through structured mentorship;
          <span class="blue">Voiceflip</span>, a Canadian company building custom AI assistants
          for real estate organizations; and <span class="blue">ARDI</span>, their flagship AI
          product used by real estate associations and MLSs across the US and Canada.
          <br /><br />
          I did my Bachelor's in Computer Science from Iqra University. Currently working as a
          Senior Application Engineer at <span class="blue">Nextgeni</span>, and I also take
          freelance projects through Upwork.
          <br /><br />
          Outside of work I like:
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
        <p class="motto">"Build it right the first time, then keep improving it."</p>
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
