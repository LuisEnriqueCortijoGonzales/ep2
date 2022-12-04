<template>
  <div class="bg-image"></div>
  <div class="bg-text">
    <title>Tu bici ideal</title>
    <span id="userTitle">User Authentication</span>
    <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link>
  </div>
</template>

<style scoped>
.bg-image {
  /* The image used */
  background-image: url("../assets/indexBG.jpeg");

  /* Add the blur effect */
  filter: blur(0px);

  /* Full height */
  height: 40vw;
  width: 100vw;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
