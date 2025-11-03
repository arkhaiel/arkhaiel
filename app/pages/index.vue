<script lang="ts" setup>
const { data: page, status, error } = useCurrentPage()
const { data: test, status: testStatus, error: testError } = useContentFiles('blog')
</script>

<template>
  <UPageBody prose>
    <UBlogPost
      v-bind="test[0]"
      :to="$localePath(test[0].path)"
      orientation="horizontal"
    />
    <UBlogPosts>
      <UBlogPost
        v-for="(post, index) in test"
        :key="index"
        v-bind="post"
        :to="$localePath(post.path)"
      />
    </UBlogPosts>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </UPageBody>
</template>

<style></style>
