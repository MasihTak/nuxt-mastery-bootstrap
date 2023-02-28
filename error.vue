<template>
	<NuxtLayout>
		<div class="row pt-5">
			<div class="col-5 mx-auto">
				<template v-if="error.statusCode === 404">
					<h1>404</h1>
					<p class="lead">I guess that page doesn't exist.</p>
				</template>
				<template v-else>
					<h1>Dang</h1>
					<p class="lead">It looks like something broke.</p>
					<p>Sorry about that.</p>
				</template>
				<strong>{{error.statusMessage}}</strong>
				<p class="pt-4">Go to the
					<a class="text-black fw-bold"
					   role="button"
					   @click="handleError"
					>first lesson.</a>
				</p>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
const error = useError();

/**
 * @des clear the error and redirect to the first lesson
 **/
const handleError = () => {
	clearError({
		redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
	})
}
</script>
