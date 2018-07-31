$(function() {
    $('.load_reviews').on('click', function (event) {
        $.get(this.href + '.json', function (json) {
            debugger;
        })
        event.preventDefault()
    })    
})