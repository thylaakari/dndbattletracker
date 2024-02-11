<template>
	<v-container fluid>
		<v-row>
			<transition-group name="flip-list">
				<v-col cols="12" md="3" v-for="hero in heroes" :key="hero.id">
					<hero :hero="hero"></hero>
				</v-col>
			</transition-group>
		</v-row>
	</v-container>
</template>
<script>
import Hero from '@/components/Hero'
import { mapGetters } from 'vuex'
export default {
	name: 'HeroList',
	components: {
		Hero,
	},
	computed: {
		...mapGetters({
			heroes: 'heroes/getHeroes',
		}),
	},
}
</script>
<style scoped>
.flip-list-move {
	transition: transform 0.8s ease;
}
</style>
