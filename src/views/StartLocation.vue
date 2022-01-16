<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы просыпаетесь посреди ночи. За окном слышен грохот и крики. Дом
      буквально трясется. Неужели на ваш город напали? В любом случае, настала
      пора одеться и разобраться в ситуации
    </p>
    <div>
      <router-link to="/gooutofthehouse">
        <button class="buttons">Одеться и выбежать во двор</button>
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
      power: 100,
      stamina: 100,
    };
  },
  methods: {},
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
</style>
