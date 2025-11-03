<template>
  <UContainer>
    <slot />
  </UContainer>
</template>

<script lang="ts" setup>
const { data: page, status, error } = useCurrentPage()
</script>

<style></style>
