<template>
    <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item" v-for="continent in continents" :key="continent.name">
                <span class="nav-item-title">{{ continent.name }}</span>
                <ul class="dropdown">
                    <li v-for="country in continent.countries" :key="country.name">
                        <router-link :to="country.route" class="dropdown-link">{{ country.name }}</router-link>
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

<style scoped>
.navbar {
    background-color: #333;
    color: white;
    padding: 1rem;
    font-family: 'Arial', sans-serif;
    border-bottom: 2px solid #444;
}

.nav-list {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-item {
    position: relative;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.nav-item-title {
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nav-item:hover {
    color: #1e90ff;
}

.nav-item .dropdown {
    display: none;
    position: absolute;
    background-color: #fff;
    color: #333;
    list-style: none;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 150px;
    z-index: 10;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.nav-item:hover .dropdown {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.dropdown-link {
    text-decoration: none;
    color: #333;
    padding: 0.3rem 0;
    display: block;
    font-weight: normal;
    transition: color 0.3s ease;
}

.dropdown-link:hover {
    color: #1e90ff;
}
</style>