<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowLeft, Home } from 'lucide-vue-next'
</script>

<template>
  <div class="grid place-items-center">
    <Card class="max-w-[500px] w-full">
      <CardHeader>
        <CardTitle class="text-4xl font-bold text-center">404</CardTitle>
        <CardDescription class="text-xl text-center">Oops! Page not found</CardDescription>
      </CardHeader>
      <CardContent class="flex flex-col items-center space-y-6">
        <p class="text-center text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
      </CardContent>
      <CardFooter
        class="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2"
      >
        <Button variant="outline" class="w-full sm:w-auto" @click="$router.back()">
          <ArrowLeft class="mr-2 h-4 w-4" />
          Go Back
        </Button>
        <router-link :to="{ name: 'Home' }">
          <Button class="w-full sm:w-auto">
            <Home class="mr-2 h-4 w-4" />
            Go to Homepage
          </Button>
        </router-link>
      </CardFooter>
    </Card>
  </div>
</template>
