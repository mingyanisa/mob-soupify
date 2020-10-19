import Vue from "vue";
import Vuex from "vuex";
import { extractVuexModule, createProxy } from "vuex-class-component";
import { VuexObject } from "vuex-class-component/dist/interfaces";
import Drawer from "./modules/drawer";

Vue.use(Vuex);

export const store = new Vuex.Store<VuexObject>({
  modules: {
    ...extractVuexModule(Drawer),
  },
  plugins: [],
});

export const vxm = {
  drawer: createProxy(store, Drawer),
};
