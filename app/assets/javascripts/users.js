$(document).on('turbolinks:load', function () {
    
   
    $(document).on('click', '.load_reviews', function(event) {
        if ($('#reviewsList').children().is('li')) {
            $('#reviewsList').remove()
        } else {
            $.get(this.href + '.json', function (json) {
                reviewsHtml = HandlebarsTemplates['reviews_list']({
                    reviews: json.reviews
                });
                $('#insert_reviews').append(reviewsHtml)
            })
        }
        event.preventDefault()
    })    
})