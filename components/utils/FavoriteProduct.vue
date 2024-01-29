<script lang="ts" setup>
import type { FavoriteProductProps } from '~/types';

const store = useStore();

const props = withDefaults(defineProps<FavoriteProductProps>(), {
	enableSplitView: false,
});

const isFavorite = computed(() =>
	store.getFavoriteCars.includes(props.productId)
);

const favoriteItem = () => {
	if (!store.getFavoriteCars.includes(props.productId))
		store.setFavoriteCars(props.productId);
	else store.removeFavoriteCar(props.productId);
};
</script>

<template>
	<IconsHeart
		@click.native="favoriteItem"
		:class="{ 'w-5': enableSplitView, 'lg:w-auto': enableSplitView }"
		:fill="
			isFavorite
				? 'var(--heart-icon-active-color)'
				: 'var(--icon-default-color)'
		"
	/>
</template>

<style scoped></style>
