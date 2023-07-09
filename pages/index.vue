<template>
    <NuxtLink to="/">
        Home
    </NuxtLink>
    <NuxtLink to="/about">
        About
    </NuxtLink>


    <button @click="moveToAbout">Take me to About Page</button>
</template>

<script setup>
function moveToAbout() {
    navigateTo("about")
}
</script>