<script lang="ts" setup>
const settings = ref({
	itemsToShow: 1.2,
	snapAlign: 'start',
});

const breakpoints = {
	// 700px and up
	768: {
		itemsToShow: 2.5,
		snapAlign: 'center',
	},
};
</script>

<template>
	<div class="md-mobile-carousel">
		<Carousel v-bind="settings" :breakpoints="breakpoints">
			<Slide v-for="slide in 10" :key="slide">
				<div class="carousel__item">
					<UtilsProductCard />
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
