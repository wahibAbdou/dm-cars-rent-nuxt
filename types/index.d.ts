export interface HeartFill {
	fill?: string;
}

export interface HeroCardProps {
	title?: string;
	description?: string;
	ctaTextButton?: string;
	mode?: 'primary' | 'light';
	carImage?: string;
}

export interface ButtonProps {
	text?: string;
	classes?: 'btn-primary' | 'btn-light';
}

export interface ProductLabel {
	text?: string;
}

export interface PriceLabel {
	price: string;
}

export interface ProductCard {
	index: number,
	id: string;
	name: string;
	type: string;
	img: string;
	gasolineLiter: string;
	kindOfTransition: string;
	people: string;
	pricePerDay: string;
	enableSplitView?: boolean | false;
}

export interface ProductCardRef {
	value: ProductCard[];
}

export interface ProductCards {
	data: Ref | ProductCardsMap[] | ProductCardRef[] | ProductCard[] | null | undefined;
}

export interface ProductCardsMap {
	map<T>(
		arg0: (
			carDetails: ProductCardRaw,
			index: number
		) => {
			index: number;
			id: string;
			name: string;
			type: string;
			img: string;
			gasolineLiter: string;
			kindOfTransition: string;
			people: string;
			pricePerDay: string;
		}
	): ProductCards;
}

export interface ProductCardsRef {
	value: ProductCards | never[];
}

export interface RecommendedCars {
	data: ProductCards;
	showMoreButton?: boolean;
}

export interface Car {
	name: string
	type: string
	description: string
	gasolineLiter: number
	kindOfTransition: string
	people: number
	pricePerDay: number
	id: string
	img: string
	images: Image[]
}

export interface Image {
	url: string
}

export interface ProductSliderProps {
	carImage: string;
	images: string[];
}

export interface ProductDetailsProps {
	details: Car;
}

export interface FavoriteProductProps {
	productId: string,
	enableSplitView?: boolean;
}

export interface MetaData {
	total: number,
	last_page: number
}

export interface Response {
	data: ProductCardsMap,
	meta?: MetaData
}

