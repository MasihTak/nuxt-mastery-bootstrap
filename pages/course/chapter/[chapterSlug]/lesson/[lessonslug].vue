<template>
  <p class="text-uppercase fw-bold text-secondary mb-0">lesson {{chapter.number}} - {{lesson.number}}</p>
  <h2 class="mt-0 fs-3">{{ lesson.title }}</h2>
  <NuxtLink v-if="lesson.sourceUrl"
     class="text-muted d-inline-block pb-4"
     :to="lesson.sourceUrl">Download Source Code</NuxtLink>
    <NuxtLink v-if="lesson.downloadUrl"
       class="text-muted d-inline-block pb-4"
       :to="lesson.downloadUrl">Download Video</NuxtLink>
    <VideoPlayer class="d-block pb-4" v-if="lesson.videoId" :videoId="lesson.videoId" />
  <p>{{ lesson.text }}</p>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
    return course.chapters.find(
        (chapter) => chapter.slug === route.params.chapterSlug
    );
});

const lesson = computed(() => {
    return chapter.value.lessons.find(
        (lesson) => lesson.slug === route.params.lessonSlug
    ) 
})

const title = computed(() => {
    return `${lesson.value.title} - ${course.title}`
})
useHead({
    title,
})
</script>

<style scoped>

</style>
