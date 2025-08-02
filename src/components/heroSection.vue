<template>
  <div
      class="min-h-screen flex lg:flex-row lg:justify-between xl:px[10%] 2xl:px-[15%] justify-center items-center pt-24 md:pt-16 flex-col-reverse relative">
    <img src="../assets/bg-filter.webp" class="absolute w-full h-full top-0 right-0 z-0" :class="{'opacity-80' : !isDark , 'opacity-5' : isDark}">
    <div class="mt-6 md:mt-0 px-12 md:px-16 z-10">
      <div class="uppercase text-2xl text-primary-3">
        {{ locale.greeting }}
      </div>
      <div class="flex items-end mt-4">
        <div class="text-4xl sm:text-5xl md::text-6xl text-info-3">
          {{ info.name }}
        </div>
        <div class="text-xl mr-2 text-info-1">
          {{ isRtl ? locale.is : '' }}
        </div>
      </div>
      <div class="uppercase text-primary-3 text-2xl sm:text-3xl" :class="{'mt-8' : isRtl , 'mt-4' : !isRtl}">
        {{ info.role }}
      </div>
      <div class="text-base md:text-lg text-info-1 max-w-lg text-justify mt-4">{{ info.aboutSummary }}</div>
      <div class="flex mt-6">
        <a class="text-center d-inline-block" style="cursor: pointer" :href="resume" :download="`${info.name}-resume.pdf`">
          <button
              class="rounded-xl bg-primary-2 text-gray-100 uppercase px-6 py-auto h-10 hover:bg-primary-3 transition-all duration-200 text-sm md:text-base whitespace-nowrap"
              :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">{{ locale.downloadCV }}
          </button>
        </a>
        <a href="#Projects">
          <button
              class="rounded-xl border-2 border-primary-3 bg-background-2 hover:bg-background-1 text-info-1 uppercase px-6 py-auto h-10 text-sm md:text-base whitespace-nowrap"
              @click="router.push('#Projects')">{{ locale.seeProjects }}
          </button>
        </a>
      </div>
      <div class="flex mt-4 mb-4 md:mb-0 justify-center md:justify-start">
        <a v-for="socialMedia in info.socialMedias" :href="socialMedia.link" class="decoration-0"
           :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">
          <button class="rounded-full hover:bg-background-2 w-12 h-12 flex justify-center items-center">
            <i class="pi text-primary-3 text-2xl" :class="socialMedia.iconClass"/>
          </button>
        </a>
      </div>
    </div>
    <hero-section-image/>
  </div>
</template>
<script setup>
import router from "../router/index.js";
import HeroSectionImage from "./heroSectionImage.vue";
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import {useDataStore} from "../store/dataStore.js";
import englishResume from '/src/assets/English-Resume.pdf';
import persianResume from '/src/assets/Persian-Resume.pdf';
import {usePersonInformationStore} from "../store/personInformationStore.js";

let locale = computed(() => {
  return useLocalization().getLocale
})

let info = computed(() => {
  return usePersonInformationStore().getPersonInfo
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

let isDark = computed(() => {
  return useDataStore().getDarkStatus
})

let resume = computed(() => {
  return useLocalization().getLanguage === 'fa' ? persianResume : englishResume
})
</script>