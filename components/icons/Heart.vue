<script lang="ts" setup>
import type { HeartFill } from '~/types';

const props = withDefaults(defineProps<HeartFill>(), {
	fill: 'var(--icon-default-color)',
});

const isHeartClicked = computed(
	() => props.fill === 'var(--heart-icon-active-color)'
);
</script>

<template>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		class="cursor-pointer"
	>
		<path
			d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z"
			:fill="isHeartClicked ? fill : 'transparent'"
			:stroke="isHeartClicked ? 'transparent' : 'var(--label-color)'"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<style scoped></style>
