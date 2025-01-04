<template>
    <div id="app">
        <NavBar />
        <PeopleList />
    </div>
</template>

<script>
import PeopleList from '@/components/PeopleList.vue';
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        PeopleList, NavBar
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
