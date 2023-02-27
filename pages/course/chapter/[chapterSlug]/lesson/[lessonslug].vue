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
  <LessonCompleteButton :model-value="isLessonComplete"
                        @update:model-value="toggleComplete"
  />
</template>

<script setup>
const course = useCourse();
const route = useRoute();

// Make a deliberate error for the third lesson.
if  (route.params.lessonSlug === '3-typing-component-events') {
	console.log(route.paramthatdoesnotexistwhoops.capitializeIsNotAMethod());
}

const progress = useLocalStorage('progress', []);

const isLessonComplete = computed(() => {
	// check if chapter exist
	if (!progress.value[chapter.value.number - 1]) {
		return false;
	}

	if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
		return false;
	}

	return progress.value[chapter.value.number - 1][lesson.value.number - 1];
})

const toggleComplete = () => {
	// Create an empty array if chapter does not exist
	if(!progress.value[chapter.value.number - 1]) {
		progress.value[chapter.value.number -1] = [];
	}
	progress.value[chapter.value.number -1][lesson.value.number -1] = !isLessonComplete.value
}

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
