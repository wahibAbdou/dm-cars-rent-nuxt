<script lang="ts" setup>
const heroCardContent = [
	{
		key: 'hero-card-light',
		title: 'The Best Platform for Car Rental',
		description:
			'Ease of doing a car rental safely and reliably. Of course at a low price.',
		ctaTextButton: 'Rental Car',
		mode: 'light',
	},
	{
		key: 'hero-card-primary',
		title: 'Easy way to rent a car at a low price',
		description:
			'Providing cheap car rental services and safe and comfortable facilities.',
		ctaTextButton: 'Rental Car',
		mode: 'primary',
	},
];
</script>

<template>
	<div class="dm-hero">
		<UtilsHeroCard
			v-for="{
				key,
				title,
				description,
				ctaTextButton,
				mode,
			} in heroCardContent"
			:key
			:title
			:description
			:ctaTextButton
			:mode
			:class="{ hidden: mode === 'primary', 'lg:block': mode === 'primary' }"
		/>
	</div>
</template>

<style lang="scss" scoped>
.dm-hero {
	@apply dm-container flex gap-6 my-8;
}
</style>
