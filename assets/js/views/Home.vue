<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="input-group my-3">
                    <Input
                        type="text"
                        classes="form-control"
                        placeholder="API key"
                        :model.sync="apiKey"
                    />
                </div>
            </div>
            <div class="col-sm">
                <div class="input-group my-3">
                    <Input
                        type="text"
                        classes="form-control"
                        placeholder="City"
                        :model.sync="city"
                    />
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
        <div class="row" v-if="weatherData.length">
            <div class="col-sm">
                <ul class="nav nav-tabs">
                    <li
                        class="nav-item"
                        v-for="(city, i) in weatherData"
                        :key="i"
                    >
                        <a
                            class="nav-link"
                            :class="{'active': activeCity.name === city.name}"
                            @click.prevent="setActiveCity(city)"
                        >
                            {{ city.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm">
                <h2>{{ activeCity.name }}</h2>
                <p>{{ activeCity.temp }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "Home",

        data() {
            return {
                city: '',
                apiKey: '',
                activeCity: {},
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

            setActiveCity(city) {
                this.activeCity = {
                    ...city,
                };
            },
        },

        computed: {
            ...mapGetters([
                "weatherData",
            ]),
        },
    }
</script>

<style scoped>

</style>