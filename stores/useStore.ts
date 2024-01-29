import type { ProductCards, ProductCardsRef, Car, Response } from "~/types";

export const useStore = defineStore('useStore', () => {
	// Accessing env variables
	const baseAPIUrl = useEnv('BASE_API_URL');

	// State (Popular Cars)
	const popularCars: ProductCardsRef = ref([]);

	// State (Recommended Cars)
	const recommendedCars: ProductCardsRef = ref([]);
	const nextPage: Ref<number> = ref(2);
	const lastPage: Ref<number | undefined> = ref(undefined);

	// State (Car)
	const car: Ref<Car | undefined> = ref();


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
			const data: Response = await $fetch(`${baseAPIUrl}/cars/popular`)

			const popularCars: any = useProductsResponseFormatter(data);

			setPopularCars(popularCars);
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

			// const cloneRecommendedCars: any = 

			const recommendedCars: any = [...getRecommendedCars.value, ...data]

			// Update the state
			setRecommendedCars(recommendedCars)
			return recommendedCars;

		} catch (err) {
			console.error(err);
		}
	}

	// Actions (Recommended Cars)
	const fetchCar = async (id: string) => {

		try {

			const data: Car = await $fetch(`${baseAPIUrl}/cars/${id}`)

			const { pricePerDay, people, gasolineLiter } = data;
			const car: any = {
				...data,
				pricePerDay: `$${pricePerDay.toFixed(2)}`,
				people: `${people} People`,
				gasolineLiter: `${gasolineLiter}L`,
			};

			// Update the state
			setCar(car);
			return car;

		} catch (err) {
			console.error(err);
		}
	}

	return {
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