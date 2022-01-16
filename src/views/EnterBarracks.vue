<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Забежав на склад, вы увидели, что внутри происходит потасовка среди
      солдат. Вы тоже были вынуждены вмешаться. Разнимая дерущихся, вы порядочно
      растеряли силу. Однако теперь у вас есть оружие - меч, который вы между
      делом успели схватить. Вы уже направились было к выходу с этим мечом, но
      вас остановил какой-то сержант. Он заметил, что вы обычный гражданский.
      Соответственно, оружие вам не положено. Сержант попросил вас вернуть меч
      обратно. Ваши действия?
    </p>
    <div>
      <router-link to="/givesword">
        <button class="buttons">Отдать меч</button>
      </router-link>
      <router-link to="/leavesword">
        <button class="buttons">Убежать с мечом</button>
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
