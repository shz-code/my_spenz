<script setup lang="ts"></script>

<template>
  <header>Hello to my spenz</header>

  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
