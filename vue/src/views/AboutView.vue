<script setup lang="ts">
  import MenuHeader from "../components/MenuHeader.vue"
  import SideBar from "../components/SideBar.vue"
</script>

<template>
<MenuHeader />

<v-main class="grey lighten-3">
  <v-container>
    <v-row>
      <SideBar />

      <v-col>
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
        <h1 class="hoge">aboutpage</h1>
          <router-link to="/">Go to home</router-link>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
</v-main>
</template>