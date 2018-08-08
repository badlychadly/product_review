function Review(attributes) {
    this.id = attributes.id
    this.content = attributes.content
}


Review.reviewFormSubmit = function(event) {
    $.ajax({
        type: this.method,
        url: this.action,
        data: $(this).serialize(),
        dataType: 'script'
        // dataType: (!!$('#review_content').val()) ? 'html' : 'script'
        // error: function (html) {
        //     debugger;
        // }
    }).done(function(html) {
        // debugger;
        // $(html).children('div.field_with_errors'))
        if ($($.parseHTML(html)).children().is('input')) {
            $('#new_review').html(html)
        }  
    })
    event.preventDefault()
}


Review.reviewFormListener = function() {
    $(document).on('submit', '#new_review', Review.reviewFormSubmit)
}


Review.prototype.findCard = function () {
    return $(`[data-id="${this.id}"]`)
}


Review.prototype.destroy = function () {
    this.findCard().remove()
    $('#review_content').attr("disabled", false)
    $('[value="Create Review"]').attr("disabled", false)
}


Review.destroy = function (json) {
    var review = new Review(json)
    review.destroy()
}


Review.deleteReview = function(event) {
    $.ajax({
        type: "DELETE",
        async: true,
        url: this.action,
        data: $(this).serialize(),
        success: (json) => Review.destroy(json) 
    })

    event.preventDefault()
}


Review.deleteReviewListener = function() {
    $(document).on('submit', '#deleteComment', Review.deleteReview)
}



$(function () {
    Review.reviewFormListener()
    Review.deleteReviewListener()
})
