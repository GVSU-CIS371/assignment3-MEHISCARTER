import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],

    bases,
    currentBase: bases[0],
    
    creamers,
    currentCreamer: creamers[0],
    
    syrups,
    currentSyrup: syrups[0],

    savedBeverages: [] as {
      name: string;
      base: string;
      creamer: string;
      syrup: string;
      temperature: string;
      baseColor: string;
      creamerColor: string;
      syrupColor: string;
    }[],

  }),

  getters: {
    baseColor: (state) => state.currentBase?.color ?? "#FFFFFF",
    // creamerColor: (state) => {const creamer = state.currentCreamer;
    //   if (!creamer || creamer.name === "No Cream") {
    //     return state.currentBase.color
    //   } return creamer.color
    // },
    creamerColor: (state) => state.currentCreamer?.color ?? "#FFFFFF",
    syrupColor: (state) => {const syrup = state.currentSyrup;
      if (!syrup || syrup.name === "No Syrup") {
        return state.currentBase.color
      }
        return syrup.color
    },

  },
  actions: {
    makeBeverage(name: string) {
      const newBeverage = {
        name,
        base: this.currentBase.name,
        creamer: this.currentCreamer.name,
        syrup: this.currentSyrup.name,
        temperature: this.currentTemp,
        baseColor: this.baseColor,
        creamerColor: this.creamerColor,
        syrupColor: this.syrupColor,
      };
      this.savedBeverages.push(newBeverage);
    },
    showBeverage(selectedName: string) {
      const bev = this.savedBeverages.find(b => b.name === selectedName);
      if (!bev) return;
      this.currentBase = this.bases.find(b => b.name === bev.base) || this.bases[0];
      this.currentCreamer = this.creamers.find(c => c.name === bev.creamer) || this.creamers[0];
      this.currentSyrup = this.syrups.find(s => s.name === bev.syrup) || this.syrups[0];
      this.currentTemp = bev.temperature;
    },
    clearBeverages() {
      this.savedBeverages = []
    },
  },
  persist: true,
});
