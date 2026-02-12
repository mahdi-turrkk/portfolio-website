import { defineStore } from 'pinia'
import { ref } from "vue";

export const usePersonInformationStore = defineStore('personInformation', {
  state: () => {
    return {
      language: 'fa',
      fa: {
        name: 'مهدی چاوشی',
        role: "توسعه‌دهنده فرانت‌اند",
        aboutSummary: 'توسعه‌دهنده فرانت‌اند با بیش از سه سال تجربه حرفه‌ای، متخصص در ایجاد تجربیات دیجیتال جذاب و کاربرپسند. آماده تبدیل ایده‌های شما به واقعیت‌های دیجیتال.',
        aboutDetailed: 'من مهدی چاوشی هستم، توسعه‌دهنده فرانت‌اند و مهندس کامپیوتر. تخصص من در طراحی و توسعه وب‌اپلیکیشن‌های مدرن، واکنش‌گرا و کاربرمحور با استفاده از فناوری‌هایی مانند Nuxt.js، Vue.js، Tailwind CSS و Vuetify است.\n' +
          '\n' +
          'با بیش از سه سال تجربه حرفه‌ای در توسعه فرانت‌اند و پیشینه تحصیلی قوی، کارشناسی ارشد معماری سیستم‌های کامپیوتری را از دانشگاه تبریز به پایان رسانده‌ام. موضوع پایان‌نامه‌ام «به‌کارگیری منطق فازی همراه با بلاک‌چین در یادگیری فدرال برای حفاظت از مدل جهانی در برابر به‌روزرسانی‌های آلوده (poisoned updates)» بوده است.\n' +
          'همچنین، به عنوان نویسنده اول، مقاله‌ای با عنوان "پیاده‌سازی بهینه یک مدل سبک هوش مصنوعی برای تشخیص دست‌خط روی FPGA" را در کنفرانس IEEE منتشر کرده‌ام.\n' +
          '\n' +
          'مشتاق همکاری در پروژه‌های نوآورانه و فرصت‌های شغلی مرتبط با توسعه فرانت‌اند هستم تا تجربیات کاربری حرفه‌ای و تأثیرگذار خلق کنم.',
        address: 'ایران، تبریز، چایکنار، بعد از پل منصور، روبروی شهرداری منطقه یک، برج مشاوران، واحد B5',
        phoneNumber: '۰۹۱۴۱۰۲۳۶۸۲',
        emailAddress: 'Mahdichavoshi14@gmail.com',
        englishPhoneNumber: '+989141023682',
        addressUrl: 'https://www.google.com/maps/place/Moshaveran+Tower/@38.0763484,46.3095145,21z/data=!4m6!3m5!1s0x401a052aefbfeee9:0x3faa45e6647041dd!8m2!3d38.0763197!4d46.3093364!16s%2Fg%2F1pp2wz0_x?entry=ttu',
        socialMedias: [
          {
            title: 'instagram',
            iconClass: { 'pi-instagram': true },
            link: 'https://instagram.com/mahdi_turrkk'
          },
          {
            title: 'github',
            iconClass: { 'pi-github': true },
            link: 'https://github.com/mahdi-turrkk'
          },
          {
            title: 'linkedin',
            iconClass: { 'pi-linkedin': true },
            link: 'https://linkedin.com/in/mahdi-chavoshi'
          },
          {
            title: 'telegram',
            iconClass: { 'pi-telegram': true },
            link: 'https://t.me/mahdi_turrkk'
          },
        ],
        skills: [
          {
            title: "Vue.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuejs/vuejs-original.svg"
          },
          {
            title: "Nuxt.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nuxtjs/nuxtjs-original.svg"
          },
          {
            title: "TailwindCss",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg"
          },
          {
            title: "Vuetify",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuetify/vuetify-original.svg"
          },
          {
            title: "Javascript",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-original.svg"
          },
          {
            title: "Typescript",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
          },
          {
            title: "Git",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/git/git-original.svg"
          },
          {
            title: "Figma",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/figma/figma-original.svg"
          },
          {
            title: "Node.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original.svg"
          },
          {
            title: "Express.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/express/express-original.svg"
          },
          {
            title: "Linux",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/linux/linux-original.svg"
          },
          {
            title: "Ionic",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/ionic/ionic-original.svg"
          },
        ],
        educations: [
          {
            fieldOfStudy: 'معماری سیستم‌های کامپیوتری',
            degree: 'کارشناسی ارشد',
            start: '۱۴۰۲',
            end: '۱۴۰۴',
            institution: 'دانشگاه تبریز',
            institutionLogo: '/tabrizUniversity.png'
          },
          {
            fieldOfStudy: 'مهندسی کامپیوتر',
            degree: 'کارشناسی',
            start: '۱۳۹۸',
            end: '۱۴۰۲',
            institution: 'دانشگاه تبریز',
            institutionLogo: '/tabrizUniversity.png'
          },
        ],
        experiences: [
          {
            companyName: 'توسعه‌دهندگان نرم‌افزار درناتک',
            role: 'مؤسس / توسعه‌دهنده فرانت‌اند',
            start: '۱۴۰۱',
            end: 'تاکنون',
            projects: 'Merkato24.com - Dornatech.ir'
          },
          {
            companyName: 'فریلنسینگ',
            role: 'توسعه‌دهنده فرانت‌اند',
            start: '۱۴۰۱',
            end: 'تاکنون',
            projects: 'X-ui Panel Manager - Danayan Crowd - Zarin Crowd - Award Maven - Consulting Platform'
          },
        ],
        projects: [
          {
            title: "وب‌سایت شرکت درناتک (دمو)",
            link: 'https://Dornatech.ir',
            imgSrc: '/dornatech.webp',
            description: 'فرانت‌اند وب‌سایت شرکت درناتک با استفاده از Nuxt.js 2، Vue.js 2 و Vuetify 2 توسعه یافته است. نسخه دموی وب‌سایت اکنون در دسترس است و به‌زودی به‌طور رسمی منتشر خواهد شد.',
            technologies: 'Nuxt.js، Vuetify، Vue.js',
            role: 'مدیر پروژه - توسعه‌دهنده فرانت‌اند'
          },
          {
            title: "مرکاتو۲۴ (دمو)",
            link: 'https://Merkato24.com',
            imgSrc: '/merkato24.webp',
            description: 'مرکاتو۲۴ یک بازار دیجیتال برای آفریقا است و فرانت‌اند آن با استفاده از Nuxt.js 2، Vue.js 2 و Vuetify 2 توسعه یافته است. این وب‌اپلیکیشن شامل سه پنل عمومی، کاربر و مدیریت است که از طریق آدرس‌های "/"، "/User" و "/Admin" قابل دسترسی هستند. توسعه فرانت‌اند به پایان رسیده و بک‌اند در حال توسعه است. نسخه دموی آن اکنون در دسترس است.',
            technologies: 'Nuxt.js، Vuetify، Vue.js، PWA',
            role: 'توسعه‌دهنده فرانت‌اند'
          },
          {
            title: "پنل مدیریت پنل‌های X-UI",
            link: 'https://panel.gixmetir.online:5002',
            imgSrc: '/x-uiPanelManager.webp',
            description: 'این پنل برای مدیریت پنل‌های X-UI به‌منظور فروش اشتراک‌های V2ray طراحی شده است. فرانت‌اند آن با Vue.js 3 و Tailwind CSS توسعه یافته و شامل دو بخش مدیریت و مشتری (فروشنده) است. سورس‌کد پروژه در GitHub در دسترس است.',
            technologies: 'Vue.js، Tailwind CSS، PWA',
            role: 'توسعه‌دهنده فرانت‌اند',
            github: 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
          },
          {
            title: "دانایان کراد",
            link: 'https://crowd.danayan.broker',
            imgSrc: '/danayan-main.webp',
            description: 'این وب‌سایت یک پلتفرم تأمین مالی جمعی ایرانی است که زیرمجموعه کارگزاری دانایان عمل می‌کند. فرانت‌اند آن با Vue.js 3 و Tailwind CSS توسعه یافته و شامل پنل‌های عمومی، کاربر و مدیریت است.',
            technologies: 'Vue.js، Tailwind CSS',
            role: 'توسعه‌دهنده فرانت‌اند',
          },
          {
            title: "زرین کراد",
            link: 'https://zarincrowd.com/',
            imgSrc: '/zarin-main.webp',
            description: 'این وب‌سایت یک پلتفرم تأمین مالی جمعی ایرانی است که تحت نظارت کارگزاری دانایان فعالیت می‌کند. فرانت‌اند آن با Vue.js 3 و Tailwind CSS توسعه یافته و شامل پنل‌های عمومی، کاربر و مدیریت است.',
            technologies: 'Vue.js، Tailwind CSS',
            role: 'توسعه‌دهنده فرانت‌اند',
          },
          {
            title: "Award Maven",
            link: 'https://awardmaven.com/portal',
            imgSrc: '/awardMaven.webp',
            description: 'مشارکت در مهاجرت پورتال قدیمی Award Maven از معماری MVC به رابط کاربری مدرن مبتنی بر Vue.js و ادغام با APIهای RESTful. همچنین، کمک به انتقال سیستم از Vue.js/Laravel به Next.js برای بهبود عملکرد، مقیاس‌پذیری و نگهداری‌پذیری. بازنویسی کامپوننت‌های رابط کاربری، افزودن قابلیت‌های جدید و بهینه‌سازی کلی پلتفرم.',
            technologies: 'Vue.js، Tailwind CSS، Vuetify، Next.js',
            role: 'توسعه‌دهنده فرانت‌اند',
          },
          {
            title: "پلتفرم مشاوره آنلاین (پروژه محرمانه)",
            imgSrc: '/consulting.webp',
            description: 'توسعه رابط کاربری یک پلتفرم مشاوره آنلاین محرمانه با استفاده از Nuxt.js و Tailwind CSS. طراحی و بهینه‌سازی یک PWA واکنش‌گرا که با WebView در اپلیکیشن اندرویدی مبتنی بر Flutter ادغام شده تا تجربه‌ای یکپارچه و قابل دسترس در تمامی پلتفرم‌ها فراهم شود.',
            technologies: 'Vue.js، Tailwind CSS، Nuxt.js، Flutter',
            role: 'توسعه‌دهنده فرانت‌اند',
          },
          {
            title: "آذآنتن",
            link: '',
            imgSrc: '/azanten.webp',
            description: 'وب‌سایت پخش فیلم و سریال به زبان ترکی آذربایجانی. مسئولیت توسعه فرانت‌اند این پلتفرم با استفاده از Vue.js بر عهده من بوده است. پروژه در حال توسعه فعال است و هدف آن ارائه محتوای باکیفیت و کاربرپسند به علاقه‌مندان به سینمای ترکی آذری می‌باشد.',
            technologies: 'Vue.js, Tailwindcss',
            role: 'توسعه‌دهنده فرانت‌اند',
          },
          {
            title: "وب‌سایت فروشگاهی شخصی (ماژولار)",
            link: '',
            imgSrc: '/personal-shop.webp',
            description: 'یک پلتفرم فروشگاهی شخصی و ماژولار که من به همراه یکی از دوستانم توسعه فرانت‌اند آن را بر عهده داریم. این پروژه با Vue.js و Nuxt.js ساخته شده و طراحی ماژولار دارد؛ به‌طوری که هر ماژول و کامپوننت چندین طرح (variant) مستقل دارد و می‌توانند بدون وابستگی به یکدیگر کار کنند. پروژه همچنان در حال توسعه است.',
            technologies: 'Vue.js, Nuxt.js, Tailwindcss',
            role: 'توسعه‌دهنده فرانت‌اند و طراحی UI/UX',
          },
        ],
        emailURL: 'https://mahdichavoshi.ir',
        emailDestination: 'mahdichavoshi14@gmail.com',
        achievements: [
          {
            title: 'مقاله کنفرانس',
            description: 'پیاده‌سازی بهینه یک مدل سبک هوش مصنوعی برای تشخیص دست‌خط روی FPGA',
            year: '۱۴۰۳',
            organization: '2024 IEEE East-West Design & Test Symposium (EWDTS)',
            link: 'https://doi.org/10.1109/EWDTS63723.2024.10873796',
          },
        ]
      },
      en: {
        name: 'Mahdi Chavoshi',
        role: "Frontend Developer",
        aboutSummary: 'Experienced frontend developer with over three years of expertise in building engaging and user-centric digital experiences. Eager to transform your ideas into polished, high-performing web applications.',
        aboutDetailed: 'I\'m Mahdi Chavoshi, a Frontend Developer and Computer Engineer. I specialize in crafting responsive, modern web applications using technologies like Nuxt.js, Vue.js, Tailwind CSS, and Vuetify.\n' +
          '\n' +
          'With more than three years of professional experience and a strong academic background, I have completed my Master\'s in Computer Systems Architecture at the University of Tabriz. My thesis focused on "Utilizing fuzzy logic combined with blockchain in federated learning to protect the global model from contaminated/poisoned updates."\n' +
          'I am also the first author of an IEEE conference paper titled "Efficient Implementation of a Lightweight AI Classification Model for Handwriting Detection on FPGA."\n' +
          '\n' +
          'I\'m passionate about clean code, exceptional user experiences, and collaborating on innovative projects that drive real impact.',
        address: 'B5, Moshaveran Tower, Chaykenar St., Tabriz, East Azerbaijan Province, Iran',
        phoneNumber: '09141023682',
        emailAddress: 'Mahdichavoshi14@gmail.com',
        englishPhoneNumber: '+989141023682',
        addressUrl: 'https://www.google.com/maps/place/Moshaveran+Tower/@38.0763484,46.3095145,21z/data=!4m6!3m5!1s0x401a052aefbfeee9:0x3faa45e6647041dd!8m2!3d38.0763197!4d46.3093364!16s%2Fg%2F1pp2wz0_x?entry=ttu',
        socialMedias: [
          {
            title: 'instagram',
            iconClass: { 'pi-instagram': true },
            link: 'https://instagram.com/mahdi_turrkk'
          },
          {
            title: 'github',
            iconClass: { 'pi-github': true },
            link: 'https://github.com/mahdi-turrkk'
          },
          {
            title: 'linkedin',
            iconClass: { 'pi-linkedin': true },
            link: 'https://linkedin.com/in/mahdi-chavoshi'
          },
          {
            title: 'telegram',
            iconClass: { 'pi-telegram': true },
            link: 'https://t.me/mahdi_turrkk'
          },
        ],
        skills: [
          {
            title: "Vue.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuejs/vuejs-original.svg"
          },
          {
            title: "Nuxt.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nuxtjs/nuxtjs-original.svg"
          },
          {
            title: "TailwindCss",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg"
          },
          {
            title: "Vuetify",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuetify/vuetify-original.svg"
          },
          {
            title: "Javascript",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-original.svg"
          },
          {
            title: "Typescript",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg"
          },
          {
            title: "Git",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/git/git-original.svg"
          },
          {
            title: "Figma",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/figma/figma-original.svg"
          },
          {
            title: "Node.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original.svg"
          },
          {
            title: "Express.js",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/express/express-original.svg"
          },
          {
            title: "Linux",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/linux/linux-original.svg"
          },
          {
            title: "Ionic",
            imgSrc: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/ionic/ionic-original.svg"
          },
        ],
        educations: [
          {
            fieldOfStudy: 'Computer Systems Architecture',
            degree: 'Master\'s',
            start: '2023',
            end: '2025',
            institution: 'University of Tabriz',
            institutionLogo: '/tabrizUniversity.png'
          },
          {
            fieldOfStudy: 'Computer Engineering',
            degree: 'Bachelor\'s',
            start: '2019',
            end: '2023',
            institution: 'University of Tabriz',
            institutionLogo: '/tabrizUniversity.png'
          },
        ],
        experiences: [
          {
            companyName: 'DornaTech Software Developers',
            role: 'Co-Founder / Frontend Developer',
            start: '2022',
            end: 'Present',
            projects: 'Merkato24.com - Dornatech.ir'
          },
          {
            companyName: 'Freelancing',
            role: 'Frontend Developer',
            start: '2022',
            end: 'Present',
            projects: 'X-ui Panel Manager - Danayan Crowd - Zarin Crowd - Award Maven - Consulting Platform'
          },
        ],
        projects: [
          {
            title: "DornaTech Company Website (Demo)",
            link: 'https://Dornatech.ir',
            imgSrc: '/dornatech.webp',
            description: 'The frontend of the DornaTech company website was developed using Nuxt.js 2, Vue.js 2, and Vuetify 2. A demo version is currently available, with the official release coming soon.',
            technologies: 'Nuxt.js, Vuetify, Vue.js',
            role: 'Project Manager - Frontend Developer'
          },
          {
            title: "Merkato24 (Demo)",
            link: 'https://Merkato24.com',
            imgSrc: '/merkato24.webp',
            description: 'Merkato24 is a digital marketplace for Africa, with its frontend built using Nuxt.js 2, Vue.js 2, and Vuetify 2. It features three panels: public, user, and admin, accessible via "/", "/User", and "/Admin". Frontend development is complete, and backend work is ongoing. A demo version is available.',
            technologies: 'Nuxt.js, Vuetify, Vue.js, PWA',
            role: 'Frontend Developer'
          },
          {
            title: "X-UI Panel Manager",
            link: 'https://panel.gixmetir.online:5002',
            imgSrc: '/x-uiPanelManager.webp',
            description: 'This panel manages X-UI panels for selling V2ray subscriptions. Its frontend was developed using Vue.js 3 and Tailwind CSS, featuring admin and customer (seller) sections. The source code is available on GitHub.',
            technologies: 'Vue.js, Tailwind CSS, PWA',
            role: 'Frontend Developer',
            github: 'https://github.com/mahdi-turrkk/x-ui-panel-manager'
          },
          {
            title: "Danayan Crowd",
            link: 'https://crowd.danayan.broker',
            imgSrc: '/danayan-main.webp',
            description: 'This is an Iranian crowdfunding platform under Danayan Brokerage. The frontend was built with Vue.js 3 and Tailwind CSS, including public, user, and admin panels.',
            technologies: 'Vue.js, Tailwind CSS',
            role: 'Frontend Developer',
          },
          {
            title: "Zarin Crowd",
            link: 'https://zarincrowd.com/',
            imgSrc: '/zarin-main.webp',
            description: 'This Iranian crowdfunding platform operates under Danayan Brokerage\'s supervision. The frontend was developed using Vue.js 3 and Tailwind CSS, with public, user, and admin panels.',
            technologies: 'Vue.js, Tailwind CSS',
            role: 'Frontend Developer',
          },
          {
            title: "Award Maven",
            link: 'https://awardmaven.com/portal',
            imgSrc: '/awardMaven.webp',
            description: 'Contributed to migrating the legacy Award Maven portal from an MVC-based architecture to a modern Vue.js frontend integrated with RESTful APIs. Additionally, assisted in transitioning the system from Vue.js/Laravel to Next.js for enhanced performance, scalability, and maintainability. Refactored UI components, added new features, and optimized the overall platform.',
            technologies: 'Vue.js, Tailwind CSS, Vuetify, Next.js',
            role: 'Frontend Developer',
          },
          {
            title: "Online Consulting Platform (NDA Project)",
            imgSrc: '/consulting.webp',
            description: 'Developed the frontend for a confidential online consulting platform using Nuxt.js and Tailwind CSS. Designed an optimized, responsive PWA integrated via WebView into a Flutter-based Android app, ensuring seamless cross-platform accessibility and user experience.',
            technologies: 'Vue.js, Tailwind CSS, Nuxt.js, Flutter',
            role: 'Frontend Developer',
          },
          {
            title: "AzAnten",
            link: '',
            imgSrc: '/azanten.webp',
            description: 'A platform for streaming Turkish Azerbaijani movies and series. I have been responsible for developing the frontend using Vue.js. The project is actively under development, aiming to provide high-quality, user-friendly content for fans of Azerbaijani Turkish cinema.',
            technologies: 'Vue.js, Tailwind CSS',
            role: 'Frontend Developer',
          },
          {
            title: "Personal Modular E-commerce Website",
            link: '',
            imgSrc: '/personal-shop.webp',
            description: 'A personal modular e-commerce website that I am co-developing the frontend for, together with a friend. Built with Vue.js and Nuxt.js, the project features a highly modular architecture where each module and component has multiple independent designs (variants) that can function without dependencies on each other. The project is currently in active development.',
            technologies: 'Vue.js, Nuxt.js, Tailwindcss',
            role: 'Frontend Developer & UI/UX Design',
          },
        ],
        emailURL: 'https://mahdichavoshi.ir',
        emailDestination: 'mahdichavoshi14@gmail.com',
        achievements: [
          {
            title: 'Conference Paper',
            description: 'Efficient Implementation of a Lightweight AI Classification Model for Handwriting Detection on FPGA',
            year: '2024',
            organization: '2024 IEEE East-West Design & Test Symposium (EWDTS)',
            link: 'https://doi.org/10.1109/EWDTS63723.2024.10873796'
          },
        ]
      }
    }
  },
  getters: {
    getPersonInfo() {
      return this[this.language]
    },
  },
  actions: {
    changeLanguage(payload) {
      this.language = payload[1]
    },
  }
})