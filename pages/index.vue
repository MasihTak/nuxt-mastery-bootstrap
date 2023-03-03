<template>
	<div class="pt-5 text-center">
		<NuxtLink :to="firstLesson.path"
		          class="text-black fw-bold"
		>
			Go to the first Lesson
		</NuxtLink>
	</div>

</template>

<script setup>
const firstLesson = useFirstLesson();
</script>


<style lang="scss">
  html, body {
    height: 100%;
  }
</style>
