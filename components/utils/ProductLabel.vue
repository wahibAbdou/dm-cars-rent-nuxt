<script lang="ts" setup>
import type { ProductLabel } from '~/types';

const props = withDefaults(defineProps<ProductLabel>(), {
	text: 'Default Product Label',
});
</script>

<template>
	<div class="dm-product-label">
		<slot></slot>
		<span>
			{{ text }}
		</span>
	</div>
</template>

<style lang="scss" scoped>
.dm-product-label {
	@apply flex items-center gap-1 text-label-color text-sm;
}
</style>
