<script lang="ts" setup>
import type { ProductCards } from '~/types';

defineProps<ProductCards>();
</script>

<template>
	<div class="dm-cards-stack">
		<UtilsProductCard
			class="flex-1"
			v-for="{
				id,
				index,
				name,
				type,
				img,
				gasolineLiter,
				kindOfTransition,
				people,
				pricePerDay,
			} in data"
			:key="id"
			:index
			:id
			:name
			:type
			:img
			:gasolineLiter
			:kindOfTransition
			:people
			:pricePerDay
		/>
	</div>
</template>

<style lang="scss" scoped>
.dm-cards-stack {
	@apply hidden;
	@apply lg:mb-14 lg:dm-container lg:flex lg:gap-6 lg:gap-8;
}
</style>
