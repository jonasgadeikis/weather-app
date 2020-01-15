<template>
    <button
        :type="type"
        :class="classes"
        :disabled="disabled"
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
            disabled: Boolean,
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