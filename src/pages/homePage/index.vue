<template>
  <default>
    <hero-section/>
    <about-section/>
    <skills-section/>
    <background-section/>
    <projects-section/>
    <contact-section/>
    <Footer/>
  </default>
</template>

<script setup>
import Default from "../../layouts/default.vue";
import HeroSection from "../../components/heroSection.vue";
import AboutSection from "../../components/aboutSection.vue";
import SkillsSection from "../../components/skillsSection.vue";
import BackgroundSection from "../../components/backgroundSection.vue";
import ProjectsSection from "../../components/projectsSection.vue";
import ContactSection from "../../components/contactSection.vue";
import Footer from "../../components/footer.vue";

</script>
