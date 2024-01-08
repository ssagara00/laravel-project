<script setup lang='ts'>
import { onMounted, reactive } from 'vue'
import { getStudyrecords } from '../api/studyrecord'
import { StudyRecord } from '../api/interface'
import { VDataTable } from 'vuetify/labs/components'

// readonly Headerを定義
type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>> ? UnwrapReadonlyArrayType<I> : A
type DT = InstanceType<typeof VDataTable>
type ReadonlyDataTableHeader = UnwrapReadonlyArrayType<DT['headers']>

interface State {
	studyrecords: StudyRecord[]
}

const headers: ReadonlyDataTableHeader[] = [
	{ title: 'ID', align: 'start', key: 'id', sortable: true },
	{ title: 'ユーザー名', align: 'end', key: 'user_id' },
	{ title: 'Date', align: 'end', key: 'date' },
	{ title: 'hour', align: 'end', key: 'hour' },
]

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
})
</script>

<template>
	<h1>Time List</h1>
	<v-container class="fill-height">
		<v-row>
			<v-col>
				<v-data-table :headers="headers" :items="records.studyrecords" class="elevation-1" item-value="name">
				</v-data-table>
			</v-col>
		</v-row>
	</v-container>
</template>