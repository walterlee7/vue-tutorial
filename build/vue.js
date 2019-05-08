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
        title: "Below text uses the v-bind directive, which applies reactive behavior to the rendered DOM.",
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app4 = new Vue({
    el: '#app-3',
    data: {
        title: "Below text uses v-if to show text based on a boolean.",
        seen: true
    }
})

var app5 = new Vue({
    el: '#app-4',
    data: {
        title: "Below text uses v-for to list string objects from an array.",
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {

        reverseText: function () {
            this.todos[0].text = this.todos[0].text.split('').reverse().join('')
        },

        addItem: function () {
            app5.todos.push({ text: 'New item' })
        },

        refresh: function () {
            window.location.reload();
        }
    }
})

var app6 = new Vue({
    el: '#app-5',
    data: {
        title: "Below examples uses v-on:click for event listening.",
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app7 = new Vue({
    el: '#app-6',
    data: {
        title: "Below example uses v-model to handle input.",
        message: 'Hello Vue!'
    }
})