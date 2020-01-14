<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ temp }}</p>
    </div>
</template>

<script>
    export default {
        name: "Info",

        props: {
            name: String,
            temp: String,
        }
    }
</script>

<style scoped>

</style>