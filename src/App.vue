<template>
	<v-app>
		<battle-status></battle-status>
		<v-main>
			<add-hero></add-hero>
			<hero-list></hero-list>
		</v-main>
		<v-footer border class="bg-grey-lighten-5" app>
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

<style></style>
