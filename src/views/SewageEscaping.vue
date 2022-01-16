<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы нашли выход из катакомб. Чувствуете себя очень плохо, ранения дают-таки
      о себе знать. Все еще слышны звуки боя. Но вы уже за пределами города.
      Вдалеке виднеется спасительный лес. Что вы намерены сделать: из последних
      сил добежать до леса или все-таки остановиться, потратить время и
      перевязать раны, сохранив свое здоровье, но при этом находясь в постоянной
      опасности быть пойманным
    </p>
    <div>
      <router-link to="/stayhere">
        <button class="buttons">Остановиться и перевязать раны</button>
      </router-link>
      <router-link to="/runtoforest">
        <button class="buttons">Бежать в лес</button>
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
      power: 40,
      stamina: 20,
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
