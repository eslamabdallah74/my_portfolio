<template>
  <section id="skills" class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="category in skillCategories" 
          :key="category.name"
          class="space-y-4"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white capitalize mb-6 text-center">
            {{ category.name }}
          </h3>
          
          <div class="space-y-3">
            <div 
              v-for="skill in category.skills" 
              :key="skill.name"
              class="flex items-center p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-md transition-all duration-200 group"
            >
              <span class="text-2xl mr-3 group-hover:scale-110 transition-transform">
                {{ skill.icon }}
              </span>
              <span class="font-medium text-gray-900 dark:text-white">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 text-center">
        <div class="inline-block p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800">
          <p class="text-gray-700 dark:text-gray-300 max-w-3xl">
            <strong>Always Learning:</strong> I stay current with the latest technologies and best practices. 
            Currently exploring AI/ML integrations, advanced testing strategies, and modern deployment patterns.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { skills } from '@/data/portfolio';

const skillCategories = computed(() => {
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return Object.entries(categories).map(([name, skills]) => ({
    name,
    skills
  }));
});
</script>