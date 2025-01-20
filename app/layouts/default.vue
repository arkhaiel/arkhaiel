<template>
  <UContainer>
    <slot />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UContainer>
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: files } = await useAsyncData('search', () => queryCollectionSearchSections('content'))
</script>

<style></style>
