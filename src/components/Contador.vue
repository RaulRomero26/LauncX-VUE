<template>
  <div class="contenedor">
    <div class="contador" v-if="item">
        <div v-if="item.cantidad > 0 "> 
            <h3>{{ item.nombre }}: Haz ordenado {{item.cantidadOrdenada}} unidades</h3>
            <button class="boton" @click="$store.dispatch('bajarContador', { id: item.id })">
                -
            </button>
            <button class="boton" @click="$store.dispatch('subirContador', { id: item.id })">
                +
            </button>
        </div>
        <div v-else>
            <h3>Lo siento ya no hay mas producto: {{item.nombre}} espera a que el pastelero prepare más</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contador",
  props: ["item"],
};
</script>

<style scoped>
.contador {
  font-size: 20px;
  margin: auto;
  text-align: center;
  margin-top: 10px
}
.contador button {
  font-size: 30px;
  width: 70px;
  margin: 0 10px;
}
.boton{
    width: 200px;
    background-color: #fcd5ce;
    border:2px solid #f39e8f;
    border-radius: 5px;
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 20px;
}
</style>
