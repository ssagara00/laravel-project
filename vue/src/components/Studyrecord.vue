<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { getStudyrecords } from "../api/studyrecord"
import { StudyRecord } from "../api/interface"

interface State {
	studyrecords: StudyRecord[]
}

const records = reactive<State>({
	studyrecords: [],
})

const handleGetStudyrecords = async () => {
	try {
		const res = await getStudyrecords()

		if (res?.status === 200) {
			records.studyrecords = res.data
		}
	} catch (err) {
		console.log(err)
	}
}

onMounted(() => {
	handleGetStudyrecords()
});
</script>

<template>
	<div>
		<h1>Time List</h1>
		<p v-for="record in records.studyrecords" v-bind:key="record.id">
			{{ record.hour }}
		</p>
	</div>
</template>