<template>
    <div class="person-card">
        <img :src="personPhoto" :alt="`Photo of ${person.name}`" class="person-photo" />
        <div class="person-details">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-networth"><strong>Net Worth:</strong> {{ person.netWorth }}</p>
            <p class="person-media"><strong>Media Influence:</strong> {{ person.mediaInfluence }}</p>
            <p class="person-controversies"><strong>Controversies:</strong> {{ person.controversies }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
    computed: {
        personPhoto() {
            return this.person.image.url ? this.person.image.url : "/user-xmark.svg";
        },
    },
};
</script>

<style scoped>
.person-card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.person-photo {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ccc;
}

.person-details {
    flex-grow: 1;
}

.person-name {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 8px;
}

.person-networth,
.person-media,
.person-controversies {
    margin: 4px 0;
    font-size: 14px;
    color: #555;
}

.person-networth strong,
.person-media strong,
.person-controversies strong {
    font-weight: bold;
    color: #3333;
}
</style>