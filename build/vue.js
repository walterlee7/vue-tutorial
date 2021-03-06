var title = new Vue({
    el: '#title',
    data: {
        title: "Vue.js Directives"
    }
})

var app = new Vue({
    el: '#app',
    data: {
        title: "Declarative Rendering: ",
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-1',
    data: {
        title: 'Below html element is missing v-cloak, v-cloak is used to stop {{ message }} from rendering before the message appears.',
        message: 'Hello World!'
    },
    methods: {

        refresh: function () {
            window.location.reload();
        }
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

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app8 = new Vue({
    el: '#app-7',
    data: {
        title: "This uses v-bind to add key numbers to the list items.",
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})