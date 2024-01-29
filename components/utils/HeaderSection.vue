<script lang="ts" setup>
interface HeaderSectionLink {
	title: string;
	to?: string | '#';
}
interface HeaderSection {
	title?: string;
	link?: HeaderSectionLink;
}

const props = defineProps<HeaderSection>();
</script>

<template>
	<div class="dm-header-section">
		<h5>{{ title }}</h5>
		<NuxtLink v-if="link" :to="link.to">{{ link.title }}</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
.dm-header-section {
	@apply dm-container flex justify-between items-center font-medium text-sm pb-6;
	@apply md:px-4 md:pb-6 md:text-base;

	h5 {
		@apply text-label-color;
	}
	a {
		@apply text-primary;
		@apply hover:underline;
	}
}
</style>
