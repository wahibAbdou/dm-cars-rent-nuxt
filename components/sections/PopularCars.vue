<script lang="ts" setup></script>

<template>
	<div class="dm-header-section">
		<h5>Popular Cars</h5>
		<NuxtLink to="#">View All</NuxtLink>
	</div>

	<div class="dm-popular-cars">
		<div class="cards-stack">
			<UtilsProductCard />
			<UtilsProductCard />
			<UtilsProductCard />
			<UtilsProductCard />
		</div>
	</div>
	<UtilsMobileCarousel />
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

.cards-stack {
	@apply hidden;
	@apply lg:mb-14 lg:dm-container lg:flex lg:gap-6 lg:gap-8;
}
</style>
