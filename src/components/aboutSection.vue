<template>
  <div
      class="bg-background-2 flex lg:flex-row lg:justify-between px-10 lg:px-60 justify-center items-center pt-10 md:pt-16 flex-col-reverse relative" id="about">
    <img src="/src/assets/selfImage1.png" class="h-[70%] px-10 lg:px-0" :alt="locale.name"  :class="{'md:mr-16' : !isRtl , 'md:ml-16' : isRtl}">
    <div class="mt-10 md:mt-0 px-12 md:px-16 z-10">
      <div class="text-3xl md:text-5xl font-bold text-info-1">
        {{ locale.aboutMe }}
      </div>
      <div class="text-justify text-xl md:text-2xl text-info-3 mt-4 md:mt-8 leading-relaxed md:leading-loose">
        {{ locale.aboutDetailed }}
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed} from "vue";
import {useLocalization} from "../store/localizationStore.js";

let locale = computed(() => {
  return useLocalization().getLocale
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

</script>