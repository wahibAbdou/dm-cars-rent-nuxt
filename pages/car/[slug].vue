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
</script>

<template>
	<div>
		<SectionsRecommendedCars :data="recommendedCars" :showMoreButton="false" />
	</div>
</template>

<style scoped></style>
