/*global Vue: false */

Vue.component('computer-list', {
    props: ['parts'],
    template: '<li>{{ parts.text }}</li>'
})

/* This creates an instance of the Vue to interact with the div created below in the body. It's similar to how AngularJS would create a new module to work with the created ng- elements */
new Vue({
    el: '#app',
    data: {
        message: 'This text is created using Vue and is reactive and able to change without navigating to another page on the website. Also, if you hover over this text, it will display the date and time that this specific page was loaded. Refreshing the page will update the time.',
        
        hoverText: 'This page was loaded on ' + new Date().toLocaleString()
    }
});

new Vue({
    el: '#app2',
    data: {
        message: 'By typing anything in the box below, it will automatically update the text seen here.'
    }
});

new Vue({
    el: "#app3",
    data: {
        computerParts: [
            { id: 0, text: 'GPU' },
            { id: 1, text: 'CPU' },
            { id: 2, text: 'Motherboard'},
            { id: 3, text: 'RAM' },
            { id: 4, text: 'SSD' }
        ]
    }
});