<template>
	<h1 class="text-center py-5">
		Course:
		<strong>Mastering
		        Nuxt
		        3</strong>
	</h1>
	<div class="row course-container justify-content-center gap-3 pb-5">
		<AppSidebar />
		<main class="col-md-6 col-lg-7 bg-white rounded-2 shadow-sm p-4">
			<NuxtErrorBoundary>
				<NuxtPage/>
				<template #error="{error}">
					<p>
						Oh no, something went wrong with the lesson!
						<code>{{error}}</code>
					</p>
					<button type="button"
					        class="btn btn-secondary"
					        @click="resetError(error)"
					>Reset</button>
				</template>
			</NuxtErrorBoundary>
		</main>
	</div>
</template>

<script setup>
const resetError = async (error) => {
	// We should navigate first, and then set the error value to null
	await navigateTo('/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3')
	error.value = null;
}
</script>

<style scoped lang="scss">

</style>
