<script lang="ts" setup>
interface PriceLabel {
	price?: number;
}
const props = withDefaults(defineProps<PriceLabel>(), {
	price: 0,
});
</script>

<template>
	<div class="dm-price-label">
		<h4>${{ price.toFixed(2) }}/</h4>
		<span>day</span>
	</div>
</template>

<style lang="scss" scoped>
.dm-price-label {
	@apply flex items-end gap-1;

	h4 {
		@apply text-secondary-color text-base font-bold;
	}

	span {
		@apply text-label-color text-sm font-semibold;
	}
}
</style>
