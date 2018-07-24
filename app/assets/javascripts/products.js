$(function() {
    $('form').submit(function (event) {
        event.preventDefault();
        $.get('/products', function (data) {
            debugger;
        })
    })
})
