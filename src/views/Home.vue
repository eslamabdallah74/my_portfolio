<template>
  <div class="min-h-screen">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <BlogSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import BlogSection from '@/components/BlogSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>