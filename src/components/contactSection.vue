<template>
  <div
      class="pb-8 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-8 px-10 lg:px-60 justify-center items-center pt-16 flex-col-reverse relative"
      id="Contact">
    <div class="fixed top-6 left-[50%] -translate-x-[50%] flex" style="z-index: 99" v-if="showNotification">
      <div class="flex px-4 py-2 rounded-lg text-white justify-center items-center" :class="{'bg-error' : notificationType === 'error' , 'bg-success' : notificationType ==='success'}">
        <i class="pi pi-check-circle" v-if="notificationType === 'success'"/>
        <div v-if="notificationType === 'success'" :class="{'mr-2' : isRtl , 'ml-2' : !isRtl}">{{locale.inquirySubmitted}}</div>
        <i class="pi pi-times-circle" v-if="notificationType === 'error'"/>
        <div v-if="notificationType === 'error'" :class="{'mr-2' : isRtl , 'ml-2' : !isRtl}">{{locale.errorOccurred}}</div>
      </div>
    </div>
    <div class="lg:col-span-2 flex justify-center mb-12">
      <div class="text-2xl md:text-4xl font-bold text-info-1">
        {{ locale.contactMe }}
      </div>
    </div>
    <div class="bg-background-2 px-4 md:px-10 py-4 flex flex-col rounded-lg">
      <div class="text-center text-info-3 text-xl font-bold mb-3 mt-3">{{locale.requestCollaboration }}</div>
      <label class="z-0 px-2 pb-3 -mt-[35px] opacity-0 transition-all duration-200 text-info-3 text-lg"
             :class="{'mt-[3px] opacity-100' : name}">{{ locale.nameTitle }}</label>
      <input type="text" :placeholder="locale.nameTitle" v-model="name"
             class=" mt-4 z-20 w-full  shadow-lg mb-4 rounded-lg px-4 py-2 bg-background-3 text-info-3 placeholder:text-info-2 outline-none border-background-2 border-2 focus:border-primary-1 transition-all duration-150"/>
      <label class="z-0 px-2 pb-3 -mt-[40px] opacity-0 transition-all duration-200 text-info-3 text-lg"
             :class="{'mt-[4px] opacity-100' : contactInfo}">{{ locale.emailOrMobile }}</label>
      <input type="text" :placeholder="locale.emailOrMobile" v-model="contactInfo"
             class=" mt-4 z-20 w-full shadow-lg mb-4 rounded-lg px-4 py-2 bg-background-3 text-info-3 placeholder:text-info-2 outline-none border-background-2 border-2 focus:border-primary-1 transition-all duration-150"/>
      <label class="z-0 px-2 pb-3 -mt-[40px] opacity-0 transition-all duration-200 text-info-3 text-lg"
             :class="{'mt-[4px] opacity-100' : message}">{{ locale.message }}</label>
      <textarea type="text" :placeholder="locale.message" v-model="message" rows="4"
                class="mt-4 z-20 w-full shadow-lg mb-4 rounded-lg px-4 py-2 bg-background-3 text-info-3 placeholder:text-info-2 outline-none border-background-2 border-2 focus:border-primary-1 transition-all duration-150"/>
      <div class="text-end text-info-3 text-xl font-bold mb-3">
        <button @click="sendMail" :disabled="isSendingEmail"
            class="rounded-xl bg-primary-2 text-gray-100 uppercase px-4 py-2 hover:bg-primary-3 transition-all duration-200 text-sm">
          <loader v-if="isSendingEmail"/>
          <span v-if="!isSendingEmail">{{ locale.send}}</span>
        </button>
      </div>
    </div>
    <div class="lg:px-4 mt-4 md:mt-0">
      <div class="flex">
        <i class="pi pi-map-marker text-primary-3 text-3xl"/>
        <a :href="info.addressUrl" target="_blank">
        <div class="text-info-3 text-base md:text-xl leading-loose" :class="{'mr-6 md:mr-10' : isRtl , 'ml-6 md:ml-10' : !isRtl}">
          {{info.address}}
        </div>
        </a>
      </div>
      <div class="flex mt-6">
        <i class="pi pi-envelope text-primary-3 text-3xl"/>
        <a :href="`mailto:${info.emailAddress}`" target="_blank">
          <div class="text-info-3 text-base md:text-xl leading-loose" :class="{'mr-6 md:mr-10' : isRtl , 'ml-6 md:ml-10' : !isRtl}">
            {{info.emailAddress}}
          </div>
        </a>
      </div>
      <div class="flex mt-6">
        <i class="pi pi-phone text-primary-3 text-3xl"/>
        <a :href="`tel:${info.englishPhoneNumber}`">
        <div class="text-info-3 text-base md:text-xl leading-loose" :class="{'mr-6 md:mr-10' : isRtl , 'ml-6 md:ml-10' : !isRtl}">
          {{info.phoneNumber}}
        </div>
        </a>
      </div>
      <div class="border-t-2 border-info-1 mt-8"/>
      <div class="flex mt-6 justify-center">
        <a v-for="socialMedia in info.socialMedias" :href="socialMedia.link" class="decoration-0"
           :class="{'ml-4' : isRtl , 'mr-4' : !isRtl}">
          <button class="rounded-full hover:bg-background-2 w-12 h-12 flex justify-center items-center">
            <i class="pi text-primary-3 text-2xl" :class="socialMedia.iconClass"/>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed, ref} from "vue";
import {useLocalization} from "../store/localizationStore.js";
import Loader from "./loader.vue";
import {usePersonInformationStore} from "../store/personInformationStore.js";
import * as emailjs from "@emailjs/browser";

let locale = computed(() => {
  return useLocalization().getLocale
})

let isRtl = computed(() => {
  return useLocalization().getDirection === 'rtl'
})

let info = computed(() => {
  return usePersonInformationStore().getPersonInfo
})

let name = ref(undefined)
let contactInfo = ref(undefined)
let message = ref(undefined)
let showNotification = ref(false)
let notificationType = ref('success')
let isSendingEmail = ref(false)


const sendMail = () => {
  if(name.value && contactInfo.value){
    isSendingEmail.value = true
    emailjs.send('service_80ec8cg', 'template_apgcl7i', {
          title: name.value,
          name: name.value,
          time: new Date(),
          message: message.value,
          contactInfo: contactInfo.value,
        },
        {publicKey: 'Y0Rxq6z_iqfFLiKBQ',}
    ).then((res) => {
      isSendingEmail.value = false
      name.value = ''
      contactInfo.value = ''
      message.value = ''
      notificationType.value = 'success'
      showNotification.value = true
      setTimeout(() => {
        showNotification.value = false
      } , 2000)
    })
        .catch((err) => {
          isSendingEmail.value = false
          notificationType.value = 'error'
          showNotification.value = true
          setTimeout(() => {
            showNotification.value = false
          } , 1000)
        });
  }
}
</script>