<template>
  <section class="menu">
    <div class="contenedor">
      <h3 class="titulo" id="platillos">Menu</h3>
      <div class="contenedor-menu">
        <div class="contenedor-menu-2">
          <article>
            <p class="categoria">Pasteles y Postres</p>
            <div class="platillo">
              <p class="nombre">Pastel de tres leches.</p>
              <p class="precio">$150</p>
              <p class="descripcion">
                Pastel de 3 leches relleno de durazno trozeado en almibar.
              </p>
            </div>
            <div class="platillo">
              <p class="nombre">Pastel de queso</p>
              <p class="precio">$200</p>
              <p class="descripcion">
                Rica pastel de queso crema, con mermelada de zarzamora en la
                cubierta.
              </p>
            </div>
            <div class="platillo">
              <p class="nombre">Pastel de frutas.</p>
              <p class="precio">$125</p>
              <p class="descripcion">
                Incluye fresas, melón, sandia, kiwi y uvas.
              </p>
            </div>
            <div class="platillo">
              <p class="nombre">Macarrones</p>
              <p class="precio">$200</p>
              <p class="descripcion">
                Macarrones de diferentes colores y sabores, 20 piezas.
              </p>
            </div>
          </article>

          <article>
            <p class="categoria">Adornos / Decoraciones</p>
            <div class="platillo">
              <p class="nombre">Bombones</p>
              <p class="precio">$20</p>
              <p class="descripcion">
                Bombones de diferentes tamaños y colores.
              </p>
            </div>
            <div class="platillo">
              <p class="nombre">Chispitas de colores</p>
              <p class="precio">$15</p>
              <p class="descripcion">
                Diferentes chispitas para decorar el pastel.
              </p>
            </div>
            <div class="platillo">
              <p class="nombre">Frutos rojos</p>
              <p class="precio">$25</p>
              <p class="descripcion">Variedad de frescos frutos rojos.</p>
            </div>
            <div class="platillo">
              <p class="nombre">Chocolate trozeado y en polvo</p>
              <p class="precio">$20</p>
              <p class="descripcion">Cacao en polvo listo para espolvorear.</p>
              <br />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu {
  padding-top: 580px;
  margin-bottom: 50px;
}
.formulario {
  padding-top: 50px;
  margin-bottom: 50px;
}
.menu .titulo {
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
}

.menu .contenedor-menu,
.menu .contenedor-menu-2 {
  border: 1px solid #000;
  background: transparent;
  padding: 10px;
  overflow: hidden;
}

.menu article {
  width: 50%;
  float: left;
  padding: 20px;
}

.menu .categoria {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
}

.menu .platillo {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 4px dotted #000;
  overflow: hidden;
}

.menu .nombre {
  font-size: 20px;
  margin-bottom: 15px;
  float: left;
}
.nombre {
  font-size: 20px;
  margin-bottom: 15px;
  float: left;
}
.menu .precio {
  font-size: 20px;
  margin-bottom: 15px;
  float: right;
}
.menu .descripcion {
  font-size: 16px;
  color: #676767;
  clear: both;
}
</style>
