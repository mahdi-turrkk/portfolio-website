<template>
  <div class="p-6 md:p-10 md:mx-4 bg-background-3 shadow-2xl rounded-lg" :class="{'shadow-black' : isDark}">
    <img :src="imgSrc" style="aspect-ratio: 1" class="md:px-2">
    <div class="text-base md:text-xl font-bold text-info-1 text-center mt-2">
      {{title}}
    </div>
  </div>
</template>

<script setup>

import {computed} from "vue";
import {useDataStore} from "../store/dataStore.js";

const props = defineProps(['title' , 'imgSrc'])

let isDark = computed(()=>{
  return useDataStore().getDarkStatus
})
</script>