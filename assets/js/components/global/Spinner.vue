<template>
    <i class="fas fa-cog" />
</template>

<script>
    export default {
        name: "Spinner",
    }
</script>

<style scoped lang="scss">
    i {
        animation: spin 2s linear infinite;

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }
</style>