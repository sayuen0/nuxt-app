<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <nuxt-link to="/iphone/iphone-12" class="shadow-lg border rounded-lg text-center">
            <h1>iPhone 12</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-12.jpeg" alt="iphone-12">
            </div>
        </nuxt-link>
        <nuxt-link to="/iphone/iphone-12-pro" class="shadow-lg border rounded-lg text-center">
            <h1>iPhone 12 Pro</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone-12-2.jpeg" alt="iphone-12">
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
useHead({
    title: "Nuxt3 - iPhones",
})
</script>