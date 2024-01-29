<script lang="ts" setup>
import type { ProductDetailsProps } from '~/types';

defineProps<ProductDetailsProps>();
</script>

<template>
	<div class="dm-product-details">
		<div class="product-details-header">
			<div>
				<h2>{{ details.name }}</h2>
				<div class="rating-reviews">
					<div class="rating">
						<IconsStar v-for="start in 4" />
						<IconsStarEmpty />
					</div>
					<span>440+ Reviewers</span>
				</div>
			</div>
			<UtilsFavoriteProduct :productId="details.id" />
		</div>

		<div class="product-details-body">
			<p>{{ details.description }}</p>

			<div class="detail-row">
				<span>Type Car</span>
				<span>{{ details.type }}</span>
				<span>Capacity</span>
				<span>{{ details.people }}</span>
			</div>
			<div class="detail-row">
				<span>Steering</span>
				<span>{{ details.kindOfTransition }}</span>
				<span>Gasoline</span>
				<span>{{ details.gasolineLiter }}</span>
			</div>
		</div>

		<div class="product-footer">
			<UtilsPriceLabel :price="details.pricePerDay" />
			<UtilsButton text="Rental Now" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dm-product-details {
	@apply bg-white rounded-xl p-5 space-y-8;

	.product-details-header {
		@apply flex gap-3;
		@apply lg:gap-6;

		h2 {
			@apply font-semibold text-xl;
			@apply md:text-2xl;
		}

		.rating-reviews {
			@apply flex gap-2 items-center;

			.rating {
				@apply flex gap-1;
				svg {
					@apply md:w-4 md:h-5;
				}
			}
			span {
				@apply text-xs text-label-color;
				@apply md:text-sm;
			}
		}
	}

	.product-details-body {
		@apply space-y-4 text-sm;
		p {
			@apply text-label-color;
		}

		.detail-row {
			@apply flex justify-between;
			span {
				@apply flex-1 font-semibold;

				&:nth-child(1) {
					@apply text-label-color font-normal;
				}

				&:nth-child(3) {
					@apply text-label-color font-normal;
				}
			}
		}
	}

	.product-footer {
		@apply flex justify-between items-center;

		button {
			@apply py-2.5 px-4 text-sm;
		}
	}
}
</style>
