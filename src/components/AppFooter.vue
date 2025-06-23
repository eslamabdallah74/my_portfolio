<template>
  <footer class="bg-gray-900 text-green-400 font-mono py-12">
    <!-- Bottom Bar -->
    <div class="container-custom">
      <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center mt-8">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.
        </p>
        <p class="text-gray-400 text-sm mt-2 sm:mt-0">
          Built with Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { personalInfo } from '@/data/portfolio';
</script>

<style scoped>
input {
  caret-color: #4ade80;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 4px;
}
</style>