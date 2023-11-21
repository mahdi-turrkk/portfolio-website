<template>
  <div
      class="w-screen pt-20 bg-background-2" id="Projects">
    <div class="text-center mb-4 md:mb-12">
      <div class="text-3xl md:text-5xl font-bold text-info-1">
        {{ locale.projects }}
      </div>
    </div>
    <Carousel class="h-max flex items-center md:py-14">
      <Slide v-for="(project , index) in info.projects" :key="index" class="px-14 md:px-20">
          <div class="grid grid-cols-3" :style="{'direction' : useLocalization().getDirection}">
            <div class="col-span-3 lg:col-span-1 relative">
              <img :src="project.imgSrc" class="z-10 relative">
            </div>
            <div class="col-span-3 lg:col-span-2 px-6">
              <div class="lg:col-span-2 mb-12">
                <div class="text-xl md:text-3xl font-bold text-info-1 text-start mt-12 md:mt-0">
                  {{ project.title }}
                </div>
                <div class="text-justify text-xl md:text-2xl text-info-3 mt-4 md:mt-8 leading-relaxed md:leading-loose">
                  {{ project.description }}
                </div>
                <div class="text-justify text-xl md:text-2xl text-info-3 mt-4 leading-relaxed md:leading-loose">
                  {{locale.technologies}} : {{ project.technologies }}
                </div>
                <div class="text-justify text-xl md:text-2xl text-info-3 mt-2 leading-relaxed md:leading-loose">
                  {{locale.myRole}} : {{ project.role }}
                </div>
                <div class="text-start mt-2 flex">
                  <a :href="project.link" class="decoration-0"
                     :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">
                    <button class="rounded-full hover:bg-background-1 w-12 h-12 flex justify-center items-center">
                      <i class="pi pi-external-link text-primary-3 text-2xl"/>
                    </button>
                  </a>
                  <a :href="project.github" class="decoration-0" v-if="project.github"
                     :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">
                    <button class="rounded-full hover:bg-background-1 w-12 h-12 flex justify-center items-center">
                      <i class="pi pi-github text-primary-3 text-2xl"/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import {useDataStore} from "../store/dataStore.js";
import { Carousel, Slide , Navigation } from 'vue3-carousel'
import {usePersonInformationStore} from "../store/personInformationStore.js";

let locale = computed(() => {
  return useLocalization().getLocale
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

let isDark = computed(() => {
  return useDataStore().getDarkStatus
})

let info = computed(() => {
  return usePersonInformationStore().getPersonInfo
})

</script>