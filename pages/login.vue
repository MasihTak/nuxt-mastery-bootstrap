<template>
 <section class="mt-5">
	 <h1 class="fw-bold">Login in to {{title}}</h1>
	 <button class="btn btn-primary mt-3"
           @click.prevent="login"
   >
     Login in with Github
   </button>
 </section>
</template>

<script setup lang="ts">
const {query} = useRoute();
const {title} = useCourse();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const login = async () => {
  const queryParams =
      query.redirectTo !== undefined
          ? `?redirectTo=${query.redirectTo}`
          : '';
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  });

  if (error) {
    console.error(error);
  }
};
</script>
