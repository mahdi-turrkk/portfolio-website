<template>
  <div
      class="w-screen pt-20 bg-background-2" id="Projects">
    <div class="text-center mb-4 md:mb-12">
      <div class="text-2xl md:text-4xl font-bold text-info-1">
        {{ locale.projects }}
      </div>
    </div>
    <div class="pb-6 mx-4 md:mx-8 lg:mx-12">
      <slider :data="info.projects" :auto-scroll="true" >
        <template v-slot:slide="{ item , onTouchStart, onTouchEnd }">
          <div class="grid grid-cols-3 h-full w-full" @touchstart="onTouchStart" @touchend="onTouchEnd" :style="{'direction' : useLocalization().getDirection}">
            <div class="col-span-3 lg:col-span-1 relative">
              <img :src="item.imgSrc" class="z-10 relative">
            </div>
            <div class="col-span-3 lg:col-span-2 px-6">
              <div class="lg:col-span-2 mb-12">
                <div class="text-lg md:text-xl font-bold text-info-1 text-start mt-12 md:mt-0">
                  {{ item.title }}
                </div>
                <div class="text-justify text-lg md:text-xl text-info-3 mt-4 md:mt-8 leading-relaxed md:leading-loose">
                  {{ item.description }}
                </div>
                <div class="text-justify text-lg md:text-xl text-info-3 mt-4 leading-relaxed md:leading-loose">
                  {{locale.technologies}} : {{ item.technologies }}
                </div>
                <div class="text-justify text-lg md:text-xl text-info-3 mt-2 leading-relaxed md:leading-loose">
                  {{locale.myRole}} : {{ item.role }}
                </div>
                <div class="text-start mt-2 flex">
                  <a :href="item.link" class="decoration-0" v-if="item.link"
                     :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">
                    <button class="rounded-full hover:bg-background-1 w-12 h-12 flex justify-center items-center">
                      <i class="pi pi-external-link text-primary-3 text-2xl"/>
                    </button>
                  </a>
                  <a :href="item.github" class="decoration-0" v-if="item.github"
                     :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">
                    <button class="rounded-full hover:bg-background-1 w-12 h-12 flex justify-center items-center">
                      <i class="pi pi-github text-primary-3 text-2xl"/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </slider>
    </div>
  </div>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import {useDataStore} from "../store/dataStore.js";
import {usePersonInformationStore} from "../store/personInformationStore.js";
import Slider from "./Slider.vue";

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