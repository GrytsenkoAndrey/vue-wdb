var app = new Vue ({
    el: '#task',
    data: {
        title: 'Task list',
        items: [
            { text: 'First'},
            { text: 'Second'},
            { text: 'Third'}
        ]
    },
    methods: {
        addItem: function () {
            var input = document.querySelector('#itemForm');

            if (input.value !== '') {
                this.items.push({
                    text: input.value
                });
                input.value = '';
            }
        },
        deleteItem: function (index) {
            this.items.splice(index, 1);
        }
    }
});