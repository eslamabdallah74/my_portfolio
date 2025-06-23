import { ref, onMounted, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateTheme();
  };

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
    updateTheme();
  };

  onMounted(() => {
    initializeTheme();
  });

  watch(isDark, updateTheme);

  return {
    isDark,
    toggleTheme
  };
}