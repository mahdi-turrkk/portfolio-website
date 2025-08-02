<template>
  <div class="flex w-max relative z-10 md:pl-16">
    <div class="relative z-0 shape bg-primary-3 h-[350px] w-[300px] md:h-[575px] md:w-[500px] bg-opacity-70"></div>
    <div class="absolute z-0 h-[350px] w-[355px] md:h-[675px] md:w-[550px] -mt-[2rem] md:-mt-[5rem] flex justify-center items-end" >
      <img src="/src/assets/selfImage.png" class="z-20 h-[355px] md:h-[650px]" :alt="useLocalization().getLocale.name"
           :class="{'mr-12' : !isRtl , 'ml-6' : isRtl}"
      >
    </div>
  </div>
</template>

<style scoped>
.shape {
  border-radius: 29% 71% 70% 30% / 30% 30% 70% 70%;
}

</style>
<script setup>
import {useLocalization} from "../store/localizationStore.js";
import {computed} from "vue";

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})
</script>