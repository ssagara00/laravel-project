<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { getStudyrecords } from "../api/study_record"
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
    <v-btn>
      Button
    </v-btn>
    <p v-for="record in records.studyrecords" v-bind:key="record.id">
      {{ record.hour }}
    </p>
  </div>
</template>