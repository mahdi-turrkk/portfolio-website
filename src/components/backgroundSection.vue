<template>
  <div class="pb-8 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-8 px-10 lg:px-60 justify-center items-center pt-16 flex-col-reverse relative">
    <div class="lg:col-span-2 flex justify-center mb-12">
      <div class="text-3xl md:text-5xl font-bold text-info-1">
        {{ locale.background }}
      </div>
    </div>
    <div class="lg:col-span-2 mb-12">
      <div class="text-xl md:text-3xl font-bold text-info-1">
        {{ locale.educationalBackground }}
      </div>
    </div>
    <education-card v-for="education in info.educations" :detail="education" class="mb-4"/>
    <div class="lg:col-span-2 mb-12">
      <div class="text-xl md:text-3xl font-bold text-info-1">
        {{ locale.workExperiences }}
      </div>
    </div>
    <experience-card v-for="experience in info.experiences" :detail="experience" class="mb-4"/>
  </div>
</template>
<script setup>
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import EducationCard from "./educationCard.vue";
import ExperienceCard from "./experienceCard.vue";
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