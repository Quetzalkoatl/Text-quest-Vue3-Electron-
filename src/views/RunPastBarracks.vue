<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Чтобы не терять времени, вы решили не заглядывать на склад. Пробегая мимо,
      услышали звуки боя внутри склада. Видимо, там произошел какой-то конфликт
      между солдатами. Вы-же смогли его избежать. Однако вам навстречу выбежал
      целый отряд вражеских солдат, а вы были в одиночестве. В итоге вас убили
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
