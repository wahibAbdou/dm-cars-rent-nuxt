<script lang="ts" setup></script>

<template>
	<div class="dm-product-card">
		<div class="card-header">
			<div>
				<h4>Honda Accord</h4>
				<IconsHeart />
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
			<div class="card-footer">
				<UtilsPriceLabel :price="60" />
				<UtilsButton text="Rental Now" />
			</div>
		</div>
		<div></div>
	</div>
</template>

<style lang="scss" scoped>
.dm-product-card {
	@apply bg-white rounded-xl p-5;
	.card-header {
		@apply mb-12;
		div {
			@apply flex justify-between items-center mb-1;

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
			@apply relative mb-14;
			&:after {
				content: '';
				@apply absolute left-0 right-0 h-11 bottom-0 bg-feather-gradient;
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
			@apply py-3 px-6;
		}
	}
}
</style>
