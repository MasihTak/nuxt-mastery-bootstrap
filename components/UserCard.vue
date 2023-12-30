<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  const {error} = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo('/login');
};

const name = computed(() => user.value?.user_metadata.full_name);
const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>

<template>
  <div v-if="user" class="card shadow-sm p-3 rounded-2">
    <div class="row">
    <div class="col-auto">
      <img :src="profile" :alt="name" class="img-fluid rounded-circle avatar">
    </div>
    <div class="col-auto d-flex flex-column">
        <span>{{ name }}</span>
        <button class="btn btn-link text-muted"
                type="button"
                @click="logout"
        >Log Out
        </button>
    </div>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width  : 42px;
  height : 42px;
}
</style>
