<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="input-group my-3">
                    <input type="text" class="form-control mx-3" placeholder="API key" v-model="apiKey">
                </div>
            </div>
            <div class="col-sm">
                <div class="input-group my-3">
                    <input type="text" class="form-control" placeholder="City" v-model="city">
                    <div class="input-group-append">
                        <Button
                            type="button"
                            classes="btn btn-success"
                            @click="getWeather(apiKey, city)"
                        >
                            <i class="fas fa-check" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Button from "../components/Button";

    export default {
        components: {
            Button,
        },

        name: "Home",

        data() {
            return {
                city: '',
                apiKey: '',
            }
        },

        methods: {
            ...mapActions([
                "getData",
            ]),

            getWeather(apiKey, city) {
                const payload = {
                    apiKey,
                    city,
                };

                this.getData(payload);
            },
        },
    }
</script>

<style scoped>

</style>