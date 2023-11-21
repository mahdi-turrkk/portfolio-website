import {defineStore} from 'pinia'

export const useLocalization = defineStore('localize', {
    state: () => {
        return {
            language: 'fa',
            flag: '🇮🇷',
            direction: 'rtl',
            locales: {
                fa: {
                    home: "خانه",
                    about: "درباره من",
                    projects: "پروژه ها",
                    contact: "ارتباط با ‌من",
                    greeting: "سلام من",
                    is: "هستم",
                    downloadCV: 'دانلود رزومه',
                    seeProjects: 'دیدن پروژه ها',
                    aboutMe: 'درباره من',
                    mySkills : 'مهارت‌های من',
                    educationalBackground : 'سوابق تحصیلی',
                    workExperiences : 'سوابق کاری',
                    background : 'سوابق',
                    technologies : 'تکنولوژی‌ها',
                    myRole: 'نقش من',
                    contactMe : 'ارتباط با من',
                    nameTitle: 'نام',
                    emailOrMobile : 'ایمیل یا شماره تلفن',
                    message : 'متن پیام',
                    requestCollaboration : 'درخواست همکاری',
                    send : 'ارسال',
                    errorOccurred : 'خطایی رخ داده.دوباره تلاش کنید.',
                    inquirySubmitted : "درخواست شما ثبت شد. در اولین فرصت با شما ارتباط میگیرم.",
                },
                en: {
                    home: "Home",
                    about: "About Me",
                    projects: "Projects",
                    contact: "Contact Me",
                    greeting: "Hi , I'm",
                    downloadCV: 'Download CV',
                    seeProjects: 'See Projects',
                    aboutMe: 'About Me',
                    mySkills : 'My Skills',
                    educationalBackground : 'Educational Background',
                    workExperiences : 'Work Experiences',
                    background : 'Background',
                    technologies: 'Technologies',
                    myRole : 'My role',
                    contactMe : 'Contact Me',
                    nameTitle : 'Name',
                    emailOrMobile : 'ٍE-mail / Mobile',
                    message : 'Message',
                    requestCollaboration : 'Request Collaboration',
                    send : 'Send',
                    errorOccurred : 'An error Occurred.please try again!',
                    inquirySubmitted : "Your request submitted successfully. I'll contact you as soon as possible.",
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