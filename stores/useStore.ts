import type { ProductCards, ProductCardsRef, Car, Response } from "~/types";

export const useStore = defineStore('useStore', () => {
	// State (Favorite Cars)
	const favoriteCars: Ref<string[]> = ref([]);

	// State (Popular Cars)
	const popularCars: ProductCardsRef = ref([]);

	// State (Recommended Cars)
	const recommendedCars: ProductCardsRef = ref([]);
	const nextPage: Ref<number> = ref(2);
	const lastPage: Ref<number | undefined> = ref(undefined);

	// State (Car)
	const car: Ref<Car | undefined> = ref();


	// Getters & Setters (Favorite Cars)
	const getFavoriteCars = computed(() => favoriteCars.value);
	const setFavoriteCars = (payload: string) => (favoriteCars.value = [...favoriteCars.value, payload]);
	const removeFavoriteCar = (payload: string) => (favoriteCars.value = favoriteCars.value.filter(Item => Item !== payload));


	// Getters & Setters (Popular Cars)
	const getPopularCars = computed(() => popularCars.value);
	const setPopularCars = (payload: ProductCards) => (popularCars.value = payload);

	// Getters & Setters (Recommended Cars)
	const getRecommendedCars = computed(() => recommendedCars.value);
	const getRecommendedCarsLimited = computed(() => recommendedCars.value.slice(0, 8));
	const getNextPage: ComputedRef<number> = computed(() => nextPage.value);
	const getLastPage: ComputedRef<number | undefined> = computed(() => lastPage.value);
	const getShowMoreButton = computed(() => lastPage.value ? nextPage.value <= lastPage.value : true)

	const setNextPage = (payload: number) => (nextPage.value = payload);
	const setLastPage = (payload: number | undefined) => (lastPage.value = payload);
	const setRecommendedCars = (payload: ProductCards) => (recommendedCars.value = payload);

	// Getters & Setters (Car)
	const getCar = computed(() => car.value);

	const setCar = (payload: Car) => (car.value = payload);


	// Actions (Recommended Cars)
	const fetchPopularCars = async () => {

		try {
			const data: Response = await $fetch('/api/reverse-proxy-popular-cars')

			setPopularCars(data);
			return data;
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

			// const cloneRecommendedCars: any = 

			const recommendedCars: any = page === 1 ? data : [...getRecommendedCars.value, ...data]

			// Update the state
			setRecommendedCars(recommendedCars)
			return recommendedCars;

		} catch (err) {
			console.error(err);
		}
	}

	// Actions (Recommended Cars)
	const fetchCar = async (slug: string) => {

		try {

			const data: Car = await $fetch(`/api/reverse-proxy-car?slug=${slug}`)

			// Update the state
			setCar(data);
			return data;

		} catch (err) {
			console.error(err);
		}
	}

	return {
		// Favorite Cars
		favoriteCars,
		getFavoriteCars,
		setFavoriteCars,
		removeFavoriteCar,

		// Popular Cars
		popularCars, getPopularCars, fetchPopularCars,

		// Recommended Cars
		recommendedCars, getRecommendedCars, getRecommendedCarsLimited, getShowMoreButton, getNextPage, getLastPage, fetchRecommendedCars,

		// Car
		car,
		getCar,
		fetchCar
	};

});