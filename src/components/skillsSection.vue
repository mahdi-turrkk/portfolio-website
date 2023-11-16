<template>
  <div class="pb-8 lg:pb-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 lg:gap-8 px-10 lg:px-60 justify-center items-center pt-16 flex-col-reverse relative">
    <div class="col-span-3 md:col-span-4 lg:col-span-6 flex justify-center mb-12">
      <div class="text-3xl md:text-5xl font-bold text-info-1">
        {{ locale.mySkills }}
      </div>
    </div>
    <skill-card v-for="skill in skills" :title='skill.title' :imgSrc="skill.imgSrc" class="mb-4"/>
  </div>
</template>
<script setup>
import SkillCard from "./skillCard.vue";
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";

let locale = computed(() => {
  return useLocalization().getLocale
})

let skills = ref([
  {
    title : "Vue.js",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuejs/vuejs-original.svg"
  },
  {
    title : "Nuxt.js",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nuxtjs/nuxtjs-original.svg"
  },
  {
    title : "TailwindCss",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg"
  },
  {
    title : "Vuetify",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuetify/vuetify-original.svg"
  },
  {
    title : "Javascript",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-original.svg"
  },
  {
    title : "Typescript",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
  },
  {
    title : "Git",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/git/git-original.svg"
  },
  {
    title : "Figma",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/figma/figma-original.svg"
  },
  {
    title : "Node.js",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original.svg"
  },
  {
    title : "Express.js",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/express/express-original.svg"
  },
  {
    title : "Linux",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/linux/linux-original.svg"
  },
  {
    title : "Ionic",
    imgSrc : "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/ionic/ionic-original.svg"
  },
])
</script>