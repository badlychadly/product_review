class Product {
    constructor(attributes) {
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


    renderList() {
        return Product.reviewsTemplate(this)
    }


    renderPage() {
        return Product.template(this)
    }


    static filterForm(event) {
        $.ajax({
            type: this.method,
            url: this.action,
            data: $(this).serialize(),
            dataType: 'script'
        });
        event.preventDefault();

    }

    static filterFormListener() {
        $(document).on('submit', '#searchForm', Product.filterForm)
    }


    static nextProduct(event) {
        var id = parseInt($(this).attr("data-product-id")) + 1
        $.get(`/products/${id}/reviews`, function(data) {
            var html = $.parseHTML(data)
            $('#pageContainer').html($(html).filter('#pageContainer'))
        })
        event.preventDefault()
        event.stopImmediatePropagation()
    }

    static nextProductListener() {
        $(document).on('click', '.nextProduct', Product.nextProduct);
    }

    vote() {
        $('#upVoteCount').text(this.cached_votes_up)
        $('#downVoteCount').text(this.cached_votes_down)
    }


    static sendVote(event) {
        $.ajax({
            type: this.dataset.method,
            url: this.pathname,
            data: "json",
            success: function(json) {
                var product = new Product(json)
                product.vote()
            }
        })

        event.preventDefault()
        event.stopImmediatePropagation()
    }


    static voteListener() {
        $('body').on('click', '#upVote', Product.sendVote)
        $('body').on('click', '#downVote', Product.sendVote)
    }


    static differentProduct(event) {
        var nextId = parseInt($('#differentProduct').attr('data-product')) + 1;
        $.get(`/products/${nextId}.json`).done(function(json) {
            var product = new Product(json)
            var productHtml = product.renderPage()
            $('#newContent').html(productHtml)
            $('h1.display-4').text(product.name)
            $('#differentProduct').attr("data-product", product.id)
        })
        event.preventDefault()
    }


    static differentProductListener() {
        $('body').on('click', '#differentProduct', Product.differentProduct)
    }


    static seeReviews(event) {
        if ($('#reviewsList').children().is('li')) {
            $('#reviewsList').remove()
        } else {
            var id = $('#differentProduct').attr('data-product')

            $.get(`/products/${id}.json`, function(json) {
                var product = new Product(json)
                var reviewsHtml = product.renderList()
                $('#newContent').prepend(reviewsHtml)
            })
        }
        event.preventDefault()
    }

    static seeReviewsListener() {
        $('body').on('click', '#seeReviews', Product.seeReviews)
    }
}



$(function() {
    Product.reviewsTemplate = HandlebarsTemplates['reviews_list']
    Product.template = HandlebarsTemplates['product_page']
    Product.filterFormListener()
    Product.nextProductListener()
    Product.voteListener()
    Product.differentProductListener()
    Product.seeReviewsListener()
})