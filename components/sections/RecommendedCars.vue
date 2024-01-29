<script lang="ts" setup>
import type { RecommendedCars } from '~/types';

withDefaults(defineProps<RecommendedCars>(), {
	showMoreButton: true,
});

const store = useStore();

const fetchNextPage = (page: number) => {
	store.fetchRecommendedCars(page);
};
</script>

<template>
	<UtilsHeaderSection title="Recommended Cars" />
	<div class="dm-recommended-cars">
		<div>
			<UtilsProductCard
				class="flex-1"
				v-for="{
					id,
					index,
					name,
					type,
					img,
					gasolineLiter,
					kindOfTransition,
					people,
					pricePerDay,
				} in data"
				:key="id"
				:index
				:id
				:name
				:type
				:img
				:gasolineLiter
				:kindOfTransition
				:people
				:pricePerDay
				:enableSplitView="true"
			/>
		</div>
		<UtilsButton
			v-if="showMoreButton"
			v-show="store.getShowMoreButton"
			@click.native="fetchNextPage(store.getNextPage)"
			text="Show More Cars"
		/>
	</div>
</template>

<style lang="scss" scoped>
.dm-recommended-cars {
	@apply dm-container mb-11 text-center;
	> div {
		@apply grid grid-cols-1 gap-5 mb-6;
		@apply md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:mb-11;
	}
}
</style>
