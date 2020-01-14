<template>
    <ul :class="classes">
        <slot />
    </ul>
</template>

<script>
    export default {
        name: "Tabs",

        props: {
            classes: String,
        },
    }
</script>

<style scoped>

</style>