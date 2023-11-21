import { defineStore } from 'pinia'
import {ref} from "vue";

export const usePersonInformationStore = defineStore('personInformation',{
    state: () => {
        return {
            language : 'fa',
            fa : {
                name : 'مهدی چاوشی',
                role: "توسعه دهنده فرانت‌اند",
                aboutSummary: 'توسعه‌دهنده فرانت‌اند با بیش از یک سال تجربه، در خلق تجربیات دیجیتال شگفت‌انگیز. آماده برای تبدیل ایده شما به واقعیت.',
                aboutDetailed: 'من توسعه‌دهنده فرانت‌اند و مهندس کامپیوتر در تبریز هستم. تخصص من در ایجاد تجارب کاربری جذاب با استفاده از Nuxt.js، Vue.js ،Tailwind و Vuetify.js است. به مدت سه سال به عنوان توسعه‌دهنده فرانت‌اند مشغول به کار بوده‌ام، که دو سال از آن‌ها در دانشگاه به توسعه ی پروژه های دانشگاهی اختصاص داشته و یک سال در کار حرفه‌ای فعالیت داشته‌ام.',
                address : 'ایران ، تبریز ، چایکنار ، بعد‌از پل منصور ، روبروی شهرداری منطقه یک ، برج مشاوران ، واحد B5',
                phoneNumber : '۰۹۱۴۱۰۲۳۶۸۲',
                emailAddress : 'Mahdichavoshi14@gmail.com',
                englishPhoneNumber : '+989141023682',
                addressUrl : 'https://www.google.com/maps/place/Moshaveran+Tower/@38.0763484,46.3095145,21z/data=!4m6!3m5!1s0x401a052aefbfeee9:0x3faa45e6647041dd!8m2!3d38.0763197!4d46.3093364!16s%2Fg%2F1pp2wz0_x?entry=ttu',
                socialMedias : [
                    {
                        title: 'instagram',
                        iconClass: {'pi-instagram': true},
                        link: 'https://instagram.com/mahdi_turrkk'
                    },
                    {
                        title: 'github',
                        iconClass: {'pi-github': true},
                        link: 'https://github.com/mahdi-turrkk'
                    },
                    {
                        title: 'linkedin',
                        iconClass: {'pi-linkedin': true},
                        link: 'https://linkedin.com/in/mahdi-chavoshi'
                    },
                    {
                        title: 'telegram',
                        iconClass: {'pi-telegram': true},
                        link: 'https://t.me/mahdi_turrkk'
                    },
                ],
                skills : [
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
                ],
                educations : [
                    {
                        fieldOfStudy : 'معماری سیستم‌های کامپیوتری',
                        degree : 'کارشناسی ارشد',
                        start : '۱۴۰۲',
                        end : 'تاکنون',
                        institution : 'دانشگاه تبریز',
                        institutionLogo : '/tabrizUniversity.png'
                    },
                    {
                        fieldOfStudy : 'مهندسی کامپیوتر',
                        degree : 'کارشناسی',
                        start : '۱۳۹۸',
                        end : '۱۴۰۲',
                        institution : 'دانشگاه تبریز',
                        institutionLogo : '/tabrizUniversity.png'
                    },
                ],
                experiences : [
                    {
                        companyName : 'توسعه دهندگان نرم‌افزار درناتک',
                        role : 'موسس / توسعه دهنده فرانت‌اند',
                        start : '۱۴۰۱',
                        end : 'تاکنون',
                        projects : 'Merkato24.com - Dornatech.ir'
                    },
                    {
                        companyName : 'فریلنسری',
                        role : 'توسعه دهنده فرانت‌اند',
                        start : '۱۴۰۱',
                        end : 'تاکنون',
                        projects : 'X-ui Panel Manager'
                    },
                ],
                projects : [
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
                ],
                emailURL : 'https://sendmail.mahdichavoshi.ir/sendMail.php',
                emailDestination : 'mahdichavoshi14@gmail.com'
            },
            en : {
                name : 'Mahdi Chavoshi',
                role: "frontend developer",
                aboutSummary: 'Passionate frontend developer with over a year of hands-on experience, crafting captivating digital experiences. Ready to bring your web vision to life.',
                aboutDetailed: 'I\'m Mahdi Chavoshi, A Front-End Developer And Computer Engineer Based In Tabriz,\n' +
                    'Iran. I Specialize In Creating Captivating User Experiences With Nuxt.Js,\n' +
                    'Vue.Js,Tailwind And Vuetify.Js.I have been employed as a Front-End Developer for\n' +
                    'three years, with two of those years dedicated to educational pursuits at university\n' +
                    'and one year engaged in professional work.Passionate About Continuous Learning\n' +
                    'And Staying Up To Date With Industry Trends, My Goal Is To Make A Positive Impact\n' +
                    'In Web Development Through Exceptional User Experiences.',
                address : 'B5 , Moshaveran tower , Chaykenar st. , Tabriz , East azerbaijan province , Iran',
                phoneNumber : '09141023682',
                emailAddress : 'Mahdichavoshi14@gmail.com',
                englishPhoneNumber : '+989141023682',
                addressUrl : 'https://www.google.com/maps/place/Moshaveran+Tower/@38.0763484,46.3095145,21z/data=!4m6!3m5!1s0x401a052aefbfeee9:0x3faa45e6647041dd!8m2!3d38.0763197!4d46.3093364!16s%2Fg%2F1pp2wz0_x?entry=ttu',
                socialMedias : [
                    {
                        title: 'instagram',
                        iconClass: {'pi-instagram': true},
                        link: 'https://instagram.com/mahdi_turrkk'
                    },
                    {
                        title: 'github',
                        iconClass: {'pi-github': true},
                        link: 'https://github.com/mahdi-turrkk'
                    },
                    {
                        title: 'linkedin',
                        iconClass: {'pi-linkedin': true},
                        link: 'https://linkedin.com/in/mahdi-chavoshi'
                    },
                    {
                        title: 'telegram',
                        iconClass: {'pi-telegram': true},
                        link: 'https://t.me/mahdi_turrkk'
                    },
                ],
                skills : [
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
                ],
                educations : [
                    {
                        fieldOfStudy : 'Computer Systems Architecture',
                        degree : 'Master',
                        start : '2023',
                        end : 'present',
                        institution : 'Tabriz University',
                        institutionLogo : '/tabrizUniversity.png'
                    },
                    {
                        fieldOfStudy : 'Computer Engineering',
                        degree : 'Bachelor',
                        start : '2019',
                        end : '2023',
                        institution : 'Tabriz University',
                        institutionLogo : '/tabrizUniversity.png'
                    },
                ],
                experiences : [
                    {
                        companyName : 'DornaTech Development',
                        role : 'Co-Founder / Frontend Developer',
                        start : '2022',
                        end : 'present',
                        projects : 'Merkato24.com - Dornatech.ir'
                    },
                    {
                        companyName : 'Freelancing',
                        role : 'Frontend Developer',
                        start : '2022',
                        end : 'present',
                        projects : 'X-ui Panel Manager'
                    },
                ],
                projects : [
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
                ],
                emailURL : 'https://sendmail.mahdichavoshi.ir/sendMail.php',
                emailDestination : 'mahdichavoshi14@gmail.com'
            }
        }
    },
    getters : {
        getPersonInfo() {
            return this[this.language]
        },
    },
    actions : {
        changeLanguage(payload) {
            this.language = payload[1]
        },
    }
})