<template>
  <div class="attributes">
    <p>Характеристики персонажа:</p>
    <p>
      Сила: <b>{{ power }}</b>
    </p>
    <p>
      Выносливость: <b>{{ stamina }}</b>
    </p>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    power: {
      type: Number,
      default: 100,
    },
    stamina: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.attributes {
  position: relative;
  left: 42%;

  width: 300px;
  height: 150px;
  display: block;
  margin-top: 20px;
  margin-bottom: 50px;

  font-size: 20px;

  border: 2px solid rgb(6, 45, 104);
  background: rgb(174, 206, 243);
}
</style>
