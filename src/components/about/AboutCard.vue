<template>
  <div class="quote-card-view card">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p class="bio-text">
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
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text);
}

.bio-text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--color-text);
  text-align: justify;
}

.blue {
  color: var(--color-primary);
}

.activities-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 16px;
}

.about-activity {
  margin-bottom: 8px;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
}

.activity-icon {
  color: var(--color-primary);
  margin-right: 8px;
}

.motto {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  font-style: italic;
  line-height: var(--leading-relaxed);
  color: var(--color-text-muted);
  margin-top: 16px;
  border-left: 3px solid var(--color-primary);
  padding-left: 12px;
}

.blockquote-footer {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-top: 8px;
}
</style>
