<template>
    <div class="course w-100 min-vh-100">
        <div class="container h-100">
            <h1 class="text-center py-5">
                Course:
                <strong>Mastering Nuxt 3</strong>
            </h1>
            <div class="row course-container justify-content-center gap-3">
                <aside class="col-2 bg-white rounded-2 shadow-sm p-4">
                    <h3 class="fs-5"> Chapters</h3>
                </aside>
                <main class="col-md-6 col-lg-7 bg-white rounded-2 shadow-sm p-4">
                    <NuxtPage/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "course"
}
</script>

<style scoped lang="scss">
.course {
  background-color: $gray-100;
}

.course-container {
  height: calc(100vh - 200px);
}
</style>
