<template>

  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer :color="creamerColor" />
      </template>
      <template v-slot:mid>
        <Syrup :color="syrupColor"/>
      </template>
      <template v-slot:bottom>
        <Base :color="baseColor"/>
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  base: string;
  creamer: string;
  syrup: string;
  baseColor: string;
  creamerColor: string;
  syrupColor: string;
};
defineProps<Props>();
</script>
