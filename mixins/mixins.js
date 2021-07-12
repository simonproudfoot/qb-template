import Vue from "vue";
export default {
    name: "mixins"
};
Vue.mixin({
    methods: {
        columns(w) {
            // calculate column width
            if (w == 50) {
                return 6;
            }
            else if (w == 25) {
                return 3;
            } else if (w == 33) {
                return 4;
            } else if (w == 75) {
                return 8;
            } else {
                return 12;
            }
        },
        extPath(url) {
            window.open(url, '_blank');
        },
    
    },

});
