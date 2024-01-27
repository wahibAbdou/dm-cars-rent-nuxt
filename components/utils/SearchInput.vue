<script lang="ts" setup></script>

<template>
	<div class="dm-search-input">
		<IconsSearch />
		<input type="text" placeholder="Search for your favorite car..." />
	</div>
</template>

<style lang="scss" scoped>
.dm-search-input {
	@apply flex-1 relative;
	svg {
		@apply dm-center-y left-5;
	}
	input {
		@apply w-full pl-16 pr-2 py-4 text-slate-800 text-sm rounded-md border border-slate-200;
		@apply lg:py-3 lg:rounded-full;
		@apply focus:outline-none focus:ring-4 focus:ring-primary-light;
	}
}
</style>
