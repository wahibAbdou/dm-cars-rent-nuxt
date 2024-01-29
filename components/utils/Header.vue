<script lang="ts" setup></script>

<template>
	<div class="bg-white">
		<div class="dm-header">
			<NuxtLink to="/" class="lg:ml-12">
				<UtilsLogo />
			</NuxtLink>
			<div class="last">
				<UtilsSearchInput class="hidden lg:block" />
				<UtilsFavoriteItems />
			</div>
		</div>
		<div class="search-mobile">
			<UtilsSearchInput />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dm-header {
	@apply dm-container flex justify-between items-center gap-32 pt-9 pb-6;
	@apply lg:justify-normal lg:py-9;
	.last {
		@apply flex flex-1 justify-end;
		@apply lg:justify-normal lg:gap-7;
	}
}

.search-mobile {
	@apply dm-container pb-40;
	@apply lg:hidden;
}
</style>
