$(function() {
    countReviewLinkClicks = 0
    $('.load_reviews').click(function (event) {
        ++countReviewLinkClicks
        if ((countReviewLinkClicks % 2) === 0) {
            $('#reviewsList').html("")
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