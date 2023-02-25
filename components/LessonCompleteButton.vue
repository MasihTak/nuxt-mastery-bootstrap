<template>
	<label class="rounded text-white fw-bold py-2 px-4"
	       role="button"
	       :class="{
                'bg-success': modelValue,
                'bg-secondary': !modelValue,
            }"
	>
		<input
				type="checkbox"
				:value="modelValue"
				@input="() => $emit('update:modelValue', !modelValue)"
				class="d-none"
		/>
		{{modelValue ? 'Completed!' : 'Mark as complete'}}
	</label>
</template>

<script setup>
defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
::selection {
	display : none;
}
</style>
