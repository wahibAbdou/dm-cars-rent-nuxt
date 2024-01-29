<script lang="ts" setup>
// Accessing env variables
const baseAPIUrl = useEnv('BASE_API_URL');

// Init
const store = useStore();

// Get list of popular cars
await useAsyncData('popularCars', async () => await store.fetchPopularCars());

// Get list of recommended cars
await useAsyncData('allCars', async () => await store.fetchRecommendedCars());

// Computed
const popularCars = computed(() => store.getPopularCars);
const recommendedCars = computed(() => store.getRecommendedCars);
</script>

<template>
	<div>
		<UtilsHeader />
		<SectionsHero />
		<SectionsPopularCars :data="popularCars" />
		<SectionsRecommendedCars :data="recommendedCars" />
		<UtilsFooter />
	</div>
</template>

<style scoped></style>
