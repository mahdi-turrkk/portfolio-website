<!--
  slider component
  props:
    data : can be anything html, string ...
    autoScroll: boolean default is false for auto swipe slide to next one
    autoScrollTime: number in ms default is 6000ms for auto sliding every x ms
    height: string default is 100% the value should be valid value for css
    width: string default is 100% the value should be valid value for css
    hideNavigators: boolean default is false for not showing navigators set to true
    hideSlideIndicators: boolean default is false for not showing slide indicators set to true

  slots:
    slide: if you pass something to this slot every single slide will be in this style it has { item } prop you can use
    slide${i}: if you pass something to this slot slide with index of i will be in this style and don't effect other
      slides it has { item } prop you can use you can also personalize slot name if you give slot name prop in data
    ** these two slots also has onTouchStart and onTouchEnd for handling swipe in mobile device and should implement like
    this : @touchstart="onTouchStart" @touchend="onTouchEnd"
    previousButton: you can personalize previous button with this slot @click should be bind to onclick
    nextButton: you can personalize next button with this slot @click should be bind to onclick
    slideIndicators: you can personalize whole slide indicator with this slot
    slideIndicatorItem: you can personalize slide indicator items with this slot @click should be bind to onclick
-->

<template>
<!--  whole slider-->
  <div class="relative overflow-hidden" :style="{height : height || '100%' , width: width || '100%'}"
       @mouseenter="showNavigation = true"
       @mouseleave="showNavigation = false">
<!--    slide div-->
    <div class="h-full w-full top-0 bottom-0 right-0 left-0 transition-all duration-500"
         :class="onboarding > index ? 'translate-x-[101%] absolute' : onboarding < index ? '-translate-x-[101%] absolute' : null"
         v-for="(item,index) in data"
    >
      <slot :name="item.slotName ? item.slotName : 'slide' + index" :item="item" :onTouchStart="onTouchStart" :onTouchEnd="onTouchEnd">
        <slot name="slide" :item="item" :onTouchStart="onTouchStart" :onTouchEnd="onTouchEnd" :onboarding="onboarding">
          <div v-html="item.content" @touchstart="onTouchStart" @touchend="onTouchEnd"></div>
        </slot>
      </slot>
    </div>
<!--    navigation buttons-->
<!--    previous button-->
    <div :class="{'translate-x-12' : !showNavigation}" class="absolute top-0 bottom-0 right-0 flex items-center transition-all duration-400 z-10" v-if="!hideNavigators">
      <slot name="previousButton" :onclick="handleNextButton">
        <button class="bg-background-3 h-8 w-8 rounded-full shadow-lg mr-3 flex justify-center items-center" @click="handleNextButton">
          <i class="pi pi-chevron-right text-info-1 text-xl"/>
        </button>
      </slot>
    </div>
<!--    next button-->
    <div :class="{'-translate-x-12' : !showNavigation}" class="absolute top-0 bottom-0 left-0 flex items-center transition-all duration-400 z-10" v-if="!hideNavigators">
      <slot name="nextButton" :onclick="handlePreviousButton">
        <button class="bg-background-3 h-8 w-8 rounded-full drop-shadow-lg ml-3 flex justify-center items-center" @click="handlePreviousButton">
          <i class="pi pi-chevron-left text-info-1 text-xl"/>
        </button>
      </slot>
    </div>
  </div>
<!--  slide indicator section-->
  <div v-if="!hideSlideIndicators">
    <div class="flex justify-center gap-2 relative" :style="{'margin-top' : indicatorTopMargin || '0.5rem'}">
      <slot name="slideIndicators" :data="data">
        <div v-for="i in data.length">
          <slot name="slideIndicatorItem" :onclick="handleIndicatorClick" :item="data[i-1]" :index="i">
            <div class="h-2 rounded-full transition-all duration-300 bg-primary-1"
                 :class="onboarding === i-1 ? 'bg-primary-1 w-3' : 'bg-primary-disabled w-2 hover:bg-primary-1'"
                 @click="handleIndicatorClick(i)"
            ></div>
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup>

import {onBeforeUnmount, onMounted, ref, watch} from "vue";

const props = defineProps(["data" , "autoScrollTime" , "autoScroll" , "height" , "width" , "hideNavigators", "hideSlideIndicators" , "onboardingSlide", "indicatorTopMargin"])
const onboarding = ref(props.onboardingSlide || 0)
const interval = ref(0)
const showNavigation = ref(false)

watch(() => props.onboardingSlide , () => {
  onboarding.value = props.onboardingSlide
})

const handleNextButton = () => {
  onboarding.value === props.data.length-1 ? onboarding.value = 0 : onboarding.value++
  if(props.autoScroll) {
    clearInterval(interval.value)
    interval.value = setInterval(() => {
      handleNextButton()
    } , props.autoScrollTime || 6000)
  }
}

const handlePreviousButton = () => {
  onboarding.value === 0 ? onboarding.value = props.data.length-1 : onboarding.value--
  if(props.autoScroll) {
    clearInterval(interval.value)
    interval.value = setInterval(() => {
      handleNextButton()
    } , props.autoScrollTime || 6000)
  }
}

onMounted(() => {
  if(props.autoScroll){
    interval.value = setInterval(() => {
      handleNextButton()
    } , props.autoScrollTime || 6000)
  }
})

onBeforeUnmount(() => {
  if(props.autoScroll) {
    clearInterval(interval.value)
  }
})

const touchStartX = ref(0)
const touchEndX = ref(0)

const onTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX;
}

const onTouchEnd = (event) => {
  touchEndX.value = event.changedTouches[0].clientX;
  handleSwipe()
}

const handleSwipe = () => {
  const diff = touchEndX.value - touchStartX.value;
  if (diff > 50) {
    handleNextButton()
  } else if (diff < -50) {
    handlePreviousButton()
  }
};

const handleIndicatorClick = (i) => {
  onboarding.value = i-1
}
</script>