<template>
  <header>
    <div class="contenedor">
      <nav class="menu">
        <router-link to="/">Inicio</router-link>
        <router-link to="ordena">Ordena Ahora</router-link>
        <router-link to="pastelero" class="link">Pastelero</router-link>
        <router-link to="pedidos" class="link">Ordenes</router-link>
      </nav>

      <div class="textos">
        <h1 class="nombre">Pasteles <span>Mami Lu</span></h1>
        <h3>Pasteles, postres y más...</h3>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background: url("@/assets/img/portada.webp") #e67078;
  background-size: cover;
  background-attachment: fixed;
  background-position: center 0;
}
header .contenedor {
  position: relative;
  height: 700px;
}
header .menu {
  width: 100%;
  text-align: right;
}
header .menu a {
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  display: inline-block;
  margin: 40px 20px;
  text-decoration: none;
  position: relative;
  text-shadow: black 0.1em 0.1em 0.2em;
}
header .menu a:hover {
  text-decoration: underline;
}
header .textos {
  width: 100%;
  color: #fff;
  position: absolute;
  top: 50%;
  margin-top: -52px;
}
header .textos .nombre {
  font-size: 70px;
  font-weight: 600;
  text-shadow: black 0.1em 0.1em 0.2em;
}
header .textos .nombre span {
  font-weight: 300;
}
header .textos h3 {
  margin-top: 80px;
  font-weight: 300;
  font-size: 35px;
  font-style: italic;
  text-shadow: black 0.1em 0.1em 0.2em;
}
</style>
