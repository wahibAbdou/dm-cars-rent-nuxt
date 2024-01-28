<script lang="ts" setup>
import type { ProductCards } from '~/types';

defineProps<ProductCards>();
</script>

<template>
	<UtilsHeaderSection title="Popular Cars" :link="{ title: 'View All' }" />
	<div class="dm-popular-cars" v-if="Array.isArray(data)">
		<UtilsCardsStack :data="data" />
		<UtilsMobileCarousel :data="data" />
	</div>
</template>

<style lang="scss" scoped>
.dm-header-section {
	@apply dm-container flex justify-between items-center font-medium text-sm pb-6;
	@apply md:px-4 md:pb-6 md:text-base;
}
</style>
