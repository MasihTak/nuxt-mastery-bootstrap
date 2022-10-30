<template>
  <h2>Lesson</h2>
  <p>This is a lesson</p>
  <p>Chapter slug: {{ $route.params.chapterSlug }}</p>
  <p>Lesson slug: {{ $route.params.lessonSlug }}</p>
</template>

<script>
export default {
  name: "[lessonslug]"
}
</script>

<style
    scoped>

</style>
