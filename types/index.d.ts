export interface HeartFill {
	fill?: string;
}

export interface HeroCardProps {
	title?: string;
	description?: string;
	ctaTextButton?: string;
	mode?: 'primary' | 'light';
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

interface ProductCardsRef {
	value: ProductCards | never[];
}