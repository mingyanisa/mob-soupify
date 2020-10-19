<template>
  <v-navigation-drawer :value="opened" @input="changeDrawer" app clipped>
    <v-container>
      <v-checkbox label="BTS" />
      <v-checkbox label="MRT" />
      <v-checkbox label="MOB" />
      <v-range-slider />
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { vxm } from "@/store";
import { Component, Vue } from "vue-property-decorator";
import { VNavigationDrawer, VCheckbox, VRangeSlider } from "vuetify/lib";

@Component({
  components: {
    VNavigationDrawer,
    VCheckbox,
    VRangeSlider,
  },
})
export default class extends Vue {
  get opened() {
    return vxm.drawer.getDrawerState;
  }
  changeDrawer(state: boolean) {
    if (!state) {
      vxm.drawer.changeDrawerState(state);
    }
  }
}
</script>
