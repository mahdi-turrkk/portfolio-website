<template>
  <div :class="{'dark-theme' : isDark , 'light-theme' : !isDark}"
       :style="{'direction' : useLocalization().getDirection}"
       class="appStaticColors bg-background-3 min-h-screen w-screen scrollBar"
  >
    <router-view/>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useDataStore} from "./store/dataStore.js";
import {useLocalization} from "./store/localizationStore.js";

let isDark = computed(() => {
  return useDataStore().getDarkStatus
})
</script>

<style>
.appStaticColors {
  --color-error: 358 100% 50%;
  --color-success: 130 100% 35%;
  --color-warning: 63 100% 50%;
}

.light-theme {
  --color-primary-1: 198 63% 60%;
  --color-primary-2: 198 63% 50%;
  --color-primary-3: 198 63% 40%;
  --color-secondary-1: 0 85% 68.7%;
  --color-secondary-2: 0 85% 62%;
  --color-secondary-3: 0 85% 55.3%;
  --color-background-1: 237 35% 88.7%;
  --color-background-2: 237 35% 92%;
  --color-background-3: 237 35% 95.3%;
  --color-info-1: 237 35% 35%;
  --color-info-2: 237 35% 25%;
  --color-info-3: 237 35% 10%;
}

.dark-theme {
  --color-primary-1: 198 63% 40%;
  --color-primary-2: 198 63% 50%;
  --color-primary-3: 198 63% 60%;
  --color-secondary-1: 0 85% 55.3%;
  --color-secondary-2: 0 85% 62%;
  --color-secondary-3: 0 85% 68.7%;
  --color-background-1: 237 35% 35.3%;
  --color-background-2: 237 35% 28.7%;
  --color-background-3: 237 35% 22%;
  --color-info-1: 237 35% 78%;
  --color-info-2: 237 35% 88%;
  --color-info-3: 237 35% 98%;
}

.dir-rtl {
  direction: rtl;
}

::-webkit-scrollbar {
  width: 0;
}
</style>