<script setup lang="ts">
const user = useSupabaseUser()
watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
  <div>
    <p>Waiting for login...</p>
  </div>
</template>
