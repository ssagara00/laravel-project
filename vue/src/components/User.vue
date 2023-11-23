<script setup lang='ts'>
import { onMounted, reactive } from 'vue'
import { getUsers } from '../api/user'
import { User } from '../api/interface'

interface State {
	users: User[]
}

const lists = reactive<State>({
	users: [],
})

const handleGetUsers = async () => {
	try {
		const res = await getUsers()

		if (res?.status === 200) {
			lists.users = res.data
		}
	} catch (err) {
		console.log(err)
	}
}

onMounted(() => {
	handleGetUsers()
})
</script>

<template>
	<h1>User List</h1>
	<v-container>
    <v-table>
      <thead>
        <tr>
          <th class='text-left'>
            都道府県
          </th>
          <th class='text-right'>
            No
          </th>
          <th class='text-right'>
            面積
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
				v-for="user in lists.users"
				v-bind:key="user.id"
        >
          <td>{{ user.name }}</td>
          <td class='text-right'>{{ user.name }}</td>
          <td class='text-right'>{{ user.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>