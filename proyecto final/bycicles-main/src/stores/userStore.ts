import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const name: Ref<string | null> = ref(sessionStorage.getItem("name"));
  const mail: Ref<string | null> = ref(sessionStorage.getItem("mail"));
  const logeado: Ref<boolean> = ref(Boolean(name));

  function login(_name: string, _mail: string) {
    if (logeado.value) {
      throw new Error("Ya estas logeado");
    }
    sessionStorage.setItem("name", _name);
    sessionStorage.setItem("mail", _mail);
    name.value = _name;
    logeado.value = true;
  }
  function logout() {
    if (!logeado.value) {
      throw new Error("No estas logeado");
    }
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("mail");
    logeado.value = false;
    name.value = null;
  }

  return {
    name,
    mail,
    logeado,
    login,
    logout,
  };
});
