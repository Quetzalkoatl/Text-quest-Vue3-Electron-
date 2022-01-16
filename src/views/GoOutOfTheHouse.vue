<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Повсюду паника. Вы замечаете, что в сторону главных ворот бегут солдаты.
      Окликнув одного из них, вы узнаете, что произошло - вражеские войска
      осаждают город. У вас есть выбор - побежать вместе с солдатами, надеясь на
      их защиту, либо побежать в обратную от главных ворот сторону, куда, как вы
      заметили, бегут некоторые из местных жителей. Может путь к спасению лежит
      именно там?
    </p>
    <div>
      <router-link to="/escapingwithsitizens">
        <button class="buttons">Побежать с жителями</button>
      </router-link>
      <router-link to="/escapingwithsoldiers">
        <button class="buttons">Побежать с солдатами</button>
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
      stamina: 90,
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
