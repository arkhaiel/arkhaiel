<script lang="ts" setup>
const { data: page, status, error } = useCurrentPage()
const { data: test, status: testStatus, error: testError } = useContentFiles('blog')
</script>

<template>
  <UPageBody prose>
    {{ test }}
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </UPageBody>
</template>

<style></style>
