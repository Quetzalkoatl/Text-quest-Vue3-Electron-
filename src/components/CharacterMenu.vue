<template>
  <div class="hello">
    <div class="characterMenu">
      <p class="title">Введите имя персонажа</p>
      <input type="text" class="characterInput" v-model="characterName" />
      <button
        v-if="characterName.length"
        class="characterCommitButton"
        @click="passTheName"
      >
        Подтвердить имя
      </button>

      <p class="title" v-if="greetingText">
        Приветствую, <span class="span">{{ characterName }}</span> ! Цель этой
        небольшой фентезийной игры заключается в том, чтобы выбраться из города,
        который осаждает вражеская армия. У вашего персонажа есть два показателя
        : <b>СИЛА</b> и <b>ВЫНОСЛИВОСТЬ</b>. Сила тратится во время схваток с
        врагами, выносливость тратится сама по себе, по мере совершения
        различных действий. Игра заканчивается в одном из двух случаев: если вы
        выбрались за пределы города, то вы победили. Если-же ваша сила или
        выносливость упала до нуля, то ваш персонаж считается убитым и игра на
        этом также заканчивается. Удачи вам,
        <span class="span">{{ characterName }}</span> и приятной игры!
        <router-link
          class="startGameButton"
          v-if="characterName"
          to="/startlocation"
        >
          <button
            class="startGameButton"
            v-if="greetingText"
            @click="gameStart"
          >
            Начать игру
          </button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterMenu",
  data() {
    return {
      characterName: "",
      greetingText: false,
    };
  },
  props: {},
  methods: {
    passTheName() {
      if (this.characterName.length) this.greetingText = true;
    },
    gameStart() {
      this.$emit("characterName");
    },
  },
};
</script>

<style scoped>
.characterMenu {
  display: grid;
  align-items: center;
  justify-content: center;
}

.characterInput {
  text-align: center;
  width: 400px;
  height: 50px;
  font-size: 30px;
  justify-self: center;
}

.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: 400;
  justify-self: center;
  margin-top: 35px;
}

.characterCommitButton {
  font-size: 18px;
  justify-self: center;
  margin-top: 55px;
  width: 200px;
  height: 50px;
}

.startGameButton {
  display: block;
  position: absolute;
  left: 40%;
  margin-top: 25px;
  width: 200px;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
}

.span {
  font-size: 40px;
  font-weight: 500;
  color: rgb(34, 51, 207);
}
</style>
