<script lang="ts" setup>
// Init store
const store = useStore();

// Get list of popular cars
await useAsyncData('popularCars', async () => await store.fetchPopularCars());

// Get list of recommended cars
await useAsyncData(
	'recommendedCars',
	async () => await store.fetchRecommendedCars()
);

// Computed
const popularCars = computed(() => store.getPopularCars);
const recommendedCars = computed(() => store.getRecommendedCars);
</script>

<template>
	<div>
		<SectionsHero />
		<SectionsPopularCars :data="popularCars" />
		<SectionsRecommendedCars :data="recommendedCars" />
	</div>
</template>

<style scoped></style>
