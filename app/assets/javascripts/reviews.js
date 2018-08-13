function Review(attributes) {
    this.id = attributes.id
    this.content = attributes.content
    this.user = attributes.user 
    this.product = attributes.product
}

function redBorder() {
    $('#review_content').css({"border": "1px solid red"})
}

function normalizeBorder() {
    $('#review_content').css({"border-color": "rgb(169, 169, 169)"})
    $('#new_review').children('ul.list-group').remove()
}




Review.prototype.renderCard = function() {
    return Review.template(this)
}


Review.invalid = function (resp) {
    var $form = $($.parseHTML(resp.responseText)).filter('form')
    $form.is('#new_review') ? $('#new_review').replaceWith($form) : $('.edit_review').replaceWith($form)
        redBorder()
        $('#review_content').val("")
}


Review.valid = function (json) {
        var review = new Review(json)
        var card = review.renderCard()
        $('.edit_review').remove()
        $('#new_review').show()
        $('#reviews').append(card)
        $('.productPageLink').remove()
        $('#review_content').val("").attr("disabled", true)
        normalizeBorder()
}


Review.reviewFormSubmit = function(event) {
    $.ajax({
        type: this.method,
        url: this.action,
        data: $(this).serialize(),
        dataType: 'json'
    }).done(Review.valid)
    .fail(Review.invalid)
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

Review.updateReviewListener = function () {
    $(document).on('submit', '.edit_review', Review.reviewFormSubmit)    
}


Review.getEditForm = function (event) {
    var $card = $('.editReviewLink.card-link').not('.d-none').parents(".reviewCard")
    $.get(this.href).done(function (data) {
        $('#new_review').hide()
        var $editForm = $(data).filter('form')
        var reviewId = $editForm.attr('data-review-id')
        $card.replaceWith($editForm)
    })
    event.preventDefault()
}


Review.editLinkListener = function() {
    $(document).on('click', '.editReviewLink', Review.getEditForm)  
}



$(function () {
    Review.templateSource = $("#card-review").html()
    Review.template = Handlebars.compile(Review.templateSource)
    Review.reviewFormListener()
    Review.deleteReviewListener()
    Review.editLinkListener()
    Review.updateReviewListener()
})
