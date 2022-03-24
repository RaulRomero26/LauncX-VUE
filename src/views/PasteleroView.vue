<template>
     <Header />
     <div v-for="item in $store.state.existencias" :key="item.id">
       <ContadorPastelero v-bind:item="item"/>
     </div>
     <Footer />
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContadorPastelero from '@/components/ContadorPastelero.vue';

export default {
  name: "PasteleroView",
  components: {
    Header,
    ContadorPastelero,
    Footer,
  },
};
</script>
