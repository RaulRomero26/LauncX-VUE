<template>
     <Header />
     <div v-for="item in $store.state.existencias" :key="item.id">
       <Contador v-bind:item="item"/>
     </div>
     <Form />
     <Footer />
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Contador from "@/components/Contador.vue";
import Form from "@/components/Form.vue"
import Footer from "@/components/Footer.vue";

export default {
  name: "OrdenaView",
  components: {
    Header,
    Contador,
    Form,
    Footer,
  },
};
</script>
