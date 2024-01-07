<script setup lang='ts'>
	import { Logout } from '../api/user'
	import { useAppStore } from '../store/index'
  import { useRouter } from 'vue-router'

  const links = ['About','StudyRecord','User','Timer','Setting']
	const store = useAppStore()
  const router = useRouter()

	const logout = async() => {
		try {
      const res = await Logout()
			if (res?.status === 200) {
				store.$reset()
				router.push('/login')
			} else {
				console.log(res?.data)
			}
		} catch (err) {
			console.log(err)
		}
	}
</script>

<template>
<v-app-bar
	app
	color='white'
	flat
	>
	<v-container class='py-0 fill-height'>
		<v-btn @click='logout' v-if="store.login == true">ログアウト</v-btn>
		<v-btn variant='text' href="/">Home</v-btn>
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