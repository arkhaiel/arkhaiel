<template>
  <UPageBody prose>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </UPageBody>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<style></style>
