<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { getStudyrecords } from "../api/study_record"
import { StudyRecord } from "../api/interface"

interface State {
  studyrecords: StudyRecord[];
}

const records = reactive<State>({
  studyrecords: [],
})

// Todo一覧を取得
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
    <!--<span v-for="time in currentTime" :key="time" class="digital-clock__time">{{
      time
    }}</span>
    {{ letn }}
    <p v-for="todo in state.todos" v-bind:key="todo.id">
      {{ todo.name}}
    </p>-->
  </div>
</template>
<!--
<script lang="ts">
import { defineComponent, reactive,onMounted } from "vue";
import { getTodos } from '../api/user' // APIを呼び出すための関数を読み込む
import { Todo } from '../api/interface'

interface State {
  todos: Todo[]
}
export default defineComponent({
  name: "TimeSample",
  setup() {
    const state = reactive<State>({
      todos: []
    })

    // Todo一覧を取得
    const handleGetTodos = async (): Promise<void> => {
      try {
        const res = await getTodos()

        if (res?.status === 200) {
          state.todos = res.data // todos（配列）に結果を格納
        }
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      handleGetTodos()
    })

    return {
      state
    }
  }
})
</script>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { getTodos } from '../api/user' // APIを呼び出すための関数を読み込む
import { Todo } from '../api/interface'

interface State {
  todos: Todo[]
}

  // Todo一覧を取得
  const handleGetTodos = async (): Promise<void> => {
    try {
      const res = await getTodos()

      if (res?.status === 200) {
        state.todos = res.data // todos（配列）に結果を格納
      }
    } catch (err) {
      console.log(err)
    }
  }

  let letn = 0

  const updateTime = async () =>{
    await setInterval(() => {
      letn++
      //const day = new Date()
      //console.log(day)
    },1000)
  }

  onMounted(() => {
    //updateTime()
    //handleGetTodos()
  })

</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DigitalClock",
  data() {
    return {
      currentTime: {
        hours: "",
        minutes: "",
        seconds: "",
      },
    };
  },
  mounted: function () {
    // 1秒ごとにupdateTimerを実行
    let timerId = setInterval(this.updateTimer, 1000);
  },
  methods: {
    updateTimer() {
      // 現在時刻取得
      const now: Date = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // 時間・分・秒は、0埋め
      this.currentTime["hours"] = String(hours).padStart(2, "0");
      this.currentTime["minutes"] = String(minutes).padStart(2, "0");
      this.currentTime["seconds"] = String(seconds).padStart(2, "0");
    },
  },
});
</script>
-->
