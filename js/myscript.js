
var app = Vue.createApp({
    data() {
        return {
            text: '',
            textDisplay: ''
        }
    },
    computed: {
        buttonColor() {
            return this.text !== '' ? 'blue' : 'gray';
        }
    },
    watch: {
        text(newValue) {
            this.textDisplay = newValue;
        }
    }
}).mount('#app');
