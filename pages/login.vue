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

<script setup>
const {title} = useCourse();
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  });

  if (error) {
    console.error(error);
  }
}
</script>
