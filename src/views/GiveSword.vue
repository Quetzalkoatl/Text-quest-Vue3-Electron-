<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы отдали меч. Сержант принял оружие из ваших рук, после чего отступил в
      сторону и разрешил вам выйти наружу. Пока вы возились на складе, главные
      ворота уже пали. Времени остается все меньше и меньше. Вы видите два
      выхода из данной ситуации - либо проскользнуть через главные ворота, пока
      солдаты заняты тем, что убивают друг друга, либо попытаться выйти за
      пределы города, спустившись в катакомбы
    </p>
    <div>
      <router-link to="/gatesdeath">
        <button class="buttons">Прокрасться к главным воротам</button>
      </router-link>
      <router-link to="/gotosewage">
        <button class="buttons">Спуститься в катакомбы</button>
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
      power: 70,
      stamina: 70,
    };
  },
};
</script>

<style scoped>
.about {
  margin-top: 50px;
}
.buttons {
  width: 300px;
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
