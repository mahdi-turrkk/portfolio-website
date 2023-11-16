<template>
  <div
      class="w-screen pt-20 bg-background-2">
    <div class="text-center mb-4 md:mb-12">
      <div class="text-3xl md:text-5xl font-bold text-info-1">
        {{ locale.projects }}
      </div>
    </div>
    <Carousel class="h-max flex items-center md:py-14">
      <Slide v-for="(project , index) in (!isRtl ? englishProjects : persianProjects)" :key="index" class="px-14 md:px-20">
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

let locale = computed(() => {
  return useLocalization().getLocale
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

let isDark = computed(() => {
  return useDataStore().getDarkStatus
})

const englishProjects = ref([
  {
    title : "Dornatech Company Website (Demo)",
    link : 'https://Dornatech.ir',
    imgSrc : '/dornatech.webp',
    description : 'Dornatech Website\'s Front-End Developed Using Nuxt.Js 2, Vue.Js 2, And Vuetify 2. A Demo Version Of The Website Is Already Available And Will Be Officially Published In The Near Future.',
    technologies : 'Nuxt.js , vuetify , Vue.js',
    role : 'Frontend Developer - Project Manager'
  },
  {
    title : "Merkato24 (Demo)",
    link : 'https://Merkato24.netlify.app',
    imgSrc : '/merkato24.webp',
    description : 'Merkato 24 Is A Digital Marketplace For Africa, And Its Frontend Has Been Developed Using Nuxt.Js 2, Vue.Js 2, And Vuetify 2. The Marketplace Has Three Panels: Public, User, And Admin, Which Can Be Accessed Through The URLs "/" & "/User" And "/Admin". The Frontend Development Is Already Complete And The Backend Is Currently Under Development.Merkato 24 Has A Demo Version Available.',
    technologies : 'Nuxt.js , vuetify , Vue.js , PWA',
    role : 'Frontend Developer'
  },
  {
    title : "X-UI Panel Manager",
    link : 'https://panel.gixmetir.online:5002',
    imgSrc : '/x-uiPanelManager.webp',
    description : 'X-ui panel manager is panel for managing x-ui panels for selling v2ray subscriptions, And Its Frontend Has Been Developed Using Vue.Js 3, And Tailwind. It has two Panels: Admin & Customer(SuperCustomer),panel\'s source code is available at github.',
    technologies : 'Vue.js , Tailwind Css , PWA',
    role : 'Frontend Developer',
    github : 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
  },
])

const persianProjects = ref([
  {
    title : "وبسایت شرکت درناتک (دمو)",
    link : 'https://Dornatech.ir',
    imgSrc : '/dornatech.webp',
    description : 'فرانت‌اند وب‌سایت شرکت درناتک با استفاده از Nuxt.js 2، Vue.js 2 و Vuetify 2 توسعه یافته است. نسخه دموی وب‌سایت دردسترس میباشد و به زودی به صورت رسمی منتشر خواهد شد.',
    technologies : 'Nuxt.js , vuetify , Vue.js',
    role : 'مدیر پروژه - توسعه دهنده فرانت‌اند'
  },
  {
    title : "مرکاتو۲۴ (دمو)",
    link : 'https://Merkato24.netlify.app',
    imgSrc : '/merkato24.webp',
    description : 'مرکاتو ۲۴ یک بازار دیجیتال برای آفریقاست و فرانت‌اند آن با استفاده از Nuxt.js 2، Vue.js 2 و Vuetify 2 توسعه یافته است. این وب‌اپلیکیشن سه پنل دارد: عمومی، کاربر و مدیریت که از طریق آدرس‌های "/" و "/User" و "/Admin" قابل دسترسی هستند. توسعه فرانت‌اند وب‌سایت به پایان رسیده است و در حال حاضر توسعه قسمت بک‌اند در حال انجام است.نسخه‌ی دموی مرکاتو ۲۴ در دسترس است.',
    technologies : 'Nuxt.js , vuetify , Vue.js , PWA',
    role : 'توسعه دهنده فرانت‌اند'
  },
  {
    title : "پنل مدیریت پنل های x-ui",
    link : 'https://panel.gixmetir.online:5002',
    imgSrc : '/x-uiPanelManager.webp',
    description : 'این پنل یک پنل برای مدیریت پنل‌های X-ui برای فروش اشتراک‌های V2ray است. فرانت‌اند وب‌سایت آن با استفاده از Vue.js 3 و Tailwind توسعه یافته است. این پنل دارای دو بخش است: مدیریت و مشتری (فروشنده)، و سورس کد پنل در GitHub در دسترس است.',
    technologies : 'Vue.js , Tailwind Css , PWA',
    role : 'توسعه دهنده فرانت‌اند',
    github : 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
  },
])
</script>