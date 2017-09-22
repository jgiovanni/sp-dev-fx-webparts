<template>
    <div class="base">
        <div class="row">
            <div class="col-xs-12">
                <!--<transition name="fade">-->
                    <keep-alive>
                        <component :is="currentView" @to-page="changeView">
                            <!-- inactive components will be cached! -->
                        </component>
                    </keep-alive>
                <!--</transition>-->
            </div>
        </div>
    </div>
</template>
<script>
    import start from './pages/start.vue';
    import map from './pages/map.vue';
    export default {
        name: 'home',
        components: { start, 'large-map': map },
        data() {
            return {
                currentView: 'start',
            }
        },
        methods: {
            changeView(page) {
                this.currentView = page;
            }
        },
        mounted() {

        }
    }
</script>
<style src="./home.scss" lang="scss"></style>