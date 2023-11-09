<template>
  <div class="flex w-max">
    <div class="relative z-0 shape bg-primary-3 h-[450px] w-[345px] md:h-[575px] md:w-[500px] bg-opacity-70"></div>
    <div class="relative z-0 shape h-[550px] w-[400px] md:h-[675px] md:w-[550px] -mt-[98px] md:-mt-[98px] overflow-y-hidden flex justify-center items-end" :class="{'-mr-[373px] md:-mr-[527px]' : isRtl , '-ml-[373px] md:-ml-[527px]' : !isRtl}">
      <img src="/src/assets/selfImage.png" class="z-20 h-[500px] md:h-[650px]" :alt="useLocalization().getLocale.name">
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