<template>
    <input
        :type="type"
        :class="classes"
        :placeholder="placeholder"
        v-model="inputModel"
        @input="$emit('update:model', inputModel)"
    >
</template>

<script>
    export default {
        name: "Input",

        props: {
            type: String,
            classes: String,
            placeholder: String,
            model: String,
        },

        data() {
            return {
                inputModel: '',
            }
        }
    }
</script>

<style scoped>

</style>