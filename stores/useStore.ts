import type { ProductCards, ProductCardsRef, Response } from "~/types";

export const useStore = defineStore('useStore', () => {
	// State (Popular Cars)
	const popularCars: ProductCardsRef = ref([]);

	// State (Recommended Cars)
	const recommendedCars: ProductCardsRef = ref([]);
	const nextPage: Ref<number> = ref(2);
	const lastPage: Ref<number | undefined> = ref(undefined);


	// Getters & Setters (Popular Cars)
	const getPopularCars = computed(() => popularCars.value);
	const setPopularCars = (payload: ProductCards) => (popularCars.value = payload);

	// Getters & Setters (Recommended Cars)
	const getRecommendedCars = computed(() => recommendedCars.value);
	const getNextPage: ComputedRef<number> = computed(() => nextPage.value);
	const getLastPage: ComputedRef<number | undefined> = computed(() => lastPage.value);
	const getShowMoreButton = computed(() => lastPage.value ? nextPage.value <= lastPage.value : true)

	const setNextPage = (payload: number) => (nextPage.value = payload);
	const setLastPage = (payload: number | undefined) => (lastPage.value = payload);
	const setRecommendedCars = (payload: ProductCards) => (recommendedCars.value = payload);


	// Actions (Recommended Cars)
	const fetchPopularCars = async () => {

		try {
			// Accessing env variables
			const baseAPIUrl = useEnv('BASE_API_URL');

			const data: Response = await $fetch(`${baseAPIUrl}/cars/popular`)

			const popularCars: any = useProductResponseFormatter(data);

			setPopularCars(popularCars)
			return popularCars;

		} catch (err) {
			console.error(err);
		}
	}

	// Actions (Recommended Cars)
	const fetchRecommendedCars = async (page = 1) => {

		try {
			const { data, meta }: any = await $fetch(`/api/reverse-proxy-cars?page=${page}`)

			// Update the nextPage anchor if not last page
			if (getNextPage <= getLastPage) setNextPage(getNextPage.value + 1)
			if (meta) setLastPage(meta.last_page)

			const cloneRecommendedCars: any = getRecommendedCars.value

			const recommendedCars: any = [...cloneRecommendedCars, ...data]

			// Update the state
			setRecommendedCars(recommendedCars)
			return recommendedCars;

		} catch (err) {
			console.error(err);
		}
	}

	return {
		// Popular Cars
		popularCars, getPopularCars, fetchPopularCars,
		// Recommended Cars
		recommendedCars, getRecommendedCars, getShowMoreButton, getNextPage, getLastPage, fetchRecommendedCars
	};

});