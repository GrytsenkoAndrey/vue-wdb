var app = new Vue ({
    el: '#app',
    data: {
        title: 'Style',
        isRounded: false,
        disabled: false,
        sizeToggle: false,
        fontColor: '#ccc',
        backColor: 'green'
    },
    computed: {
        styles: function () {
            return {
                color: this.fontColor,
                background: this.backColor
            };
        }
    },
    methods: {

    }
});