<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы решили побежать вместе с жителями. Однако не учли того, что они просто
      поддались панике, поэтому вы бесцельно пробегали пару часов, в итоге
      наткнулись на вражеский отряд и вас убили
    </p>
    <p class="the-end">THE END</p>
    <div>
      <router-link to="/">
        <button class="buttons">Начать заново</button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Attributes from "@/components/Attributes.vue";

export default {
  components: {
    Attributes,
  },
  data() {
    return {
      power: 0,
      stamina: 0,
    };
  },
};
</script>

<style scoped>
.about {
  margin-top: 50px;
}
.buttons {
  width: 250px;
  height: 50px;
  margin: 20px;
  font-size: 18px;
  margin-top: 55px;
}

.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: 400;
  justify-self: center;
  margin-top: 35px;
}

.the-end {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 45px;
  font-weight: 400;
  justify-self: center;
  margin-top: 35px;
  color: red;
}
</style>
