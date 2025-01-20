<template>
  <UApp>
    <UHeader title="arkhaiel.dev">
      <template #right>
        <UContentSearchButton label="" />
        <ClientOnly>
          <UColorModeSwitch />
        </ClientOnly>
      </template>
    </UHeader>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute()
if (route.fullPath.includes('?fbclid')) {
  await navigateTo(route.path)
}
</script>
