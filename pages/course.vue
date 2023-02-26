<template>
	<h1 class="text-center py-5">
		Course:
		<strong>Mastering
		        Nuxt
		        3</strong>
	</h1>
	<div class="row course-container justify-content-center gap-3 pb-5">
		<aside class="col-2 bg-white rounded-2 shadow-sm p-4">
			<h3 class="fs-5 fw-bold mb-4">
				Chapters</h3>
			<div class="d-flex flex-column mb-2"
			     v-for="chapter in chapters"
			     :key="chapter.slug"
			>
				<h4 class="fs-6 fw-bold">
					{{chapter.title}} </h4>
				<NuxtLink
						v-for="(lesson, index) in chapter.lessons"
						class="d-flex flex-row ms-1 text-decoration-none mb-2"
						:key="lesson.slug"
						:to="lesson.path"
						:class="{
                               'text-success':
                               lesson.path === $route.fullpath,
                               'text-reset':
                               lesson.path !== $route.fullpath
                            }"
				>
					<span class="text-muted pe-1">{{index + 1}}.</span>
					<span>{{lesson.title
					      }}</span>
				</NuxtLink>
			</div>
		</aside>
		<main class="col-md-6 col-lg-7 bg-white rounded-2 shadow-sm p-4">
			<NuxtPage/>
		</main>
	</div>
</template>

<script setup>
const {chapters} = useCourse();
</script>

<style scoped lang="scss">
.router-link-active {
  color : $blue-500 !important;
  }
</style>
