<template>
  <client-only>
    <l-map :center="[13.747242, 100.529165]" :zoom="14">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </l-map>
  </client-only>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
})
export default class extends Vue {}
</script>
