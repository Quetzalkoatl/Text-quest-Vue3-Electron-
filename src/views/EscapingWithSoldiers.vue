<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы решили побежать вместе с солдатами. Заметили, как они сворачивают в
      сторону склада с оружием. Видимо, вам выпал шанс вооружиться, если
      решитесь, конечно. Но можете пробежать мимо, чтобы не терять драгоценного
      времени.
    </p>
    <div>
      <router-link to="/runpastbarracks">
        <button class="buttons">Пробежать мимо склада</button>
      </router-link>
      <router-link to="/enterbarracks">
        <button class="buttons">Забежать на склад</button>
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
      stamina: 80,
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
</style>
