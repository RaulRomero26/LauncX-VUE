import { createStore } from "vuex";

export default createStore({
  state: {
    platillos: [
      { nombre: "Chispitas", img: require("../assets/img/chispitas.webp") },
      { nombre: "Dulces", img: require("../assets/img/dulces.webp") },
      { nombre: "Frutos", img: require("../assets/img/frutos.webp") },
      { nombre: "Pastel", img: require("../assets/img/pastel.webp") },
      { nombre: "Donas", img: require("../assets/img/donas.webp") },
      { nombre: "Queso", img: require("../assets/img/queso.webp") },
      { nombre: "Bombones", img: require("../assets/img/bombones.webp") },
      { nombre: "Cacao", img: require("../assets/img/cacao.webp") },
    ],
    existencias: [
      { id: 1, nombre: "Chispitas", cantidad: 10, cantidadOrdenada: 0 },
      { id: 2, nombre: "Dulces", cantidad: 10, cantidadOrdenada: 0 },
      { id: 3, nombre: "Frutos", cantidad: 10, cantidadOrdenada: 0 },
      { id: 4, nombre: "Bombones", cantidad: 10, cantidadOrdenada: 0 },
      { id: 5, nombre: "Pastel de 3 Leches", cantidad: 10, cantidadOrdenada: 0 },
      { id: 6, nombre: "Pastel de Queso", cantidad: 10, cantidadOrdenada: 0 },
      { id: 7, nombre: "Pastel de Frutas", cantidad: 10, cantidadOrdenada: 0 },
      { id: 8, nombre: "Macarrones", cantidad: 10, cantidadOrdenada: 0 },
    ],
    pedidos: [
    ]
  },
  getters: {
  },
  mutations: {
    subirContadorOrdenados(state, id) {
      this.state.existencias[id - 1].cantidad -= 1;
      this.state.existencias[id - 1].cantidadOrdenada += 1;
    },
    bajarContadorOrdenados(state, id) {
      this.state.existencias[id - 1].cantidad += 1;
      this.state.existencias[id - 1].cantidadOrdenada -= 1;
    },
    subirContadorExistencias(state, id) {
      this.state.existencias[id - 1].cantidad += 1;
    },
    bajarContadorExistencias(state, id) {
      this.state.existencias[id - 1].cantidad -= 1;
    },
    insertarPedido(state, data){
      let result = this.state.existencias.map(cantidadPedida => ({ nombre: cantidadPedida.nombre, cantidad: cantidadPedida.cantidadOrdenada})); //[1,3,5]
      data.pedidos = result;
      this.state.pedidos.push(data);
      console.log(this.state.pedidos)
      this.state.existencias.forEach((element) => {
        element.cantidadOrdenada = 0;
      })
    }
  },
  actions: {
    subirContador({ commit }, payload) {
      commit("subirContadorOrdenados", payload.id);
    },
    bajarContador({ commit }, payload) {
      commit("bajarContadorOrdenados", payload.id);
    },
    subirContadorExistencias({ commit }, payload) {
      commit("subirContadorExistencias", payload.id);
    },
    bajarContadorExistencias({ commit }, payload) {
      commit("bajarContadorExistencias", payload.id);
    },
    hacerPedido({commit}, payload){
      commit("insertarPedido", payload)
    }
  },
  modules: {},
});
