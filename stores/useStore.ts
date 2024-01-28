import type { ProductCards, ProductCardsRef } from "~/types";

export const useStore = defineStore('useStore', () => {
	// State
	const popularCars: ProductCardsRef = ref([]);

	// Getters & Setters
	const getPopularCars = computed(() => popularCars.value);
	const setPopularCars = (payload: ProductCards) => (popularCars.value = payload);

	return { popularCars, getPopularCars, setPopularCars };

});