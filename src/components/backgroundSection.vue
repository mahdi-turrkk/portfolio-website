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
    <education-card v-if="!isRtl" v-for="education in englishEducations" :detail="education" class="mb-4"/>
    <education-card v-if="isRtl" v-for="education in persianEducations" :detail="education" class="mb-4"/>
    <div class="lg:col-span-2 mb-12">
      <div class="text-xl md:text-3xl font-bold text-info-1">
        {{ locale.workExperiences }}
      </div>
    </div>
    <experience-card v-if="!isRtl" v-for="experience in englishExperiences" :detail="experience" class="mb-4"/>
    <experience-card v-if="isRtl" v-for="experience in persianExperiences" :detail="experience" class="mb-4"/>
  </div>
</template>
<script setup>
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import EducationCard from "./educationCard.vue";
import ExperienceCard from "./experienceCard.vue";

let locale = computed(() => {
  return useLocalization().getLocale
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

const englishEducations = ref([
  {
    fieldOfStudy : 'Computer Systems Architecture',
    degree : 'Master',
    start : '2023',
    end : 'present',
    institution : 'Tabriz University',
    institutionLogo : '/tabrizUniversity.png'
  },
  {
    fieldOfStudy : 'Computer Engineering',
    degree : 'Bachelor',
    start : '2019',
    end : '2023',
    institution : 'Tabriz University',
    institutionLogo : '/tabrizUniversity.png'
  },
])

const persianEducations = ref([
  {
    fieldOfStudy : 'معماری سیستم‌های کامپیوتری',
    degree : 'کارشناسی ارشد',
    start : '۱۴۰۲',
    end : 'تاکنون',
    institution : 'دانشگاه تبریز',
    institutionLogo : '/tabrizUniversity.png'
  },
  {
    fieldOfStudy : 'مهندسی کامپیوتر',
    degree : 'کارشناسی',
    start : '۱۳۹۸',
    end : '۱۴۰۲',
    institution : 'دانشگاه تبریز',
    institutionLogo : '/tabrizUniversity.png'
  },
])

const englishExperiences = ref([
  {
    companyName : 'DornaTech Development',
    role : 'Co-Founder / Frontend Developer',
    start : '2022',
    end : 'present',
    projects : 'Merkato24.com - Dornatech.ir'
  },
  {
    companyName : 'Freelancing',
    role : 'Frontend Developer',
    start : '2022',
    end : 'present',
    projects : 'X-ui Panel Manager'
  },
])

const persianExperiences = ref([
  {
    companyName : 'توسعه دهندگان نرم‌افزار درناتک',
    role : 'موسس / توسعه دهنده فرانت‌اند',
    start : '۱۴۰۱',
    end : 'تاکنون',
    projects : 'Merkato24.com - Dornatech.ir'
  },
  {
    companyName : 'فریلنسری',
    role : 'توسعه دهنده فرانت‌اند',
    start : '۱۴۰۱',
    end : 'تاکنون',
    projects : 'X-ui Panel Manager'
  },
])
</script>