<template>
  <userForm title="register" :submit="login" />
</template>

<script setup lang="ts">
import userForm from "../components/userForm.vue";

function login(user: any) {
  console.log(user);
}
</script>
