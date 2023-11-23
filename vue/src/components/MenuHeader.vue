<script setup lang='ts'>
  const links = ['About','StudyRecord','User','Messages','Setting']
</script>

<template>
<v-app-bar
	app
	color='white'
	flat
	>
	<v-container class='py-0 fill-height'>
		<v-avatar
			class='mr-10'
			color='grey darken-1'
			size='32'
		></v-avatar>

		<v-btn variant='text'
			v-for="link in links"
			:key="link" :to="link"
		>
			{{ link }}
		</v-btn>
		<v-responsive max-width='260'>
			<v-text-field
			dense
			flat
			hide-details
			rounded
			solo-inverted
			>STATUS 勉強中</v-text-field>
		</v-responsive>
  </v-container>
</v-app-bar>
</template>