<template>
  <div class="blurredBox">
    <img :src="bicicleta.imagen" alt="bicicleta image" class="bikeImage" />

    <span>{{ bicicleta.marca }}</span>
    <span>{{ bicicleta.modelo }}</span>
    <span> {{ bicicleta.aro }}</span>
    <span>{{ bicicleta.color }}</span>
    <span>{{ bicicleta.tipo }}</span>
    <span>{{ bicicleta.nivel }}</span>
    <span>{{ bicicleta.precio }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Bicicleta } from "../views/HomeView.vue";
import { computed } from "vue";

const props = defineProps<{
  bicicleta: Bicicleta;
}>();

const bicicleta = computed(() => props.bicicleta);
</script>

<style>
.blurredBox {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
