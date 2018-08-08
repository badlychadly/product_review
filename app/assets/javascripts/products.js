function Product(attributes) {
    this.id = attributes.id
    this.name = attributes.name
    this.description = attributes.description
    this.link = attributes.link
    this.img = attributes.img
    this.price = attributes.price
    this.reviews = attributes.reviews
    this.cached_votes_up = attributes.cached_votes_up
    this.cached_votes_down = attributes.cached_votes_down
}

Product.filterForm = function(event) {
    $.ajax({
        type: this.method,
        url: this.action,
        data: $(this).serialize(),
        dataType: 'script'
    });
    event.preventDefault();

}

Product.filterFormListener = function() {
    $(document).on('submit', '#searchForm', Product.filterForm)
}


Product.nextProduct = function(event) {
    var id = parseInt($(this).attr("data-product-id")) + 1
    $.get(`/products/${id}/reviews`, function(data) {
        var html = $.parseHTML(data)
        $('#pageContainer').html($(html).filter('#pageContainer'))
    })
    event.preventDefault()
    event.stopImmediatePropagation()
}

Product.nextProductListener = function() {
    $(document).on('click', '.nextProduct', Product.nextProduct);
}

Product.prototype.vote = function() {
    $('#upVoteCount').text(this.cached_votes_up)
    $('#downVoteCount').text(this.cached_votes_down)
}


Product.sendVote = function(event) {
    $.ajax({
        type: this.dataset.method,
        url: this.pathname,
        data: "json",
        success: function(json) {
            product = new Product(json)
            product.vote()
        }
    })

    event.preventDefault()
    event.stopImmediatePropagation()
}


Product.voteListener = function() {
    $('body').on('click', '#upVote', Product.sendVote)
    $('body').on('click', '#downVote', Product.sendVote)
}


Product.differentProduct = function(event) {
    var nextId = parseInt($('#differentProduct').attr('data-product')) + 1;
    $.get(`/products/${nextId}.json`).done(function(product) {
        var productHtml = HandlebarsTemplates['product_page']({
            img: product.img,
            description: product.description
        });
        $('#newContent').html(productHtml)
        $('h1.display-4').text(product.name)
        $('#differentProduct').attr("data-product", product["id"])
    })
    event.preventDefault()
}


Product.differentProductListener = function() {
    $('body').on('click', '#differentProduct', Product.differentProduct)
}


Product.seeReviews = function(event) {
    if ($('#reviewsList').children().is('li')) {
        $('#reviewsList').remove()
    } else {
        var id = $('#differentProduct').attr('data-product')

        $.get(`/products/${id}.json`, function(product) {
            reviewsHtml = HandlebarsTemplates['reviews_list']({
                reviews: product.reviews
            });
            $('#newContent').prepend(reviewsHtml)
        })
    }
    event.preventDefault()
}

Product.seeReviewsListener = function() {
    $('body').on('click', '#seeReviews', Product.seeReviews)
}


$(function () {
    Product.filterFormListener()
    Product.nextProductListener()
    Product.voteListener()
    Product.differentProductListener()
    Product.seeReviewsListener()
})

// $(document).on('turbolinks:load', function() {
//     Product.filterFormListener()
//     Product.nextProductListener()
//     Product.voteListener()
//     Product.differentProductListener()
//     Product.seeReviewsListener()
// })