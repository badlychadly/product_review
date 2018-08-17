class Review {
    constructor(attributes) {
        this.id = attributes.id
        this.content = attributes.content
        this.user = attributes.user
        this.product = attributes.product
    }



    renderCard() { return Review.template(this) }


    findCard() { return $(`[data-id="${this.id}"]`) }


    destroy() {
        this.findCard().remove()
        $('#review_content').attr("disabled", false)
        $('[value="Create Review"]').attr("disabled", false)
    }


    static invalid(resp) {
        let $form = $($.parseHTML(resp.responseText)).filter('form')
        $form.is('#new_review') ? $('#new_review').replaceWith($form) : $('.edit_review').replaceWith($form)
        redBorder()
        $('#review_content').val("")
    }


    static valid(json) {
        let review = new Review(json)
        let card = review.renderCard()
        if ($('.edit_review').length) {
            $('.edit_review').replaceWith(card) 
        } else {
            $('#reviews').append(card)
        }
        $('#new_review').show()
        $('.productPageLink').remove()
        $('#review_content').val("").attr("disabled", true)
        normalizeBorder()
    }


    static reviewFormSubmit(event) {
        $.ajax({
                type: this.method,
                url: this.action,
                data: $(this).serialize(),
                dataType: 'json'
            }).done(Review.valid)
            .fail(Review.invalid)
        event.preventDefault()
    }


    static destroy(json) {
        let review = new Review(json)
        review.destroy()
        normalizeBorder()
    }


    static deleteReview(event) {
        $.ajax({
            type: "DELETE",
            async: true,
            url: this.action,
            data: $(this).serialize(),
            success: (json) => Review.destroy(json)
        })

        event.preventDefault()
    }


    static getEditForm(event) {
        let $card = $('.editReviewLink.card-link').not('.d-none').parents(".reviewCard")
        $.get(this.href).done(function(data) {
            $('#new_review').hide()
            let $editForm = $(data).filter('form')
            let reviewId = $editForm.attr('data-review-id')
            $card.replaceWith($editForm)
        })
        event.preventDefault()
    }
    
    
    
    
    
    
    static reviewFormListener() { $(document).on('submit', 'form#new_review.new_review', Review.reviewFormSubmit) }
    
    static deleteReviewListener() { $(document).on('submit', '#deleteComment', Review.deleteReview) }

    static updateReviewListener() { $(document).on('submit', '.edit_review', Review.reviewFormSubmit) }

    static editLinkListener() { $(document).on('click', '.editReviewLink', Review.getEditForm) }


    static ready() {
        Review.templateSource = $("#card-review").html()
        if (Review.templateSource !== undefined) {
            Review.template = Handlebars.compile(Review.templateSource)
        }

        this.reviewFormListener()
        this.deleteReviewListener()
        this.editLinkListener()
        this.updateReviewListener()
    }

}

function redBorder() {
    $('#review_content').css({
        "border": "1px solid red"
    })
}

function normalizeBorder() {
    $('#review_content').css({
        "border-color": "rgb(169, 169, 169)"
    })
    $('#new_review').children('ul.list-group').remove()
}




$(function() {
    Review.ready()
})