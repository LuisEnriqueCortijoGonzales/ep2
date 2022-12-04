<template>
  <div class="bg"></div>
  <button class="backButton" @click="back">Back</button>
  <div class="title">{{ props.title }}</div>
  <form class="form" @submit.prevent="submit">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="user.username" />
    </div>

    <div class="form-group" v-if="props.title === 'register'">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="user.email" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="user.password" />
    </div>

    <div v-if="props.title === 'register'" class="form-group">
      <label for="passwordConfirm">Confirm Password</label>
      <input
        type="password"
        id="passwordConfirm"
        v-model="user.passwordConfirm"
      />
    </div>

    <button class="submitButton" type="submit">{{ title }}</button>
  </form>

  <div v-if="props.title === 'register'" class="login">
    <span>Already have an account? </span>
    <router-link to="/login">Login</router-link>
  </div>

  <div v-if="props.title === 'login'" class="register">
    <span>Don't have an account? </span>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { useUserStore } from "../stores/userStore";

import { useRouter } from "vue-router";

const router = useRouter();

const userStore = useUserStore();

const props = defineProps<{ title: "login" | "register" }>();

const user: Ref<{
  username: string;
  password: string;
  email?: string;
  passwordConfirm?: string;
}> = ref({
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

function back() {
  window.location.href = "/user";
}

function submit() {
  if (props.title === "login") {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.value),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          userStore.login(data.name, data.email);
          router.push("/bicicletas");
        }
      });
  } else if (props.title === "register") {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.value),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          userStore.login(data.name, data.email);
          router.push("/bicicletas");
        }
      });
  }
}
</script>
