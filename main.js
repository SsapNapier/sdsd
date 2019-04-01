var Vue = require('vue/dist/vue.js');
var hello = require('vue-loader!./components/hello.vue');

new Vue({
    el: 'body',
    components: {
        hello: hello
    }
})
