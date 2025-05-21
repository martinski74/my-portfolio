<template>
  <header
    class="flex justify-between items-start p-6 bg-opacity-50 relative z-20"
  >
    <div class="text-white text-3xl font-bold">
      MARTIN DOBRUDZHANSKI
      <img class="h-20" src="@/assets/logo.png" alt="logo" />
    </div>
    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30">
      <button
        type="button"
        class="block focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span v-if="isMenuOpen" class="text-5xl">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
            alt="close"
            width="50"
            height="50"
          />
        </span>
        <span v-else class="text-5xl">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
            alt="menu"
            width="50"
            height="50"
          />
        </span>
      </button>
    </div>
    <!-- Navbar Link -->
    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
        isMenuOpen ? 'block' : 'hidden',
      ]"
    >
      <ul
        class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
      >
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
            @click="scrollToSection(item.href)"
          >
            {{ $t(`nav.${item.translationKey}`) }}
          </a>
        </li>
        <li class="flex space-x-2">
          <button
            @click="changeLanguage('en')"
            class="px-4 py-2 rounded text-white transition-colors hover:bg-[#7332c6]"
            :class="{
              'bg-[#7332c6]': currentLocale === 'en',
              'bg-[#ad79ee]': currentLocale !== 'en',
            }"
          >
            EN
          </button>
          <button
            @click="changeLanguage('bg')"
            class="px-4 py-2 rounded text-white transition-colors hover:bg-[#7332c6]"
            :class="{
              'bg-[#7332c6]': currentLocale === 'bg',
              'bg-[#ad79ee]': currentLocale !== 'bg',
            }"
          >
            BG
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const Menu = ref([
  { name: 'About Me', href: '#about', translationKey: 'about' },
  { name: 'Skills', href: '#skills', translationKey: 'skills' },
  { name: 'Projects', href: '#projects', translationKey: 'projects' },
  { name: 'Contact', href: '#contact', translationKey: 'contact' },
]);

const isMenuOpen = ref(false);
const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const changeLanguage = (lang) => {
  locale.value = lang;
};
</script>
