<template>
	<aside class="col-2 bg-white rounded-2 shadow-sm p-4">
		<h3 class="fs-5 fw-bold mb-4">Chapters</h3>
		<div class="d-flex flex-column mb-2"
		     v-for="chapter in chapters"
		     :key="chapter.slug"
		>
			<h4 class="fs-6 fw-bold">{{chapter.title}} </h4>
			<NuxtLink
					v-for="(lesson, index) in chapter.lessons"
					class="d-flex flex-row ms-1 text-decoration-none mb-2"
					:key="lesson.slug"
					:to="lesson.path"
					:class="{
              'text-primary':
                lesson.path === $route.fullPath,
              'text-muted':
                lesson.path !== $route.fullPath,
            }"
			>
				<span class="text-muted pe-1">{{index + 1}}.</span>
				<span>{{lesson.title}}</span>
			</NuxtLink>
		</div>
	</aside>
</template>

<script setup>
const {chapters} = useCourse();
</script>
