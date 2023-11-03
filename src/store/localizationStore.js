import {defineStore} from 'pinia'

export const useLocalization = defineStore('localize', {
    state: () => {
        return {
            language: 'fa',
            flag: '🇮🇷',
            direction: 'rtl',
            locales: {
                fa: {
                    name : "مهدی چاوشی"
                },
                en: {
                    name : "Mahdi Chavoshi"
                },
            }
        }
    },
    getters: {
        getLanguage() {
            return this.language
        },
        getFlag() {
            return this.flag
        },
        getLocale() {
            return this.locales[this.language]
        },
        getDirection() {
            return this.direction
        },
    },
    actions: {
        changeLanguage(payload) {
            this.flag = payload[0]
            this.language = payload[1]
            this.direction = payload[2]
        },
    }
})