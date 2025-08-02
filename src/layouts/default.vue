<template>
  <div>
    <!--    header for big screens-->
    <div
        class="hidden md:flex pt-3 pb-4 px-14 justify-between shadow-lg w-full items-center fixed z-50 transition-all duration-200" :class="headerBackgroundColor">
      <div class="flex">
        <!--        routes in header-->
        <a v-for="(route,index) in routes" @click="showRoutesMenu = false" :href="route.path">
          <div
               class="text-info-3 font-bold text-base cursor-pointer md:text-lg hover:text-primary-3 hover:underline hover:underline-offset-[15px] hover:underline-2 hover:underline-info-2 transition-all duration-200"
               :class="{'text-primary-3 underline underline-offset-[15px] underline-2 underline-info-2' : $route.fullPath === route.path || $route.fullPath === '/' + route.path || $route.fullPath === '/' + route.activeLink , 'ml-8' : isRtl && index !== routes.length-1 , 'mr-8' : !isRtl && index !== routes.length-1}"
          >{{ route.title }}
          </div>
        </a>
      </div>
      <div class="flex justify-end items-center">
        <div class="flex items-center justify-end">
          <div class="relative">
            <div class="text-info-3 hover:bg-background-2 p-2 rounded-xl cursor-pointer"
                 @click="showLangMenu = !showLangMenu">{{ useLocalization().getFlag }}
              {{ useLocalization().getLanguage.toUpperCase() }}
            </div>
            <div class="absolute left-0 rounded-xl" v-if="showLangMenu">
              <div class="flex flex-col w-max rounded-xl bg-background-2 bg-opacity-50">
                <div class="text-info-3 px-3 py-2 hover:bg-background-2 hover:text-primary-3 cursor-pointer rounded-xl"
                     @click="changeLanguage(['🇮🇷','fa' , 'rtl']);showLangMenu = false">🇮🇷 FA
                </div>
                <div class="text-info-3 px-3 py-2 hover:bg-background-2 hover:text-primary-3 cursor-pointer rounded-xl"
                     @click="changeLanguage(['🇺🇸','en' , 'ltr']);showLangMenu = false">🇺🇸 EN
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        toggle theme button-->
        <div class="p-2 text-2xl text-info-3 hover:text-primary-3 rounded-xl cursor-pointer transition-all duration-200"
             @click="changeDarkStatus" :class="{'ml-2' : isRtl , 'mr-2' : !isRtl}">
          <i class="pi pi-sun" v-if="useDataStore().getDarkStatus"/>
          <i class="pi pi-moon" v-if="!useDataStore().getDarkStatus"/>
        </div>
        <!--      logo of header-->
        <div>
          <a href="#">
            <img :src="logoSource" :alt="locale.name" class="w-14 cursor-pointer">
          </a>
        </div>
      </div>
    </div>
    <!--    header of small screens-->
    <div class="flex md:hidden py-3 px-10 justify-between shadow-lg w-full items-center fixed z-50" :class="headerBackgroundColor">
      <div class="flex items-center">
        <i class="pi pi-bars text-info-3 text-xl"
           @click="showRoutesMenu = !showRoutesMenu"/>
        <div class="flex items-center justify-end" :class="{'mr-2' : isRtl , 'ml-2' : !isRtl}">
          <div class="relative">
            <div class="text-info-3 hover:bg-background-2 p-2 rounded-xl cursor-pointer"
                 @click="showLangMenu = !showLangMenu">{{ useLocalization().getFlag }}
              {{ useLocalization().getLanguage.toUpperCase() }}
            </div>
            <div class="absolute left-0 rounded-xl" v-if="showLangMenu">
              <div class="flex flex-col w-max rounded-xl bg-background-2 bg-opacity-50">
                <div class="text-info-3 px-3 py-2 hover:bg-background-2 hover:text-primary-3 cursor-pointer rounded-xl"
                     @click="changeLanguage(['🇮🇷','fa' , 'rtl']);showLangMenu = false">🇮🇷 FA
                </div>
                <div class="text-info-3 px-3 py-2 hover:bg-background-2 hover:text-primary-3 cursor-pointer rounded-xl"
                     @click="changeLanguage(['🇺🇸','en' , 'ltr']);showLangMenu = false">🇺🇸 EN
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        toggle theme button-->
        <div class="p-2 text-xl text-info-3 hover:text-primary-3 rounded-xl cursor-pointer transition-all duration-200"
             @click="changeDarkStatus" :class="{'ml-2' : isRtl , 'mr-2' : !isRtl}">
          <i class="pi pi-sun" v-if="useDataStore().getDarkStatus"/>
          <i class="pi pi-moon" v-if="!useDataStore().getDarkStatus"/>
        </div>
      </div>
      <!--      logo of header-->
      <img :src="logoSource" :alt="locale.name" class="w-14 cursor-pointer" @click="router.push('/')">
    </div>
    <div class="w-full h-screen md:hidden fixed bg-background-3 z-50 flex flex-col space-y-10 pt-6 px-10"
         v-if="showRoutesMenu">
      <div class="-mb-6">
        <i class="pi pi-times text-info-3 text-xl" @click="showRoutesMenu = !showRoutesMenu"/>
      </div>
      <!--        routes in header-->
      <a v-for="route in routes" @click="showRoutesMenu = false" :href="route.path">
        <div
             class="text-info-3 font-bold text-xl cursor-pointer md:text-lg hover:text-primary-3 hover:underline hover:underline-offset-[15px] hover:underline-2 hover:underline-info-2 transition-all duration-200 text-center"
             :class="{'text-primary-3 underline underline-offset-[15px] underline-2 underline-info-2' : $route.fullPath === route.path || $route.fullPath === '/' + route.path || $route.fullPath === '/' + route.activeLink}"
        >{{ route.title }}
        </div>
      </a>
    </div>
    <div class="w-full">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref, watch} from "vue";
import router from "../router/index.js";
import {useLocalization} from "../store/localizationStore.js";
import {useDataStore} from "../store/dataStore.js";
import {usePersonInformationStore} from "../store/personInformationStore.js";

const locale = computed(() => {
  return useLocalization().getLocale
})

const isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

const logoSource = computed(() => {
  return useDataStore().getDarkStatus ? '/logo-dark.png' : '/logo-light.png'
})

let showLangMenu = ref(false)
let showRoutesMenu = ref(false)

watch(isRtl, () => {
  routes.value[0].title = locale.value.home
  routes.value[1].title = locale.value.about
  routes.value[2].title = locale.value.projects
  routes.value[3].title = locale.value.contact
})


let routes = ref([
  {
    title: locale.value.home,
    path: "#",
    activeLink : ''
  },
  {
    title: locale.value.about,
    path: "#about",
  },
  {
    title: locale.value.projects,
    path: "#Projects",
  },
  {
    title: locale.value.contact,
    path: "#Contact",
  },
])

let barColor = ref("")
let headerBackgroundColor = reactive({
  'backdrop-blur-3xl' : false
})

onMounted(() => {
  window.addEventListener("scroll", (e) => {
    console.log(barColor.value)
    headerBackgroundColor["backdrop-blur-3xl "] = window.pageYOffset > window.innerHeight - 650;
  });
  if(localStorage.getItem('lang') !== 'null'){
    changeLanguage(JSON.parse(localStorage.getItem('lang')))
  }
  if(localStorage.getItem('isDark') !== 'null'){
    if(useDataStore().getDarkStatus !== (localStorage.getItem('isDark') === 'true'))
      useDataStore().changeDarkStatus();
  }
})

const changeLanguage = (payload) => {
  localStorage.setItem('lang' , JSON.stringify(payload))
  useLocalization().changeLanguage(payload)
  usePersonInformationStore().changeLanguage(payload)
}

const changeDarkStatus = () => {
  useDataStore().changeDarkStatus();
  localStorage.setItem('isDark' , useDataStore().getDarkStatus);
}

</script>