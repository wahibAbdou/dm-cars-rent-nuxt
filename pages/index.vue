<script lang="ts" setup>
import type { ProductCards, ProductCardsMap } from '~/types';

// Accessing env variables
const baseAPIUrl = useEnv('BASE_API_URL');

// Init
const store = useStore();

// Get list of popular cars
const {
	data: { value: popularColumns },
} = await useAsyncData('popularCars', () =>
	$fetch(`${baseAPIUrl}/cars/popular`).then((response) => {
		// Formatting response data
		if (response && Array.isArray(response)) {
			return response.map<ProductCardsMap>((carDetails, index) => {
				const { pricePerDay, people, gasolineLiter } = carDetails;

				return {
					index,
					...carDetails,
					pricePerDay: `$${pricePerDay.toFixed(2)}`,
					people: `${people} People`,
					gasolineLiter: `${gasolineLiter}L`,
				};
			});
		}
	})
);

store.setPopularCars(popularColumns);
</script>

<template>
	<div>
		<UtilsHeader />
		<SectionsHero />
		<SectionsPopularCars :data="popularColumns" />
		<UtilsFooter />
	</div>
</template>

<style scoped></style>
