import start from './pages/start.vue';
import map from './pages/map.vue';

export default {
    name: 'home',
    components: { start, 'large-map': map },
    data() {
        return {
            currentView: 'start',
            fullScreenMode: false,
        }
    },
    computed: {
        fullScreenEnabled() {
            return document.webkitFullscreenEnabled /*|| document.mozFullScreenEnabled || document.msFullscreenEnabled*/;
        }
    },
    methods: {
        changeView(page) {
            this.currentView = page;
        },
        toggleFullScreen() {
            if (!this.fullScreenMode) {
                if (this.$el.webkitRequestFullscreen) {
                    this.$el.webkitRequestFullscreen();
                }

                if (this.$el.mozRequestFullScreen) {
                    this.$el.mozRequestFullScreen();
                }

                if (this.$el.msRequestFullscreen) {
                    this.$el.msRequestFullscreen();
                }
            } else {

                if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }

                /*if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }

                if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }*/
            }
        },

    },
    mounted() {
        document.addEventListener("mozfullscreenchange", () => {
            this.fullScreenMode = !this.fullScreenMode;
        }, false);

        document.addEventListener("webkitfullscreenchange", () => {
            this.fullScreenMode = !this.fullScreenMode;
        }, false);

        document.addEventListener("msfullscreenchange", () => {
            this.fullScreenMode = !this.fullScreenMode;
        }, false);
    }
}