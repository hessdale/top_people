<template>
    <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item" v-for="continent in continents" :key="continent.name">
                <span>{{ continent.name }}</span>
                <ul class="dropdown">
                    <li v-for="country in continent.countries" :key="country.name">
                        <router-link :to="country.route">{{ country.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            continents: [
                {
                    name: "North America",
                    countries: [
                        { name: "Canada", route: "/canada" },
                        { name: "USA", route: "/usa" },
                        { name: "Mexico", route: "/mexico" },
                    ],
                },
                {
                    name: "South America",
                    countries: [
                        { name: "Brazil", route: "/brazil" },
                        { name: "Argentina", route: "/argentina" },
                        { name: "Chile", route: "/chile" },
                    ],
                },
                {
                    name: "Europe",
                    countries: [
                        { name: "UK", route: "/uk" },
                        { name: "France", route: "/france" },
                        { name: "Germany", route: "/germany" },
                    ],
                },
                {
                    name: "Asia",
                    countries: [
                        { name: "China", route: "/china" },
                        { name: "India", route: "/india" },
                        { name: "Japan", route: "/japan" },
                    ],
                },
            ],
        };
    },
};
</script>

<style>
.navbar {
    background-color: #333;
    color: white;
    padding: 1rem;
}

.nav-list {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav-item {
    position: relative;
}

.nav-item .dropdown {
    display: none;
    position: absolute;
    background-color: white;
    color: black;
    list-style: none;
    padding: 0.5rem;
    border: 1px solid #ccc;
}

.nav-item:hover .dropdown {
    display: block;
}
</style>