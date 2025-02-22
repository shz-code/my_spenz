<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next'

const email = ref('')

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic here
  console.log('Subscribing email:', email.value)
  // Reset the email input after submission
  email.value = ''
}
</script>

<template>
  <footer class="border-t">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Expense Tracker</h3>
          <p class="text-sm">
            Simplify your financial life with our easy-to-use expense tracking solution.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm hover:underline">Dashboard</a></li>
            <li><a href="#" class="text-sm hover:underline">Expenses</a></li>
            <li><a href="#" class="text-sm hover:underline">Reports</a></li>
            <li><a href="#" class="text-sm hover:underline">Settings</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm hover:underline">FAQs</a></li>
            <li><a href="#" class="text-sm hover:underline">Contact Us</a></li>
            <li><a href="#" class="text-sm hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="text-sm hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Stay Updated</h4>
          <p class="text-sm mb-2">Subscribe to our newsletter for tips and updates.</p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-2">
            <Input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="bg-primary-foreground text-primary"
            />
            <Button type="submit" variant="secondary" class="w-full">Subscribe</Button>
          </form>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t dark:text-white">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">
            &copy; {{ new Date().getFullYear() }} Expense Tracker. All rights reserved.
          </p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-slate-700">
              <FacebookIcon class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-slate-700">
              <TwitterIcon class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-slate-700">
              <InstagramIcon class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-slate-700">
              <LinkedinIcon class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
