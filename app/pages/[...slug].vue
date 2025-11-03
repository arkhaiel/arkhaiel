<script setup lang="ts">
const { data: page, status, error } = useCurrentPage()
</script>

<template>
  <UPage
    v-if="page"
    :title="page.title"
  >
    <UPageHeader
      :title="page.title"
      :description="page.description"
    />
    <UPageBody>
      <ContentRenderer :value="page" />
    </UPageBody>
    <template #right>
      <UContentToc
        v-if="page?.body?.toc"
        :links="page.body.toc.links"
        title="Sommaire"
      />
    </template>
  </UPage>
</template>
