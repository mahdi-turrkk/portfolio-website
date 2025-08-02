<template>
  <div
      class="bg-background-2 flex lg:flex-row lg:justify-between px-10 lg:px-60 justify-center items-center pt-10 md:pt-16 flex-col-reverse relative" id="about">
    <img src="/src/assets/selfImage1.png" class="h-[70%] max-w-[300px] px-10 lg:px-0" :alt="locale.name"  :class="{'md:mr-16' : !isRtl , 'md:ml-16' : isRtl}">
    <div class="mt-10 md:mt-0 px-2 md:px-16 z-10 pb-4">
      <div class="text-2xl md:text-4xl font-bold text-info-1">
        {{ locale.aboutMe }}
      </div>
      <div class="text-justify text-lg md:text-xl text-info-3 mt-4 md:mt-8 leading-relaxed md:leading-loose">
        {{ info.aboutDetailed }}
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import {usePersonInformationStore} from "../store/personInformationStore.js";

let locale = computed(() => {
  return useLocalization().getLocale
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

let info = computed(() => {
  return usePersonInformationStore().getPersonInfo
})


</script>