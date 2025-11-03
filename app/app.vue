<script setup lang="ts">
const route = useRoute()
if (route.fullPath.includes('?fbclid')) {
  await navigateTo(route.path)
}
</script>

<template>
  <UApp>
    <UHeader :toggle="false">
      <template #title>
        <Logo class="w-8" />
        <span class="hidden sm:inline">arkhaiel.dev</span>
      </template>
      <template #right>
        <ClientOnly>
          <I18nSwitch />
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
