<template>
	<v-card color="light-green-lighten-5">
		<v-card-title class="d-flex flex-wrap"
			>{{ hero.name }}
			<v-chip
				class="mx-2"
				prepend-icon="mdi-heart-outline"
				variant="outlined"
				color="pink"
				>25 / {{ hero.hp }}</v-chip
			>
			<v-chip
				class="mx-2"
				prepend-icon="mdi-dice-multiple-outline"
				variant="outlined"
				color="blue"
				>{{ hero.initiative }}</v-chip
			>
			<v-chip
				class="mx-2"
				prepend-icon="mdi-shield-outline"
				variant="outlined"
				color="deep-orange"
				>{{ hero.ac }}</v-chip
			>
		</v-card-title>
		<v-divider class="mx-4 mb-1"></v-divider>
		<v-card-subtitle>
			<v-text-field
				variant="underlined"
				append-inner-icon="mdi-plus"
				prepend-inner-icon="mdi-minus"
			></v-text-field>
		</v-card-subtitle>
		<v-card-text class="d-flex flex-wrap">
			<v-btn rounded="xl" class="ma-1" size="x-small" color="purple"
				>Истощенный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="black">Умер</v-btn>
		</v-card-text>
		<v-divider class="mx-4 mb-1"></v-divider>
		<v-card-text class="d-flex flex-wrap">
			<v-btn rounded="xl" class="ma-1" size="x-small" color="red"
				>Бессознательный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="pink"
				>Испуганный &mdash; 36 секунд</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="deep-purple"
				>Окаменевший</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="indigo"
				>Опутанный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="blue"
				>Ослепленный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="light-blue"
				>Отравленный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="cyan"
				>Очарованный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="teal"
				>Ошеломленный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="green"
				>Парализованный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="light-green"
				>Сбитый с ног</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="lime"
				>Схваченный</v-btn
			>
			<v-btn rounded="xl" class="ma-1" size="x-small" color="grey"
				>Неактивный</v-btn
			>
		</v-card-text>
	</v-card>
</template>
<script>
export default {
	name: 'Hero',
	props: {
		hero: {
			type: Object,
			required: true,
		},
	},
}
</script>
