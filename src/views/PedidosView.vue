<template>
     <Header />
     <TablaPedidos/>
     <Footer />
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TablaPedidos from "@/components/TablaPedidos.vue"

export default {
  name: "PedidosView",
  components: {
    Header,
    TablaPedidos,
    Footer,
  },
};
</script>
