<template>
    <div :class="classes">
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: "Error",

        props: {
            classes: String,
            message: String,
        },
    }
</script>

<style scoped>

</style>