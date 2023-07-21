<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
    <TimeSample />
  </div>
</template>

<!--
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
-->
<script setup lang="ts">
import TimeSample from "@/components/TimeSample.vue"; 
</script>