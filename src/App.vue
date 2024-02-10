<template>
	<v-app>
		<battle-status></battle-status>
		<v-main class="main">
			<add-hero></add-hero>
			<hero-list></hero-list>
		</v-main>
		<v-footer border class="bg-grey-lighten-5 d-flex flex-wrap" app>
			<v-btn variant="plain" disabled>{{ new Date().getFullYear() }}</v-btn>
			<v-btn variant="plain" disabled>Lev Vorobyov</v-btn>
			<v-btn variant="text" href="https://vk.com/lev2die" target="_blank"
				>VK</v-btn
			>
			<v-btn variant="text" href="https://github.com/thylaakari" target="_blank"
				>GitHub</v-btn
			>
		</v-footer>
	</v-app>
</template>

<script>
import AddHero from '@/components/AddHero'
import BattleStatus from '@/components/BattleStatus'
import HeroList from '@/components/HeroList'
export default {
	name: 'App',
	components: {
		BattleStatus,
		AddHero,
		HeroList,
	},
}
</script>

<style>
.main {
	background: #ebebe6
		url('https://images.ctfassets.net/swt2dsco9mfe/1tr6dUNuH2vNfUWXtUGnSh/991457a16f93c5df49cf32e1d343bde9/bg-media-gallery.jpg?q=70&w=1920&h=754&fit=crop&f=center&fm=avif')
		no-repeat center center;
}
</style>
