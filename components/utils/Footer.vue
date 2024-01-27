<script lang="ts" setup>
const sectionsContent = [
	{
		id: 'about-section',
		title: 'About',
		links: [
			{
				id: 'how-it-works-link',
				title: 'How it works',
				link: '#',
			},
			{
				id: 'featured-link',
				title: 'Featured',
				link: '#',
			},
			{
				id: 'partnership-link',
				title: 'Partnership',
				link: '#',
			},
			{
				id: 'business-relation-link',
				title: 'Business Relation',
				link: '#',
			},
		],
	},
	{
		id: 'community-section',
		title: 'Community',
		links: [
			{
				id: 'events-link',
				title: 'Events',
				link: '#',
			},
			{
				id: 'blog-link',
				title: 'Blog',
				link: '#',
			},
			{
				id: 'podcast-link',
				title: 'Podcast',
				link: '#',
			},
			{
				id: 'invite-a-friend-link',
				title: 'Invite a friend',
				link: '#',
			},
		],
	},
	{
		id: 'socials-section',
		title: 'Socials',
		links: [
			{
				id: 'discord-link',
				title: 'Discord',
				link: '#',
			},
			{
				id: 'instagram-link',
				title: 'Instagram',
				link: '#',
			},
			{
				id: 'twitter-link',
				title: 'Twitter',
				link: '#',
			},
			{
				id: 'facebook-link',
				title: 'Facebook',
				link: '#',
			},
		],
	},
];

const copyrightsText = computed(
	() => `© ${new Date().getFullYear()} DM. All rights reserved`
);
</script>

<template>
	<div class="bg-white">
		<div class="dm-footer">
			<div>
				<div>
					<UtilsLogo />
					<p>
						Our vision is to provide convenience and help increase your sales
						business.
					</p>
				</div>
				<div>
					<div
						v-for="{ id, title, links } in sectionsContent"
						:key="id"
						:class="{
							'order-last': id === 'community-section',
							'lg:order-none': id === 'community-section',
						}"
					>
						<h4>{{ title }}</h4>
						<ul>
							<li v-for="{ id, title, link } in links" :key="id">
								<NuxtLink :to="link">
									{{ title }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<span>{{ copyrightsText }}</span>
				<ul>
					<li>Privacy & Policy</li>
					<li>Terms & Condition</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dm-footer {
	@apply dm-container;
	> div {
		@apply flex flex-col justify-between;
		@apply lg:flex-row;

		&:first-child {
			@apply pt-1.5 pb-11;
			@apply lg:border-b lg:border-b-zinc-300 lg:pt-20;

			> div:first-child {
				@apply mb-14;
				@apply lg:mb-0;
				svg {
					@apply w-11 h-11 mt-3 mb-7;
					@apply lg:w-auto lg:h-auto;
				}

				p {
					@apply w-72 text-sm leading-relaxed text-slate-500;
					@apply lg:text-base;
				}
			}

			> div:last-child {
				@apply flex gap-20 flex-wrap;

				h4 {
					@apply mb-7 text-xl text-slate-900 font-semibold;
					@apply lg:mb-10;
				}

				ul {
					@apply space-y-6;
					li {
						@apply text-lg text-slate-400;
						@apply lg:text-zinc-500 lg:font-normal;
					}
				}
			}
		}

		&:last-child {
			@apply flex flex-col-reverse pt-8 pb-3 font-medium text-gray-900 text-xs;
			@apply lg:flex-row lg:text-base lg:pb-7;
			> ul {
				@apply flex justify-between gap-11 mb-9;
				@apply lg:justify-normal;
			}
		}
	}
}
</style>
