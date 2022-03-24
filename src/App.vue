<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 16px;
}

.contenedor {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
}
.main {
  background: url(@/assets/img/pink_rice.png);
  background-repeat: repeat;
}

@media screen and (max-width: 800px) {
  header .contenedor {
    position: static;
    height: auto;
  }
  header .textos {
    position: static;
    margin: 100px 0;
  }

  header .menu {
    text-align: center;
  }

  header .menu a {
    margin: 10px 20px;
  }

  header .textos .nombre {
    font-size: 30px;
  }
  header .textos h3 {
    font-size: 18px;
  }

  .acerca-de .foto {
    width: 100%;
    position: relative;
  }
  .acerca-de article {
    position: relative;
    width: 100%;
    top: -50px;
    transform: translate(0px 0);
  }
  .menu {
    padding-top: 300px;
  }
  .menu article {
    width: 100%;
  }
  .galeria .foto {
    width: 50%;
  }
  .mapa {
    width: 80%;
    margin: auto;
  }
}

@media screen and (max-width: 400px) {
  .acerca-de article h3 {
    font-size: 34px;
    margin-bottom: 10px;
  }

  .menu article .nombre,
  .menu article .precio {
    font-size: 16px;
    line-height: 16px;
  }

  .ubicacion .direccion {
    margin-bottom: 15px;
  }
  .ubicacion .horarios,
  .ubicacion .direccion {
    width: 100%;
    text-align: center;
  }
}
</style>
