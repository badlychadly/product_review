function Review(attributes) {
    this.id = attributes.id
    this.content = attributes.content
}

function redBorder() {
    $('#review_content').css({"border": "1px solid red"})
}

function normalizeBorder() {
    $('#review_content').css({"border-color": "rgb(169, 169, 169)"})
    $('#new_review').children('ul.list-group').remove()
}


Review.invalid = function (resp) {
    var $form = $($.parseHTML(resp.responseText)).filter('#new_review')
        $('#new_review').replaceWith($form)
        redBorder()
}


Review.reviewFormSubmit = function(event) {
    $.ajax({
        type: this.method,
        url: this.action,
        data: $(this).serialize(),
        dataType: 'script'
    }).fail(Review.invalid)
    event.preventDefault()
}


Review.reviewFormListener = function() {
    $(document).on('submit', 'form#new_review.new_review', Review.reviewFormSubmit)
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
    normalizeBorder()
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
