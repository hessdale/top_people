<template>
    <div class="home">
        <NavBar />
        <div class="content">
            <h1>Awareness of Wealthy</h1>
            <p>Explore the wealth distribution across continents and countries.</p>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: "HomeView",
    components: {
        NavBar,
    },
};
</script>

<style>
.home {
    text-align: center;
    margin-top: 2rem;
}

.content {
    margin-top: 2rem;
}
</style>