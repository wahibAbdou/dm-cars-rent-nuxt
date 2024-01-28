<script lang="ts" setup>
const isFavorite = ref(false);

const favoriteItem = () => {
	isFavorite.value = !isFavorite.value;
};
</script>

<template>
	<div class="dm-product-card">
		<div class="card-header">
			<div>
				<h4>Honda Accord</h4>
				<IconsHeart
					@click.native="favoriteItem"
					:fill="
						isFavorite
							? 'var(--heart-icon-active-color)'
							: 'var(--icon-default-color)'
					"
				/>
			</div>
			<span>Sedan</span>
		</div>
		<div class="card-body">
			<div class="card-cover">
				<img
					src="https://dm-assignment-commonshare.koyeb.app/img/1.png"
					alt="Honda Accord"
				/>
			</div>
			<div class="card-labels">
				<UtilsProductLabel text="65L">
					<IconsGasoline />
				</UtilsProductLabel>
				<UtilsProductLabel text="Manual">
					<IconsCar />
				</UtilsProductLabel>
				<UtilsProductLabel text="2 People">
					<IconsCapacity />
				</UtilsProductLabel>
			</div>
		</div>
		<div class="card-footer">
			<UtilsPriceLabel :price="60" />
			<div>
				<UtilsButton text="Rental Now" />
			</div>
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
			@apply relative h-[66.2px] mb-14;
			&:after {
				content: '';
				@apply absolute left-0 right-0 h-11 bottom-0 bg-gradient-to-t from-white to-transparent;
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
}
</style>
