<script lang="ts" setup>
import type { ProductSliderProps } from '~/types';

const props = defineProps<ProductSliderProps>();

const activeImage = ref(props.carImage);
</script>

<template>
	<div class="dm-product-slider">
		<div class="slider-preview">
			<UtilsHeroCard
				v-show="activeImage == props.carImage"
				title="Sports car with the best design and acceleration"
				description="Safety and comfort while driving a futuristic and elegant sports car."
				:carImage="activeImage"
				:class="{ 'active-option': activeImage == url }"
			/>
			<div
				v-show="activeImage !== props.carImage"
				class="image"
				:style="`background-image: url(${activeImage})`"
			></div>
			<!-- <img
				v-show="activeImage !== props.carImage"
				:src="activeImage"
				alt="rental cars"
			/> -->
		</div>
		<div class="slider-options">
			<div
				@click="activeImage = carImage"
				:class="{
					'featured-option': true,
					'active-option': activeImage == carImage,
				}"
			>
				<img :src="carImage" />
			</div>
			<div
				v-for="({ url }, index) in props.images"
				:key="index"
				@click="activeImage = url"
				:style="`background-image: url(${url})`"
				:class="{ 'active-option': activeImage == url }"
			></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dm-product-slider {
	@apply space-y-8;

	.slider-preview {
		.image {
			@apply w-full h-[395px] bg-cover bg-center rounded-lg;
		}
	}

	.slider-options {
		@apply flex gap-6;

		.featured-option {
			@apply bg-hero-card-primary bg-cover;
		}

		> div {
			@apply flex-1 h-20 overflow-hidden cursor-pointer rounded-lg bg-cover bg-center;
			img {
				@apply w-full mx-auto;
			}
		}
	}

	.active-option {
		@apply outline outline-offset-2	outline-primary;
	}
}
</style>
