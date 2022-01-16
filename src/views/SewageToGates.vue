<template>
  <attributes :power="power" :stamina="stamina"></attributes>
  <div>
    <p class="title">
      Вы решили не терять время даром и зашагали прямо к выходу. Однако, пройдя
      буквально пару сотен шагов, услышали голоса, а затем из-за поворота
      выбежало несколько вражеских солдат. Видимо, они тоже решили проверить
      катакомбы. Заметив вас, они, недолго думая, обнажили оружие и кинулись в
      бой. Вы попытались увернуться, вышло не совсем удачно и теперь у вас
      несколько свежих ран на теле. Однако вы оказались у них за спинами.
      Недолго думая, решили бежать со всех ног. Вам удалось оторваться, но ценой
      потери большого количества выносливости и силы. Прислонившись к стенке и
      отдышавшись, вы осмотрели свои раны. Выглядит все довольно мрачно. Но и
      выход из города уже близко. Что-же вы сделаете: потратите время, чтобы
      перевязать раны, или попытаетесь дойти до выхода?
    </p>
    <div>
      <router-link to="/woundhealing">
        <button class="buttons">Перевязать раны</button>
      </router-link>
      <router-link to="/sewageescaping">
        <button class="buttons">Пойти к выходу</button>
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
      stamina: 40,
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
