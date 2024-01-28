<script lang="ts" setup>
import type { ButtonProps } from '~/types';

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
	@apply text-white py-3.5 px-8 rounded;
	@apply lg:px-6 lg:py-2.5;
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
