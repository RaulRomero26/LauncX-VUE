<template>
    <div class="contenedor">
        
    <table class="tabla">
        <th>Nombre</th>
        <th>Correo</th>
        <th>Teléfono</th>
        <th>Descripción</th>
        <th>Dertalles del pedido</th>
        <tr v-for="item in $store.state.pedidos" :key="item.tel">
           <td>{{item.nombre}} {{item.apellidos}}</td>
           <td>{{item.email}}</td>
           <td>{{item.tel}}</td>
           <td>{{item.desc}}</td>
           <td><span v-for="pedido in item.pedidos" :key="pedido.nombre">
                    <span v-if="pedido.cantidad != 0">
                        {{pedido.nombre}} : {{pedido.cantidad}}
                    </span>
               </span>
            </td>
        </tr>
    </table>
    </div>
</template>

<style scoped>
.tabla {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;
}

.tabla td, .tabla th {
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 1.5rem
}

.tabla tr:nth-child(even){background-color: #f2f2f2;}

.tabla tr:hover {background-color: #ddd;}

.tabla th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f39e8f;
  color: white;
}
</style>