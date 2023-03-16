<template>
  <div>
    <div id="menu-modal" v-if="showModal" class="menu-modal">
      <div v-for="item of providers" :key="item.id" class="menu-choice">
        <input
          type="checkbox"
          :id="item.id"
          :value="item.id"
          v-model="checkedSources"
        />
        <label :for="item.id">{{ item.name }}</label>
        &nbsp;
        <img class="source-icon" :src="item.icon ?? null" />
      </div>
      <input type="button" class="submit" value="看新聞" @click="menuClicked" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  props: ["providers"],
  data() {
    return {
      showModal: true,
      checkedSources: [this.providers[0].id],
    };
  },
  methods: {
    menuClicked() {
      this.$emit("clicked", this.checkedSources);
    },
  },
};
</script>

<style scoped>
a img {
  transition: all 0.3s ease-in;
}
.active {
  transform: rotate(-90deg);
  opacity: 0.5;
}
a img:hover {
  transform: rotate(-90deg);
}

.source-icon {
  width: 24px;
  height: auto;
  vertical-align: bottom;
}

.menu-modal {
  position: absolute;
  background: #6282ec;
  color: #fff;
  transform: translate(-150px, 20px);
  width: 170px;
  height: 125px;
  border: #5471ef solid 3px;
  border-radius: 7px;
  padding: 5px;
}

.menu-choice {
  font-size: 1.2em;
  padding: 5px;
}

.menu-choice input {
  margin-right: 10px;
}

.submit {
  margin-left: 50px;
  margin-top: 5px;
  padding: 3px;
  border-radius: 5px;
  border-color: #fff;
  border-width: 2px;
  font-size: 15px;
  background-color: #ece7e3;
}
</style>
