<template>
  <div id="app">
    <PeopleList />
  </div>
</template>

<script>
import PeopleList from "./components/PeopleList.vue";

export default {
  name: "App",
  components: {
    PeopleList,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
}
</style>
