$(function() {
    $('.load_reviews').on('click', function (event) {
        $.get(this.href + '.json', function (json) {
            // debugger;
            // json.reviews.forEach(function (review) {
            //     $('#insert_reviews').append(`<p>${review.content}</p>`)
            // })
            reviewsHtml = HandlebarsTemplates['reviews_list']({
                reviews: json.reviews
            });
            $('#insert_reviews').append(reviewsHtml)
        })
        event.preventDefault()
    })    
})