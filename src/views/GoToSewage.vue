<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы решили спуститься в катакомбы. Подумав, вы пришли к выводу, что у вас
      снова есть два возможных выхода : либо пройти по катакомбам в сторону
      выхода из города прямо сейчас, что не столь безопасно, либо попытаться
      углубиться в эти перепретения коридоров и отсидеться там, подождать, пока
      все закончится, и уже затем спокойно выбраться
    </p>
    <div>
      <router-link to="/sewagetogates">
        <button class="buttons">Направиться к выходу</button>
      </router-link>
      <router-link to="/stray">
        <button class="buttons">Углубиться в катакомбы</button>
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
      stamina: 60,
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
