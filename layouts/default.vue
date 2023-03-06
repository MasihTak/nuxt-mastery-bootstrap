<template>
	<div class="course w-100 h-100 min-vh-100">
		<div class="container h-100">
			<slot/>
		</div>
		<AppFooter />
	</div>
</template>

<style scoped lang="scss">
.course {
  background-color : $gray-100;
  }
</style>
