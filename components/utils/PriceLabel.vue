<script lang="ts" setup>
import type { PriceLabel } from '~/types';

const props = withDefaults(defineProps<PriceLabel>(), {
	price: '$00.00',
});
</script>

<template>
	<div class="dm-price-label">
		<h4>{{ price }}/</h4>
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
