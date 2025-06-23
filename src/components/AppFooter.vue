<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container-custom">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold text-primary-400 mb-4">{{ personalInfo.name }}</h3>
          <p class="text-gray-300 leading-relaxed">
            {{ personalInfo.title }} focused on building scalable, modern web applications.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <nav class="space-y-2">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href" 
              class="block text-gray-300 hover:text-primary-400 transition-colors"
              @click="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </nav>
        </div>
        
        
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} {{ personalInfo.name }}. All rights reserved.
        </p>
        <p class="text-gray-400 text-sm mt-2 sm:mt-0">
          Built with Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import { personalInfo, socialLinks } from '@/data/portfolio';

const currentYear = computed(() => new Date().getFullYear());

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const getSocialIcon = (iconName: string) => {
  const iconMap: Record<string, any> = {
    github: EnvelopeIcon,
    linkedin: () => 'L',
    envelope: EnvelopeIcon,
    phone: EnvelopeIcon
  };
  return iconMap[iconName] || EnvelopeIcon;
};
</script>