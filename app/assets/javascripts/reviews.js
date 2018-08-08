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


Review.deleteReview = function(event) {
    var id = this.dataset.num
    $.ajax({
        type: "DELETE",
        async: true,
        url: this.action,
        data: $(this).serialize(),
        success: function(data) {
            $(`[data-id="${id}"]`).remove()
            $('#review_content').attr("disabled", false)
            $('[value="Create Review"]').attr("disabled", false)
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
// $(document).on('turbolinks:load', function() {
//     Review.reviewFormListener()
//     Review.deleteReviewListener()
// })