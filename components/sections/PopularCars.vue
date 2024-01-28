<script lang="ts" setup>
import type { ProductCards } from '~/types';

defineProps<ProductCards>();
</script>

<template>
	<div class="dm-header-section">
		<h5>Popular Cars</h5>
		<NuxtLink to="#">View All</NuxtLink>
	</div>
	<div class="dm-popular-cars" v-if="Array.isArray(data)">
		<UtilsCardsStack :data="data" />
		<UtilsMobileCarousel :data="data" />
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
