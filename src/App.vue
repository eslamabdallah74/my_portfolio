<template>
  <div id="app" class="min-h-screen bg-white dark:bg-gray-900 transition-colors">
    <AppNavigation />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useTheme } from '@/composables/useTheme';

// Initialize theme
// const { isDark } = useTheme();

onMounted(() => {
  // Add smooth scrolling for anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const id = target.getAttribute('href')?.slice(1);
      const element = document.getElementById(id || '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
</script>