<template>
  <section id="contact" class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <EnvelopeIcon class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                <a 
                  :href="`mailto:${personalInfo.email}`"
                  class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {{ personalInfo.email }}
                </a>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                <span class="text-gray-600 dark:text-gray-300">{{ personalInfo.location }}</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h4>
            <div class="flex space-x-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 transform hover:scale-105"
                :aria-label="`Connect on ${social.name}`"
              >
                <component :is="getSocialIcon(social.icon)" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Availability Status -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 border border-accent-100 dark:border-accent-800">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 bg-accent-500 rounded-full mr-2 animate-pulse"></div>
              <span class="font-medium text-gray-900 dark:text-white">Currently Available</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              I'm open to new opportunities and interesting projects. Let's discuss your ideas!
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card p-8">
          <form 
            action="https://formspree.io/f/xldnpllo" 
            method="POST" 
            class="space-y-6"
          >
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                class="w-full px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full btn-primary flex items-center justify-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <!-- Success Message -->
      <div 
        v-if="showSuccess"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        @click="showSuccess = false"
      >
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-auto text-center shadow-2xl transform animate-slide-up">
          <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon class="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <button 
            @click="showSuccess = false"
            class="btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, h } from 'vue';
import { EnvelopeIcon, MapPinIcon, CheckIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import { personalInfo, socialLinks } from '@/data/portfolio';
import type { ContactForm } from '@/types';

const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
});

const errors = reactive<Partial<ContactForm>>({});
const isSubmitting = ref(false);
const showSuccess = ref(false);

const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => delete errors[key as keyof ContactForm]);
  
  if (!form.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return Object.keys(errors).length === 0;
};

// Inline SVGs as functional components for GitHub and LinkedIn
const GithubIcon = () => h('svg', {
  fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5', xmlns: 'http://www.w3.org/2000/svg', class: 'w-5 h-5'
}, [
  h('path', {
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    d: 'M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.545 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z'
  })
]);

const getSocialIcon = (iconName: string) => {
  const iconMap: Record<string, any> = {
    github: GithubIcon,
    envelope: EnvelopeIcon,
    phone: PhoneIcon
  };
  return iconMap[iconName] || EnvelopeIcon;
};
</script>