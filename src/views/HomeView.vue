<template>
  <Header />
  <About />
  <Menu />
  <Galeria />
  <Mapa />
  <Footer />
 
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Menu from "@/components/Menu.vue";
import Galeria from "@/components/Galeria.vue";
import Mapa from "@/components/Mapa.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    About,
    Menu,
    Galeria,
    Mapa,
    Footer,
  },
};
</script>

