<script setup lang="ts">
import { onMounted, ref } from "vue"

    let time = ref('')
    let day = ref('')
    let mytime = ref('')

    const handleGetTime = () => {
        setInterval(() => {
        const currentDate = new Date()
        const hour = currentDate.getHours().toString().padStart(2, "0")
        const minute = currentDate.getMinutes().toString().padStart(2, "0")
        const second = currentDate.getSeconds().toString().padStart(2, "0")

        time.value = hour + ':' + minute + ':' + second
        day.value = currentDate.getFullYear() + '年' + (currentDate.getMonth() + 1)+ '月' + currentDate.getDate() + '日'
      },1000)
    }

    const submit = () => {
      mytime.value = time.value
      console.log(mytime.value)
    }

    onMounted(() => {
        handleGetTime()
    })

</script>

<template>
    <h2>タイム</h2>
    <p class="time">{{ day }}</p> 
    <p class="time">{{ time }}</p>
    <v-btn @click="submit">クリック</v-btn>
    <p class="time">{{ mytime }}</p>
</template>