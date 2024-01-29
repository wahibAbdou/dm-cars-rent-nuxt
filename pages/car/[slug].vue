<script lang="ts" setup>
// Init store
const store = useStore();
const route = useRoute();

// Get list of recommended cars
await useAsyncData(
	'recommendedCars',
	async () => await store.fetchRecommendedCars()
);

const { slug } = route.params;

await useAsyncData('car', async () => await store.fetchCar(slug));

// Computed
const recommendedCars = computed(() => store.getRecommendedCarsLimited);
const car = computed(() => store.getCar);
</script>

<template>
	<div class="dm-car">
		<div class="dm-product">
			<div class="md:w-2/5">
				<UtilsProductSlider :carImage="car.img" :images="car.images" />
			</div>
			<div>
				<UtilsProductDetails :details="car" />
			</div>
		</div>
		<SectionsRecommendedCars :data="recommendedCars" :showMoreButton="false" />
	</div>
</template>

<style lang="scss" scoped>
.dm-car {
	@apply mt-8;
	.dm-product {
		@apply dm-container flex flex-col gap-8 mb-11;
		@apply lg:flex-row;
	}
}
</style>
