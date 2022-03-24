<template>
  <section class="galeria" id="galeria">
    <div
      v-for="platillo in $store.state.platillos"
      :key="platillo.nombre"
      class="foto"
    >
      <img :src="platillo.img" :alt="platillo.nombre" />
    </div>
  </section>
</template>

<style scoped>
.galeria {
  overflow: hidden;
}
.galeria .foto {
  max-width: 480px;
  max-height: 480px;
  width: 25%;
  float: left;
}
.galeria .foto img {
  width: 100%;
  vertical-align: top;
  opacity: 0.7;
}
.galeria .foto img:hover {
  opacity: 1;
  transition: all 0.3s ease;
}
</style>
