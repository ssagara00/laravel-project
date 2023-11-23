<script setup lang='ts'>
	import MenuHeader from '../components/MenuHeader.vue'
	import SideBar from '../components/SideBar.vue'
</script>

<template>
<MenuHeader />

<v-main class='grey lighten-3'>
	<v-container>
		<v-row>
			<SideBar />

			<v-col>
				<v-sheet
					min-height='70vh'
					rounded='lg'
				>
					<h1 class='hoge'>toppage</h1>
					<h2>ようこそ</h2>
					<router-link to='/timer'>勉強時間を記録する</router-link>
					<br />
					<router-link to='/login'>会員の方はこちら</router-link>
				</v-sheet>
			</v-col>

		</v-row>
	</v-container>
</v-main>
</template>