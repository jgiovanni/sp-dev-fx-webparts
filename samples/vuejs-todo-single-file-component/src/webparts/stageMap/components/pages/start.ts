export default {
    name: 'start',
    data() {
        return {};
    },
    methods: {
        toPage(page) {
            this.$emit('to-page', page);
        }
    },
    mounted() {}
};