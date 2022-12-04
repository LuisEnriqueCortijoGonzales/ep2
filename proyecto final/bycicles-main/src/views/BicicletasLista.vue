<template>
  <header class="upperBar">
    <span class="welcome">Bienvenido {{ userStore.name }}</span>
    <button class="logout" @click="userStore.logout">Cerrar sesión</button>
  </header>

  <aside class="sideBar">
    <!-- new bycicle -->
    <form class="newBicicleta" @submit.prevent="addBicicleta">
      <input type="text" placeholder="Marca" v-model="newBicicleta.marca" />
      <input type="text" placeholder="Modelo" v-model="newBicicleta.modelo" />
      <input type="text" placeholder="Aro" v-model="newBicicleta.aro" />
      <input type="text" placeholder="Color" v-model="newBicicleta.color" />
      <input type="text" placeholder="Tipo" v-model="newBicicleta.tipo" />
      <input type="text" placeholder="Nivel" v-model="newBicicleta.nivel" />
      <input type="text" placeholder="Precio" v-model="newBicicleta.precio" />
      <input type="submit" value="Agregar" />
    </form>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { Bicicleta } from "../views/HomeView.vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();

const newBicicleta: Ref<Bicicleta> = ref({
  id: 0,
  marca: "",
  modelo: "",
  aro: 0,
  color: "",
  tipo: "",
  nivel: "",
  precio: 0,
});
newBicicleta;

function addBicicleta() {
  fetch("http://localhost:3000/bicicletas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBicicleta.value),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
</script>
