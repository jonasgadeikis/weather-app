<template>
    <button
        :type="type"
        :class="classes"
        @click.prevent="click"
    >
        <slot />
        {{ name }}
    </button>
</template>

<script>
    export default {
        name: "Button",

        props: {
            name: String,
            classes: String,
            type: String,
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