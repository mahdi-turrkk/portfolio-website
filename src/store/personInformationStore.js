import { defineStore } from 'pinia'
import {ref} from "vue";

export const usePersonInformationStore = defineStore('personInformation',{
    state: () => {
        return {
            language : 'fa',
            fa : {
                name : 'مهدی چاوشی',
                role: "توسعه دهنده فرانت‌اند",
                aboutSummary: 'توسعه‌دهنده فرانت‌اند با بیش از سه سال تجربه، در خلق تجربیات دیجیتال شگفت‌انگیز. آماده برای تبدیل ایده شما به واقعیت.',
                aboutDetailed: 'من مهدی چاوشی هستم، توسعه‌دهنده فرانت‌اند و مهندس کامپیوتر ساکن تبریز، ایران. در زمینه طراحی و توسعه وب‌اپلیکیشن‌های مدرن و واکنش‌گرا با استفاده از Nuxt.js، Vue.js، Tailwind CSS و Vuetify تخصص دارم.\n' +
                    'با بیش از ۳ سال تجربه حرفه‌ای در توسعه فرانت‌اند و همچنین پیش‌زمینه‌ای قوی در حوزه دانشگاهی، در حال حاضر دانشجوی کارشناسی ارشد معماری سیستم‌های کامپیوتری هستم و بر روی موضوعات یادگیری فدرال و فناوری بلاک‌چین تحقیق می‌کنم. همچنین به‌عنوان نویسنده اول، مقاله‌ای با عنوان "پیاده‌سازی بهینه یک مدل سبک هوش مصنوعی برای تشخیص دست‌خط روی FPGA" در کنفرانس IEEE منتشر کرده‌ام.\n' +
                    'مشتاق همکاری در پروژه‌ها و موقعیت‌های شغلی مرتبط با توسعه فرانت‌اند و خلق تجربه‌های کاربری حرفه‌ای هستم.',
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
                        projects : 'X-ui Panel Manager - Danayan crowd - Zarin crowd - Award Maven - Consulting Platform'
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
                        link : 'https://Merkato24.com',
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
                    {
                        title : "دانایان کراد",
                        link : 'https://crowd.danayan.broker',
                        imgSrc : '/danayan-main.webp',
                        description : 'این وبسایت یک پلتفرم تامین مالی جمعی ایرانی است که زیر مجموعه کارگزاری دانایان میباشد و فرانت اند آن با استفاده از Vue.js 3 و Tailwindcss توسعه یافته و دارای پنل های عمومی و کاربر و ادمین میباشد.',
                        technologies : 'Vue.js , Tailwind Css',
                        role : 'توسعه دهنده فرانت‌اند',
                    },
                    {
                        title : "زرین کراد",
                        link : 'https://zarincrowd.com/',
                        imgSrc : '/zarin-main.webp',
                        description : 'این وبسایت یک پلتفرم تامین مالی جمعی ایرانی است که تحت نظارت نهادمالی کارگزاری دانایان فعالیت میکند و فرانت اند آن با استفاده از Vue.js 3 و Tailwindcss توسعه یافته و دارای پنل های عمومی و کاربر و ادمین میباشد.',
                        technologies : 'Vue.js , Tailwind Css',
                        role : 'توسعه دهنده فرانت‌اند',
                    },
                    {
                        title : "Award Maven",
                        link : 'https://awardmaven.com/portal',
                        imgSrc : '/awardMaven.webp',
                        description: 'مشارکت در مهاجرت پورتال قدیمی Award Maven از معماری MVC به رابط کاربری مدرن مبتنی بر Vue.js و ادغام با APIهای RESTful. بازنویسی کامپوننت‌های رابط کاربری، افزودن قابلیت‌های جدید و بهبود نگهداری‌پذیری و عملکرد پلتفرم.',
                        technologies : 'Vue.js , Tailwind Css, vuetify',
                        role : 'توسعه دهنده فرانت‌اند',
                    },
                    {
                        title: "مشاوره آنلاین (پروژه محرمانه)",
                        imgSrc : '/consulting.webp',
                        description: 'توسعه رابط کاربری پلتفرم مشاوره آنلاین محرمانه با استفاده از Nuxt.js و Tailwind CSS. طراحی و بهینه‌سازی یک (PWA) واکنش‌گرا که با WebView در اپلیکیشن اندرویدی مبتنی بر Flutter ادغام شده تا تجربه‌ای روان و در دسترس در تمامی پلتفرم‌ها فراهم شود.',
                        technologies : 'Vue.js , Tailwind Css, Nuxt.js, Flutter',
                        role: 'توسعه‌دهنده فرانت‌اند',
                    },
                ],
                emailURL : 'https://mahdichavoshi.ir',
                emailDestination : 'mahdichavoshi14@gmail.com',
                achievements: [
                    {
                        title : 'مقاله کنفرانس',
                        description : 'Efficient Implementation of a Lightweight AI Classification Model for Handwriting Detection on FPGA',
                        year : '۱۴۰۳',
                        organization : '2024 IEEE East-West Design & Test Symposium (EWDTS)',
                        link: 'https://doi.org/10.1109/EWDTS63723.2024.10873796',
                    },
                ]
            },
            en : {
                name : 'Mahdi Chavoshi',
                role: "frontend developer",
                aboutSummary: 'Passionate frontend developer with over three years of hands-on experience, crafting captivating digital experiences. Ready to bring your web vision to life.',
                aboutDetailed: 'I\'m Mahdi Chavoshi, a Front-End Developer and Computer Engineer based in Tabriz, Iran. I build responsive and modern web applications using Nuxt.js, Vue.js, Tailwind CSS, and Vuetify.\n' +
                    '\n' +
                    'With over 3 years of professional experience and a strong academic background, I\'m currently pursuing a Master\'s in Computer Architecture, researching Federated Learning and Blockchain. I\'m also the first author of an IEEE-published paper on AI model optimization for FPGA.\n' +
                    '\n' +
                    'I’m passionate about clean code, great UX, and creating web experiences that make an impact.\n' +
                    '\n',
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
                        projects : 'X-ui Panel Manager - Danayan crowd - Zarin crowd - Award Maven - Consulting Platform'
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
                        link : 'https://Merkato24.com',
                        imgSrc : '/merkato24.webp',
                        description : 'Merkato 24 Is A Digital Marketplace For Africa, And Its Frontend Has Been Developed Using Nuxt.Js 2, Vue.Js 2, And Vuetify 2. The Marketplace Has Three Panels: Public, User, And Admin, Which Can Be Accessed Through The URLs "/" & "/User" And "/Admin". The Frontend Development Is Already Complete And The Backend Is Currently Under Development.Merkato 24 Has A Demo Version Available.',
                        technologies : 'Nuxt.js , vuetify , Vue.js , PWA',
                        role : 'Frontend Developer'
                    },
                    {
                        title : "X-UI Panel Manager",
                        imgSrc : '/x-uiPanelManager.webp',
                        description : 'X-ui panel manager is panel for managing x-ui panels for selling v2ray subscriptions, And Its Frontend Has Been Developed Using Vue.Js 3, And Tailwind. It has two Panels: Admin & Customer(SuperCustomer),panel\'s source code is available at github.',
                        technologies : 'Vue.js , Tailwind Css , PWA',
                        role : 'Frontend Developer',
                        github : 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
                    },
                    {
                        title : "Danayn Crowd",
                        link : 'https://crowd.danayan.broker',
                        imgSrc : '/danayan-main.webp',
                        description : 'This website is an Iranian crowdfunding platform, a subsidiary of Danayan Brokerage. Its front end is developed using Vue.js 3 and Tailwind CSS, and it features public, user, and admin panels.',
                        technologies : 'Vue.js , Tailwind Css',
                        role : 'Frontend Developer',
                    },
                    {
                        title : "Zarin Crowd",
                        link : 'https://zarincrowd.com/',
                        imgSrc : '/zarin-main.webp',
                        description : 'This website is an Iranian crowdfunding platform operating under the supervision of Danayan Brokerage\'s financial institution. Its front end is developed using Vue.js 3 and Tailwind CSS, and it includes public, user, and admin panels.',
                        technologies : 'Vue.js , Tailwind Css',
                        role : 'Frontend Developer',
                    },
                    {
                        title : "Award Maven",
                        link : 'https://awardmaven.com/portal',
                        imgSrc : '/awardMaven.webp',
                        description : 'Contributed to migrating the legacy Award Maven portal from an MVC-based architecture to a modern Vue.js frontend integrated with RESTful APIs. Participated in refactoring UI components, implementing new features, and improving maintainability and performance across the platform.',
                        technologies : 'Vue.js , Tailwind Css, vuetify',
                        role : 'Frontend Developer',
                    },
                    {
                        title : "Online Consulting (NDA Project)",
                        imgSrc : '/consulting.webp',
                        description : 'Developed the frontend of a confidential online consulting platform using Nuxt.js and Tailwind CSS. Designed and optimized a responsive PWA, which was integrated into a Flutter-based Android app via WebView to enable cross-platform accessibility and seamless mobile experience.',
                        technologies : 'Vue.js , Tailwind Css, Nuxt.js, Flutter',
                        role : 'Frontend Developer',
                    },
                ],
                emailURL : 'https://mahdichavoshi.ir',
                emailDestination : 'mahdichavoshi14@gmail.com',
                achievements: [
                    {
                        title : 'Conference Paper',
                        description : 'Efficient Implementation of a Lightweight AI Classification Model for Handwriting Detection on FPGA',
                        year : '2024',
                        organization : '2024 IEEE East-West Design & Test Symposium (EWDTS)',
                        link: 'https://doi.org/10.1109/EWDTS63723.2024.10873796'
                    },
                ]
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