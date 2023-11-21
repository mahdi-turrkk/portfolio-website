<template>
  <div class="pb-8 lg:pb-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 lg:gap-8 px-10 lg:px-60 justify-center items-center pt-16 flex-col-reverse relative">
    <div class="col-span-3 md:col-span-4 lg:col-span-6 flex justify-center mb-12">
      <div class="text-3xl md:text-5xl font-bold text-info-1">
        {{ locale.mySkills }}
      </div>
    </div>
    <skill-card v-for="skill in info.skills" :title='skill.title' :imgSrc="skill.imgSrc" class="mb-4"/>
  </div>
</template>
<script setup>
import SkillCard from "./skillCard.vue";
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import {usePersonInformationStore} from "../store/personInformationStore.js";

let locale = computed(() => {
  return useLocalization().getLocale
})

let info = computed(() => {
  return usePersonInformationStore().getPersonInfo
})

</script>