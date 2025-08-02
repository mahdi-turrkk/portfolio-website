<template>
  <div class="p-6 md:p-10 md:mx-4 bg-background-3 shadow-2xl rounded-lg" :class="{'shadow-black' : isDark}">
    <div class="mt-2 col-span-3">
      <div class="text-base md:text-xl font-bold text-info-3">{{detail.companyName}}</div>
      <div class="text-sm md:text-lg text-info-2 mt-2">{{detail.start}} - {{detail.end}}</div>
      <div class="text-sm md:text-lg text-info-1 mt-2">{{detail.role}}</div>
      <div class="text-sm md:text-lg text-info-1 mt-2 line-clamp-1">{{detail.projects}}</div>
    </div>
  </div>
</template>

<script setup>

import {computed} from "vue";
import {useDataStore} from "../store/dataStore.js";

defineProps(['detail'])

let isDark = computed(()=>{
  return useDataStore().getDarkStatus
})
</script>