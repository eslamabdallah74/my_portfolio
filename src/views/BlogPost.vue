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
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight text-primary-800 dark:text-primary-300">
            {{ post.title }}
          </h1>
          <div class="text-base mb-4 text-gray-600 dark:text-gray-300">
            {{ formatDate(post.date) }}
          </div>
          <hr class="border-t border-gray-200 dark:border-gray-700 mb-8" />
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </header>
        <!-- Article Content -->
        <article class="prose prose-lg dark:prose-invert max-w-none">
          <p class="mb-6 text-xl text-primary-700 dark:text-primary-300">{{ post.excerpt }}</p>
          <div v-if="post.content">
            <div v-html="post.content"></div>
          </div>
          <div v-else>
            <a :href="post.externalUrl" target="_blank" class="btn-primary mt-4 inline-block">Read Full Article on LinkedIn</a>          </div>
        </article>
      </div>

      <!-- Post Not Found -->
      <div v-else class="max-w-2xl mx-auto text-center">
        <h1 class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">Post Not Found</h1>
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