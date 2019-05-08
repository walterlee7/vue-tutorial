var app = new Vue({
    el: '#app',
    data: {
        title: "Declarative Rendering: ",
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Hello World!'
    }
})

var app3 = new Vue({
    el: '#app-2',
    data: {
        title: "Below text uses the v-bind directive, which applies reactive behavior to the rendered DOM",
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})