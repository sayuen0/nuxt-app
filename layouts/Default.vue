<template>
    <nav class="bg-purple-700 text-white shadow-lg p-3 text-lg flex justify-between">

      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/iphone">iPhones</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </nav>
    <slot></slot>
</template>

<style>
@import "assets/css/tailwind.css";
</style>