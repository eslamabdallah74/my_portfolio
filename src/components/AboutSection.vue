<template>
  <section id="about" class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ personalInfo.bio }}
            </p>
            
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about building applications that not only perform exceptionally 
              but also provide seamless user experiences. My expertise spans from architecting 
              scalable backend systems to crafting intuitive frontends.
            </p>
          </div>

          <!-- Values -->
          <div class="grid sm:grid-cols-3 gap-6 mt-8">
            <div 
              v-for="value in values" 
              :key="value.title"
              class="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div class="text-3xl mb-2">{{ value.icon }}</div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ value.title }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ value.description }}</p>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Focus</h3>
              <ul class="space-y-3">
                <li v-for="focus in currentFocus" :key="focus" class="flex items-center text-gray-600 dark:text-gray-300">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ focus }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { personalInfo } from '@/data/portfolio';

const values = [
  {
    title: 'Performance',
    icon: '⚡',
    description: 'Optimized for speed and efficiency'
  },
  {
    title: 'Scalability', 
    icon: '📈',
    description: 'Built to grow with your needs'
  },
  {
    title: 'Maintainability',
    icon: '🔧', 
    description: 'Clean, documented code'
  }
];

const currentFocus = [
  'Real-time system architectures',
  'AI integrations in web apps',
  'Multi-tenant SaaS platforms',
  'Modern testing strategies'
];
</script>