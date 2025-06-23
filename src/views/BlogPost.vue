<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 pt-20">
    <div class="container-custom section-padding">
      <div v-if="post" class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <button
          @click="$router.go(-1)"
          class="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeftIcon class="w-5 h-5 mr-2" />
          Back to Blog
        </button>

        <!-- Article Header -->
        <header class="mb-12">
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time>{{ formatDate(post.date) }}</time>
            <span class="mx-2">•</span>
            <span>{{ post.readTime }} min read</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {{ post.title }}
          </h1>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- Article Content -->
        <article class="prose prose-lg dark:prose-invert max-w-none">
          <div class="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2>Coming Soon</h2>
            <p>
              This is a preview of the blog post layout. In a full implementation, this would include:
            </p>
            <ul>
              <li>Markdown content rendering</li>
              <li>Code syntax highlighting</li>
              <li>Image optimization</li>
              <li>Table of contents</li>
              <li>Related posts</li>
              <li>Comments system</li>
            </ul>
            <p>
              The blog system is designed to be easily integrated with a headless CMS or markdown files.
            </p>
          </div>
        </article>
      </div>

      <!-- Post Not Found -->
      <div v-else class="max-w-2xl mx-auto text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <router-link to="/" class="btn-primary">
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { blogPosts } from '@/data/portfolio';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const post = computed(() => 
  blogPosts.find(p => p.id === props.id)
);

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>