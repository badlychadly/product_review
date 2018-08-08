function Review(attributes) {
    this.id = attributes.id
    this.content = attributes.content
}


Review.reviewFormSubmit = function(event) {
    // debugger;
    $.ajax({
        type: this.method,
        async: true,
        url: this.action,
        data: $(this).serialize(),
        dataType: 'script'
    }).done(function() {
        $('#review_content').val("").attr("disabled", true)
    }).fail(function (data) {
        // debugger;
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
        success: function(json) {
            Review.destroy(json)
            
        }
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
