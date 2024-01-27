<script lang="ts" setup>
interface ButtonProps {
	text?: string;
	classes?: 'btn-primary' | 'btn-light';
}

withDefaults(defineProps<ButtonProps>(), {
	text: 'Default Primary Button',
	classes: 'btn-primary',
});
</script>

<template>
	<button :class="classes">{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
	@apply text-white px-4 py-3 rounded;
}

.btn-primary {
	@apply bg-primary;
	@apply focus:ring-4 focus:ring-primary-light;
}

.btn-light {
	@apply bg-primary-light;
	@apply focus:ring-4 focus:ring-blue-200;
}
</style>
