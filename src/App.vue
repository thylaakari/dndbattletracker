<template>
	<v-app>
		<battle-status></battle-status>
		<v-main>
			<add-hero></add-hero>
			<hero-list></hero-list>
		</v-main>
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
