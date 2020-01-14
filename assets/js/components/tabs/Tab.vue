<template>
    <li :class="classes">
        <slot />
    </li>
</template>

<script>
    export default {
        name: "Tab",

        props: {
            classes: String,
        },
    }
</script>

<style scoped>

</style>