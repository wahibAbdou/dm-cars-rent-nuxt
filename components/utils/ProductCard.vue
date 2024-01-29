<script lang="ts" setup>
import type { ProductCard } from '~/types';

const props = defineProps<ProductCard>();

const isFavorite = ref(false);

const favoriteItem = () => {
	isFavorite.value = !isFavorite.value;
};
</script>

<template>
	<div class="dm-product-card">
		<div class="card-header">
			<div>
				<h4>{{ name }}</h4>
				<IconsHeart
					@click.native="favoriteItem"
					:class="{ 'w-5': enableSplitView, 'lg:w-auto': enableSplitView }"
					:fill="
						isFavorite
							? 'var(--heart-icon-active-color)'
							: 'var(--icon-default-color)'
					"
				/>
			</div>
			<span>{{ type }}</span>
		</div>
		<div
			:class="{
				'card-body': true,
				'split-view': enableSplitView,
			}"
		>
			<div class="card-cover">
				<img :src="img" :alt="name" />
			</div>
			<div class="card-labels">
				<UtilsProductLabel :text="gasolineLiter">
					<IconsGasoline />
				</UtilsProductLabel>
				<UtilsProductLabel :text="kindOfTransition">
					<IconsCar />
				</UtilsProductLabel>
				<UtilsProductLabel :text="people">
					<IconsCapacity />
				</UtilsProductLabel>
			</div>
		</div>
		<div class="card-footer">
			<UtilsPriceLabel :price="pricePerDay" />
			<NuxtLink :to="`/car/${id}`">
				<UtilsButton text="Rental Now" />
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dm-product-card {
	@apply bg-white rounded-xl p-5;
	.card-header {
		@apply flex flex-col items-start mb-12;
		div {
			@apply w-full flex justify-between items-center mb-1;

			h4 {
				@apply text-secondary-color font-semibold text-base;
			}
		}
		span {
			@apply text-label-color;
		}
	}

	.card-body {
		.card-cover {
			@apply relative w-full mb-14;
			&:after {
				content: '';
				@apply absolute left-0 right-0 bottom-0 h-11 bg-gradient-to-t from-white to-transparent;
			}

			img {
				@apply w-5/6 mx-auto;
			}
		}

		.card-labels {
			@apply flex justify-between items-center mb-8;
		}
	}

	.card-footer {
		@apply flex justify-between items-center;

		button {
			@apply py-2.5 px-4 text-sm;
		}
	}

	// Enabling the split view mode only before small and medium screen (lg prefix is equal to 1024px based on TailwindCSS)
	@media (max-width: 1024px) {
		.split-view {
			@apply flex justify-between items-center mb-8;

			.card-cover {
				@apply flex-1 mb-0;

				img {
					@apply mx-0;
				}
			}

			.card-labels {
				@apply w-1/3 flex-col items-start gap-3 text-xs mb-0;
			}
		}
	}
}
</style>
