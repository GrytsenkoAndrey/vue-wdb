/* Vue.component('task', {
    //template: '<li>1 task</li>'
    // for decide in HTML
    //template: '<li><slot></slot></li>

    //template: '#task'

    template: '<h1>{{ message }}</h1>',
    props: ['message']
}); */

Vue.component('book', {
    template: '#books',
    props: ['title', 'author', 'content']
});

new Vue ({
    el: '#app',
    data: {
        author: 'David Flanagan',
        title: 'JS',
        content: 'Java Script Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dolor.'
    }
});
