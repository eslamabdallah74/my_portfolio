<template>
  <footer class="bg-gray-900 text-green-400 font-mono py-12">
    <div class="container-custom flex flex-col items-center justify-center min-h-[300px]">
      <div class="w-full max-w-2xl bg-gray-950 rounded-xl shadow-lg p-6">
        <div v-for="(line, i) in output" :key="i" class="mb-1">
          <span v-if="line.prompt">&gt; </span><span v-html="line.text"></span>
        </div>
        <form @submit.prevent="runCommand" class="flex items-center mt-2">
          <span>&gt; </span>
          <input
            v-model="command"
            class="bg-transparent border-none outline-none text-green-300 w-full ml-2"
            autocomplete="off"
            @keydown.up.prevent="command = lastCommand"
            placeholder="Type a command... (try: whoami, projects, social, play, clear)"
          />
        </form>
        <div class="mt-4 flex gap-2 flex-wrap">
          <button v-for="cmd in quickCommands" :key="cmd" @click="runQuick(cmd)" class="bg-green-800 text-green-100 px-2 py-1 rounded text-xs hover:bg-green-700">
            {{ cmd }}
          </button>
        </div>
      </div>
    </div>
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
import { ref } from 'vue';
import { personalInfo, projects, socialLinks } from '@/data/portfolio';

const output = ref([
  { prompt: false, text: 'Welcome to Eslam\'s Portfolio Terminal! Type a command or click a button.' }
]);
const command = ref('');
let lastCommand = '';

const quickCommands = ['whoami', 'projects', 'social', 'play', 'clear'];

function runCommand() {
  lastCommand = command.value;
  handleCommand(command.value);
  command.value = '';
}

function runQuick(cmd: string) {
  handleCommand(cmd);
}

function handleCommand(cmd: string) {
  const c = cmd.trim().toLowerCase();
  output.value.push({ prompt: true, text: c });
  switch (c) {
    case 'whoami':
      output.value.push({ prompt: false, text: `${personalInfo.name} — ${personalInfo.title} based in ${personalInfo.location}` });
      break;
    case 'projects':
      output.value.push({ prompt: false, text: 'Launching latest builds...' });
      projects.slice(0, 3).forEach(p => {
        output.value.push({ prompt: false, text: `<span class='text-green-300'>${p.title}</span> — <span class='text-green-500'>${p.description.split('\n')[0]}</span>` });
      });
      break;
    case 'social':
      output.value.push({ prompt: false, text: socialLinks.map(s => `<a href='${s.url}' target='_blank' class='underline text-green-300'>[${s.name}]</a>`).join(' ') });
      break;
    case 'play':
      output.value.push({ prompt: false, text: `<a href='https://www.youtube.com/watch?v=5qap5aO4i9A' target='_blank' class='underline text-green-300'>Playing chill playlist...</a>` });
      break;
    case 'clear':
      output.value.splice(0);
      break;
    default:
      output.value.push({ prompt: false, text: 'Unknown command. Try: whoami, projects, social, play, clear' });
  }
}
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