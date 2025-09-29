<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
const { data } = useFetch('/api/gh/test')
</script>

<style scoped></style>
