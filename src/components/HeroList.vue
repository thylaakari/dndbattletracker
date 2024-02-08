<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" md="3" v-for="hero in heroes">
				<hero :hero="hero"></hero>
			</v-col>
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
