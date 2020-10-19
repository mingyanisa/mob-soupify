<template>
  <v-app-bar app color="primary white--text text-h6 font-weight-bold">
    Mob Soupify
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VAppBar } from "vuetify/lib";

@Component({
  components: {
    VAppBar,
  },
})
export default class extends Vue {}
</script>
