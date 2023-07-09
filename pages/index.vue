<template>
    <button @click="moveToAbout">Take me to About Page</button>
</template>

<script setup>
function moveToAbout() {
    navigateTo("about")
}
</script>