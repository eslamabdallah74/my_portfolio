<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-float"></div>
      <div class="absolute top-40 right-20 w-72 h-72 bg-secondary-200 dark:bg-secondary-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-float" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
        <span class="block">{{ personalInfo.tagline.split(' ').slice(0, 2).join(' ') }}</span>
        <span class="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {{ personalInfo.tagline.split(' ').slice(2).join(' ') }}
        </span>
      </h1>

      <!-- Description -->
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
        {{ personalInfo.description }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.4s;">
        <a href="#projects" @click="scrollToSection('#projects')" class="btn-primary">
          See My Projects
        </a>
        <a href="#contact" @click="scrollToSection('#contact')" class="btn-secondary">
          Get In Touch
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon class="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { personalInfo } from '@/data/portfolio';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>