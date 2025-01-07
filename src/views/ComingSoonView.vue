<template>
    <div class="coming-soon">
        <NavBar />
        <h1>Coming Soon</h1>
        <p>Stay tuned for updates!</p>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "ComingSoon", components: { NavBar }
};
</script>

<style>
.coming-soon {
    text-align: center;
    margin-top: 2rem;
}
</style>