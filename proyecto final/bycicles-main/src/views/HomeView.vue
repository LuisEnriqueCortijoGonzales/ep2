<template>
  <UserAuth />
  <!-- show info on click -->
  <bicicleInfo
    v-if="showInfo.bool && showInfo.bicicleta"
    :bicicleta="showInfo.bicicleta"
  />

  <ul>
    <li v-for="bicicleta in bicicletas" :key="bicicleta.id">
      <ul class="bicicleData">
        <button
          @click="inspeccionarBicicleta(bicicleta.id)"
          class="brandButton"
        >
          {{ bicicleta.marca }}
        </button>
        <span>{{ bicicleta.modelo }}</span>
        <span> {{ bicicleta.aro }}</span>
        <span>{{ bicicleta.color }}</span>
        <span>{{ bicicleta.tipo }}</span>
        <span>{{ bicicleta.nivel }}</span>
        <span>{{ bicicleta.precio }}</span>
        <img :src="bicicleta.imagen" alt="bicicleta" />
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
export type Bicicleta = {
  id: number;
  marca: string;
  modelo: string;
  aro: number;
  color: string;
  tipo: string;
  nivel: string;
  precio: number;
  descripcion?: string;
  imagen?: string;
};
</script>

<script setup lang="ts">
import UserAuth from "../components/UserAuth.vue";
import bicicleInfo from "../components/bicicleInfo.vue";

import { ref } from "vue";
import type { Ref } from "vue";

//const bicicletas: Ref<Bicicleta[]> = ref([]);

// sample data
const bicicletas: Bicicleta[] = [
  {
    id: 1,
    marca: "Orbea",
    modelo: "Orca",
    aro: 29,
    color: "rojo",
    tipo: "carretera",
    nivel: "pro",
    precio: 1000,
    imagen:
      "https://www.orbea.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orca_m30_2021_1.jpg",
    descripcion: "Bicicleta de carretera",
  },
  {
    id: 2,
    marca: "mark",
    modelo: "piedra",
    aro: 56,
    color: "azul",
    tipo: "montaña",
    nivel: "basicos",
    precio: 20,
    imagen:
      "https://www.orbea.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orca_m30_2021_1.jpg",
    descripcion: "Bicicleta de montaña",
  },
];

const showInfo: Ref<{ bool: boolean; bicicleta: Bicicleta | undefined }> = ref({
  bool: false,
  bicicleta: undefined,
});

function inspeccionarBicicleta(id: number) {
  showInfo.value.bool = true;
  showInfo.value.bicicleta = bicicletas.find((bici) => bici.id === id);
}

/*
function fetchBicicletas() {
  fetch("http://localhost:3000/bicicletas")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((json) => {
      bicicletas.value = json;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
fetchBicicletas();
*/
</script>

<style>
.brandButton {
  background-color: #f1f1f1;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.bicicleData {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}

.bicicleData img {
  width: 150px;
  height: 150px;
}

/* image info box */
.bicicleData span {
  width: 150px;
  height: 150px;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
  margin: 10px;
  /* smooth gray gradient */
  background: linear-gradient(
    0deg,
    rgba(211, 211, 211, 0.8) 0%,
    rgba(211, 211, 211, 0.6) 50%,
    rgba(211, 211, 211, 0.1) 100%
  );
}

bicicleInfo {
  position: absolute;
  /* remove li styles */
  list-style: none;
}
</style>
