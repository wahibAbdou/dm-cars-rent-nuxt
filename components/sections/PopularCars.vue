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

<style lang="scss" scoped></style>
