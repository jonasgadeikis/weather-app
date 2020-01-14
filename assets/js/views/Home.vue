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
                <Tabs classes="nav nav-tabs">
                    <Tab
                        classes="nav-item"
                        v-for="(city, i) in weatherData"
                        :key="i"
                    >
                        <Link
                            :name="city.name"
                            :classes="[
                                'nav-link',
                                {'active': activeCity.name === city.name},
                            ]"
                            @click="setActiveCity(city)"
                        />
                    </Tab>
                </Tabs>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm">
                <Info
                    :name="activeCity.name"
                    :temp="activeCity.temp"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Tab from "../components/tabs/Tab";
    import Tabs from "../components/tabs/Tabs";
    import Info from "../components/tabs/Info";

    export default {
        name: "Home",

        components: {
            Tab,
            Tabs,
            Info,
        },

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