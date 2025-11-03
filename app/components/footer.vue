<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank',
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank',
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank',
  },
]
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        arkhalabs {{ new Date().getFullYear() }}
      </p>
    </template>

    <!-- <UNavigationMenu
      :items="items"
      variant="link"
    /> -->

    <template #right>
      <UButton
        icon="fa7-brands:bluesky"
        color="neutral"
        variant="ghost"
        to="https://bsky.app/profile/arkhalabs.com"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="fa7-brands:x-twitter"
        color="neutral"
        variant="ghost"
        to="https://x.com/arkhalabs"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
