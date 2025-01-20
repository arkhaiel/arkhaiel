<template>
  <div>
    <UHeader title="arkhaiel.dev">
      <template #right>
        <UContentSearchButton label="" />
        <ClientOnly>
          <UColorModeSwitch />
        </ClientOnly>
      </template>
    </UHeader>
    <UMain>
      <div class="px-8">
        <UPage>
          <slot />
        </UPage>
      </div>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: files } = await useAsyncData('search', () => queryCollectionSearchSections('content'))
</script>

<style></style>
