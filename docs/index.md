---
home: true
heroText: OctoFetch
heroImage: /img/logo.svg
tagline: Javascript & Typescript library for fetching data from APIs with zero dependencies.
actionText: Get Started →
actionLink: /guide/installation
altActionText: Learn More →
altActionLink: /about/
features:
    - title: ⚡️ Powerfull & easy to use
      details: OctoFetch will make doing requests super easy, stripping down on boilerplate code.
    - title: 📦 Small bundle size
      details: OctoFetch only adds an additional 1 KB (Gzipped) to your bundle size with zero dependencies.
    - title: ✅ Framework support
      details: Goes perfectly with frameworks such as Vue, React, Svelte & more!
footer: MIT Licensed | Copyright © 2021 - Maarten Van Neyghem
---

<hr />
<div class="sponsors">
    <h2>Sponsors</h2>
    <div class="logos">
      <a v-for="{ href, logo, name } of sponsors" :href="href" target="_blank" rel="noopener" aria-label="sponsor-img">
        <img :src="logo" :alt="name">
      </a>
    </div>
    <br>
    <a href="https://github.com/sponsors/maartenvn" target="_blank" rel="noopener">Become a sponsor on GitHub</a>
</div>

<script setup>
import sponsors from "./.vitepress/content/sponsors.json";
</script>
