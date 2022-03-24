<template>
  <section class="acerca-de" id="acerca-de">
    <div class="contenedor">
      <div class="foto">
        <img src="@/assets/img/PastelesMamiLu.png" alt="Foto" />
      </div>
      <article>
        <h3>Acerca de</h3>
        <p>
          Soy una ama de casa, con mas de 15 años de experiencia preparando
          comida y banquetes para fiestas, reuniones, fechas especiales, etc. He
          entregado comida a muchos de los hospitales de la ciudad de Puebla,
          cuento con comidas por temporada y cada año mis clientes me vuelven a
          solicitar y recomendar. ¡Animate a probar!
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.acerca-de .contenedor {
  overflow: visible;
  position: relative;
}
.acerca-de .foto {
  width: 80%;
  position: absolute;
  left: 0;
  top: -50px;
  z-index: 0;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
}
.acerca-de .foto img {
  vertical-align: top;
  width: 100%;
}
.acerca-de article {
  background: #fff;
  padding: 40px;
  width: 50%;
  position: relative;
  top: 220px;
  z-index: 1;
  float: right;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
}
.acerca-de article h3 {
  font-size: 50px;
  font-weight: 300;
  margin-bottom: 40px;
}
.acerca-de article p {
  line-height: 28px;
  margin-bottom: 15px;
}
</style>
