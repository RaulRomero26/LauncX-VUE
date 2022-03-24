<template>
    <div class="contenedor">
        <form action="">
            <label for="nombre">Nombre: </label>
            <input v-model="nombre" type="text" id="nombre">
            <label for="apellidos">Apellidos: </label>
            <input v-model="apellidos" type="text" id="apellidos">
            <label for="email">Email: </label>
            <input v-model="email" type="email" id="email">
            <label for="telefono">Telefono: </label>
            <input v-model="tel" type="tel" id="telefono">
            <label for="descripcion">Descripcion: </label>
            <textarea v-model="desc"  id="descripcion"></textarea>
            <button type="button"
                    class="boton"
                    @click="$store.dispatch(
                        'hacerPedido', 
                        { 
                        nombre,
                        apellidos,
                        email,
                        tel,
                        desc
                         })"> 
                        Hacer pedido
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Form"
}
</script>

<style scoped>
.contenedorInput{
    width: 50%;
}
input[type=text],
input[type=email],
input[type=tel],
textarea
{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #fcd5ce;
}
.boton{
    width: 200px;
    background-color: #fcd5ce;
    border:2px solid #f39e8f;
    border-radius: 5px;
    font-size: 1.5rem;
    color: #fff;
    float: right;
    margin-bottom: 20px;
}
label{
    font-size: 1.3rem;
}
</style>