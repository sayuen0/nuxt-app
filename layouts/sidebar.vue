<template>
    <main class="user-layout bg-gray-100">

        <article class="sidebar">
            <p>Dashboard</p>
            <p>Setting</p>
        </article>
        <section>
            <slot></slot>
        </section>

    </main>
</template>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
}


.user-layout {
    display: flex;
}
</style>