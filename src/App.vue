<template>
  <v-app>
    <NavBar />
    <NavDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import NavDrawer from "@/components/NavDrawer.vue";

@Component({
  components: {
    NavBar,
    NavDrawer,
  },
})
export default class extends Vue {}
</script>
