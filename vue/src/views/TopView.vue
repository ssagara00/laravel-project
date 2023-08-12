<script setup lang="ts">
import { mdiAccount, mdiAccountCancel } from "@mdi/js"
</script>

<template>
  <h1 class="hoge">toppage</h1>
  <v-icon :icon="mdiAccountCancel" />
  <v-icon :icon="mdiAccount" />
</template>