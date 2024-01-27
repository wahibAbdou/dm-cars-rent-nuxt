<script lang="ts" setup></script>

<template>
	<button>
		<IconsHeart />
	</button>
</template>

<style lang="scss" scoped>
button {
	@apply relative w-12 h-12 rounded-full border border-slate-200;
	@apply focus:outline-none focus:ring-4 focus:ring-primary-light;

	svg {
		@apply dm-center;
	}
}
</style>
