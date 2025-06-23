<template>
  <section id="projects" class="section-padding bg-gray-50 dark:bg-gray-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my recent work building scalable web applications
        </p>
      </div>

      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <article 
          v-for="project in projects" 
          :key="project.id"
          class="card p-6 group"
        >
          <!-- Project Header -->
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h3>
            <div class="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                v-if="project.liveUrl"
                :href="project.liveUrl" 
                target="_blank"
                class="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                :aria-label="`View ${project.title} live`"
              >
                <ArrowTopRightOnSquareIcon class="w-5 h-5" />
              </a>
              <a 
                v-if="project.githubUrl"
                :href="project.githubUrl" 
                target="_blank"
                class="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                :aria-label="`View ${project.title} source code`"
              >
                <CodeBracketIcon class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Challenge -->
          <div class="mb-4">
            <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Challenge Solved:</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 italic">
              {{ project.challenge }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>

      <!-- View More -->
      <div class="text-center mt-12">
        <a 
          href="https://github.com/username" 
          target="_blank"
          class="btn-secondary inline-flex items-center"
        >
          View More on GitHub
          <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/vue/24/outline';
import { projects } from '@/data/portfolio';
</script>