<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Оглядевшись и расположившись поудобнее прямо рядом с выходом из
      канализации, вы сняли верхнюю одежду, отодрали несколько полосок ткани и
      стали перевязывать свои раны. Отдохнув немного, вы встали и неспешно пошли
      в сторону леса. К счастью, больше никто вас так и не заметил. Поняв, что
      ушли уже достаточно далеко, вы прислонились к дереву и наконец-то решили
      отдохнуть. Раненый, но все-таки живой, вы смогли-таки выбраться из
      западни...
    </p>
    <p class="the-end">MISSION COMPLETE</p>
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
      power: 40,
      stamina: 10,
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
  color: rgb(8, 204, 41);
}
</style>
