import {defineStore} from 'pinia'

export const useLocalization = defineStore('localize', {
    state: () => {
        return {
            language: 'fa',
            flag: '🇮🇷',
            direction: 'rtl',
            locales: {
                fa: {
                    name: "مهدی چاوشی",
                    home: "خانه",
                    about: "درباره من",
                    projects: "پروژه ها",
                    contact: "ارتباط با ‌من",
                    greeting: "سلام من",
                    is: "هستم",
                    role: "توسعه دهنده فرانت‌اند",
                    aboutSummary: 'توسعه‌دهنده فرانت‌اند با بیش از یک سال تجربه، در خلق تجربیات دیجیتال شگفت‌انگیز. آماده برای تبدیل ایده شما به واقعیت.',
                    downloadCV: 'دانلود رزومه',
                    seeProjects: 'دیدن پروژه ها',
                    aboutMe: 'درباره من',
                    aboutDetailed: 'من توسعه‌دهنده فرانت‌اند و مهندس کامپیوتر در تبریز هستم. تخصص من در ایجاد تجارب کاربری جذاب با استفاده از Nuxt.js، Vue.js ،Tailwind و Vuetify.js است. به مدت سه سال به عنوان توسعه‌دهنده فرانت‌اند مشغول به کار بوده‌ام، که دو سال از آن‌ها در دانشگاه به توسعه ی پروژه های دانشگاهی اختصاص داشته و یک سال در کار حرفه‌ای فعالیت داشته‌ام.',
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
                    address : 'ایران ، تبریز ، چایکنار ، بعد‌از پل منصور ، روبروی شهرداری منطقه یک ، برج مشاوران ، واحد B5',
                    phoneNumber : '۰۹۱۴۱۰۲۳۶۸۲',
                    emailAddress : 'Mahdichavoshi14@gmail.com'
                },
                en: {
                    name: "Mahdi Chavoshi",
                    home: "Home",
                    about: "About Me",
                    projects: "Projects",
                    contact: "Contact Me",
                    greeting: "Hi , I'm",
                    role: "frontend developer",
                    aboutSummary: 'Passionate frontend developer with over a year of hands-on experience, crafting captivating digital experiences. Ready to bring your web vision to life.',
                    downloadCV: 'Download CV',
                    seeProjects: 'See Projects',
                    aboutMe: 'About Me',
                    aboutDetailed: 'I\'m Mahdi Chavoshi, A Front-End Developer And Computer Engineer Based In Tabriz,\n' +
                        'Iran. I Specialize In Creating Captivating User Experiences With Nuxt.Js,\n' +
                        'Vue.Js,Tailwind And Vuetify.Js.I have been employed as a Front-End Developer for\n' +
                        'three years, with two of those years dedicated to educational pursuits at university\n' +
                        'and one year engaged in professional work.Passionate About Continuous Learning\n' +
                        'And Staying Up To Date With Industry Trends, My Goal Is To Make A Positive Impact\n' +
                        'In Web Development Through Exceptional User Experiences.',
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
                    address : 'B5 , Moshaveran tower , Chaykenar st. , Tabriz , East azerbaijan province , Iran',
                    phoneNumber : '09141023682',
                    emailAddress : 'Mahdichavoshi14@gmail.com'
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