<template>
	<v-card-text class="d-flex flex-wrap">
		<status-hero v-for="status in statuses" :status="status"></status-hero>
	</v-card-text>
</template>
<script>
import StatusHero from '@/components/StatusHero'
export default {
	name: 'StatusList',
	components: {
		StatusHero,
	},
	data() {
		return {
			statuses: [
				{
					name: 'Умер',
					color: 'black',
					active: false,
				},
				{
					name: 'Бессознательный',
					color: 'red',
					active: false,
				},
				{
					name: 'Испуганный',
					color: 'purple',
					active: false,
				},
				{
					name: 'Истощенный',
					color: 'deep-purple',
					active: false,
				},
				{
					name: 'Окаменевший',
					color: 'pink',
					active: false,
				},
				{
					name: 'Опутанный',
					color: 'indigo',
					active: false,
				},
				{
					name: 'Ослепленный',
					color: 'blue',
					active: false,
				},
				{
					name: 'Отравленный',
					color: 'light-blue',
					active: false,
				},
				{
					name: 'Очарованный',
					color: 'cyan',
					active: false,
				},
				{
					name: 'Ошеломленный',
					color: 'teal',
					active: false,
				},
				{
					name: 'Парализованный',
					color: 'green',
					active: false,
				},
				{
					name: 'Сбитый с ног',
					color: 'light-green',
					active: false,
				},
				{
					name: 'Схваченный',
					color: 'lime',
					active: false,
				},
			],
		}
	},
}
</script>
