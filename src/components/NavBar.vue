<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="primary white--text text-h6 font-weight-bold"
    >
      <v-app-bar-nav-icon color="white" @click="toggleDrawer" />
      <v-toolbar-title>
        เยาวชนต้มแกง
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { vxm } from "@/store";
import { Component, Vue } from "vue-property-decorator";
import { VAppBar, VAppBarNavIcon, VToolbarTitle } from "vuetify/lib";

@Component({
  components: {
    VAppBar,
    VAppBarNavIcon,
    VToolbarTitle,
  },
})
export default class extends Vue {
  private toggleDrawer() {
    vxm.drawer.toggleDrawerState();
  }
}
</script>
