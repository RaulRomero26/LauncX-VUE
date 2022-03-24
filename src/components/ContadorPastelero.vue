<template>
  <div class="contenedor">
    <div class="contador" v-if="item">
            <h3>{{ item.nombre }}: quedan {{item.cantidad}} unidades</h3>
            <button class="boton" @click="$store.dispatch('bajarContadorExistencias', { id: item.id })">
                -
            </button>
            <button class="boton" @click="$store.dispatch('subirContadorExistencias', { id: item.id })">
                +
            </button>
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
