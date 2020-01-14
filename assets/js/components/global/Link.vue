<template>
    <a
        :class="classes"
        @click.prevent="click"
    >
        {{ name }}
    </a>
</template>

<script>
    export default {
        name: "Link",

        props: {
            name: String,
            classes: Array,
        },

        methods: {
            click() {
                this.$emit('click');
            },
        },
    }
</script>

<style scoped>

</style>