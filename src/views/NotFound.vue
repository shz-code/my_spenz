<script setup lang="ts"></script>

<template>
  <div>
    <h1>404 - Not Found</h1>
    <p>
      The requested page could not be found.
      <span><router-link :to="{ name: 'Home' }">Go Home</router-link></span>
    </p>
    <p>Requested path: {{ $route.path }}</p>
  </div>
</template>
