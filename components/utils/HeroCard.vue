<script lang="ts" setup>
import carPrimary from '~/assets/images/car-image-primary.png';
import carLight from '~/assets/images/car-image-light.png';

interface HeroCardProps {
	title?: string;
	description?: string;
	ctaTextButton?: string;
	mode?: 'primary' | 'light';
}

const props = withDefaults(defineProps<HeroCardProps>(), {
	title: 'Default Primary Card',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
	mode: 'primary',
});

const cardClasses = computed<
	'dm-hero-card card-primary' | 'dm-hero-card card-light'
>(() => `dm-hero-card card-${props.mode}`);

const btnClasses = computed<'btn-primary' | 'btn-light'>(
	() => `btn-${props.mode === 'primary' ? 'light' : 'primary'}`
);

const imgSource = computed(() =>
	props.mode === 'primary' ? carPrimary : carLight
);
</script>

<template>
	<div :class="cardClasses">
		<div class="content">
			<h1>{{ title }}</h1>
			<p>{{ description }}</p>
			<UtilsButton :text="ctaTextButton" :classes="btnClasses" />
		</div>
		<img :src="imgSource" alt="rental cars" />
	</div>
</template>

<style lang="scss" scoped>
.dm-hero-card {
	@apply flex-1 bg-cover rounded-lg overflow-hidden text-white p-4;
	@apply lg:px-6 lg:pt-8 lg:pb-2;
	@apply lg:bg-cover;
	.content {
		@apply w-72;
		h1 {
			@apply text-lg mb-3;
			@apply lg:mb-4 lg:text-3xl lg:font-semibold;
		}
		p {
			@apply w-60 mb-4 text-sm;
			@apply lg:mb-5 lg:text-base lg:w-auto;
		}
		button {
			@apply mb-10 text-sm;
			@apply lg:text-base lg:mb-0;
		}
	}
}
.card-primary {
	@apply hidden bg-hero-card-primary;
	@apply lg:block;
	img {
		@apply ml-36;
	}
}

.card-light {
	@apply bg-hero-card-light-mobile -mt-40;
	@apply lg:bg-hero-card-light lg:mt-0;
	img {
		@apply w-56 mx-auto;
		@apply md:w-80 lg:w-96 lg:ml-28;
	}
}
</style>
