<template>
  <section class="ubicacion" id="ubicacion">
    <div class="contenedor">
      <h3 class="titulo">Ubicacion</h3>
      <div class="direccion">
        <p class="calle">Calle 30 de Julio 563<br />Los Angeles Mayorazgo</p>
        <p class="telefono">(221) 423-2541</p>
        <p class="correo">m.d.1.q@hotmail.com</p>
      </div>
      <div class="horarios">
        <h4>Horarios</h4>
        <p class="entre-semana">Lunes a Viernes<br />8:00am - 9:00pm</p>
        <p class="fin-semana">Sabados y Domingos<br />11:00am - 7:00pm</p>
      </div>
    </div>
  </section>

  <section class="mapa">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.004275660663!2d-98.2233182845379!3d19.019533258686124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0b2d4581e81%3A0x618d5ea455095c05!2s30%20de%20Julio%20563%2C%20%C3%81ngeles%20Mayorazgo%2C%20Puebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1603047209199!5m2!1ses-419!2smx"
      width="1600"
      height="550"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </section>
</template>

<style scoped>
/* ------ UBICACION-----*/

.ubicacion {
  background: #fff;
  padding: 60px 0;
  overflow: hidden;
}
.ubicacion .titulo {
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  font-weight: 300;
  margin-bottom: 40px;
}
.ubicacion .direccion {
  float: left;
  width: 50%;
  text-align: left;
}
.ubicacion .horarios {
  float: right;
  width: 50%;
  text-align: right;
  overflow: hidden;
}
.ubicacion .direccion .calle {
  margin-bottom: 15px;
}
.ubicacion .horarios h4 {
  text-align: center;
  margin-bottom: 20px;
}
.ubicacion .horarios .entre-semana,
.ubicacion .horarios .fin-semana {
  width: 50%;
  float: left;
  text-align: center;
}

.mapa {
  width: 100%;
  overflow: hidden;
}
.mapa iframe {
  width: 100%;
  max-height: 600px;
}
</style>
