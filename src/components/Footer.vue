<template>
  <footer
    class="mt-8 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white"
  >
    <div class="container p-6 flex justify-between items-center">
      <div class="text-white text-3xl font-bold">
        <img src="@/assets/logo.png" alt="logo" class="h-20" />
      </div>
      <p class="text-slate-400">
        All rights reserved. {{ new Date().getFullYear() }} © Martin
      </p>
    </div>
  </footer>
</template>
