<script lang="ts" setup>
import type { ProductCards } from '~/types';

const props = defineProps<ProductCards>();

const settings = ref({
	itemsToShow: 1.2,
	snapAlign: 'start',
});

const breakpoints = {
	768: {
		itemsToShow: 2.5,
		snapAlign: 'center',
	},
};
</script>

<template>
	<div class="md-mobile-carousel">
		<Carousel v-bind="settings" :breakpoints="breakpoints">
			<Slide
				v-for="{
					id,
					index,
					name,
					type,
					gasolineLiter,
					kindOfTransition,
					people,
					pricePerDay,
					img,
				} in data"
				:key="id"
			>
				<div class="carousel__item">
					<UtilsProductCard
						:index
						:id
						:name
						:type
						:gasolineLiter
						:kindOfTransition
						:people
						:pricePerDay
						:img
					/>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<style lang="scss" scoped>
.md-mobile-carousel {
	@apply ml-7 mb-14;
	@apply lg:hidden;
	.carousel__item {
		@apply mr-6 lg:mr-0;
	}
}
</style>
