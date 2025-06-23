<template>
  <section id="blog" class="section-padding bg-gray-50 dark:bg-gray-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Latest Blog Posts
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing insights about web development, best practices, and new technologies
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in blogPosts" 
          :key="post.id"
          class="card p-6 group cursor-pointer"
          @click="navigateToPost(post.id)"
        >
          <!-- Date and Read Time -->
          <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time>{{ formatDate(post.date) }}</time>
            <span>{{ post.readTime }} min read</span>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            {{ post.title }}
          </h3>

          <!-- Excerpt -->
          <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {{ post.excerpt }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Read More -->
          <div class="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:translate-x-1 transition-transform">
            Read more
            <ArrowRightIcon class="w-4 h-4 ml-1" />
          </div>
        </article>
      </div>

      <!-- Coming Soon Notice -->
      <div class="text-center mt-12">
        <div class="inline-block p-6 rounded-2xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm">
          <p class="text-gray-600 dark:text-gray-300">
            <strong>Coming Soon:</strong> Full blog functionality with markdown support and CMS integration.
            <br>
            <span class="text-sm">These are preview posts to demonstrate the layout and design.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { blogPosts } from '@/data/portfolio';

const router = useRouter();

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const navigateToPost = (id: string) => {
  router.push(`/blog/${id}`);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>