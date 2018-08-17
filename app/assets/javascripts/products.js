class Product {
    constructor(attributes) {
        this.id = attributes.id
        this.name = attributes.name
        this.description = attributes.description
        this.link = attributes.link
        this.img = attributes.img
        this.price = attributes.price
        this.reviews = attributes.reviews
        this.users = attributes.users
        this.cached_votes_up = attributes.cached_votes_up
        this.cached_votes_down = attributes.cached_votes_down
    }


    renderList(template) {
        $('#usersList').remove()
        $('#reviewsList').remove()
        $('#newContent').prepend(template(this))
    }


    renderPage() {
        // return Product.template(this)
        $('#newContent').html(Product.bodyTemplate(this))
        $('h1.display-4').text(this.name)
        $('#differentProduct').attr("data-product", this.id)
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
        let id = parseInt($(this).attr("data-product-id")) + 1
        $.get(`/products/${id}/reviews`, function(data) {
            let responseHtml = $.parseHTML(data)
            $('#pageContainer').html($(responseHtml).filter('#pageContainer'))
        }).fail(function () {
            $('#divForLink').html("<p> No other products!</p>").css("color", "red")
        })
        event.preventDefault()
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
                let product = new Product(json)
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
        let nextId = parseInt($('#differentProduct').attr('data-product')) + 1;
        $.get(`/products/${nextId}.json`).done(function(json) {
            let product = new Product(json)
            let productHtml = product.renderPage()
        })
        event.preventDefault()
    }


    static differentProductListener() {
        $('body').on('click', '#differentProduct', Product.differentProduct)
    }

    static getProduct() {
            let id = $('#differentProduct').attr('data-product')
            return $.get(`/products/${id}.json`)
    }


    static seeReviews(event) {
        if ($('#reviewsList').children().is('li')) {
            $('#reviewsList').remove()
        } else {
            Product.getProduct().done(function (json) {
                let product = new Product(json)
                product.renderList(Product.reviewsTemplate)
            })
        }
        event.preventDefault()
    }

    static seeReviewsListener() {
        $('body').on('click', '#seeReviews', Product.seeReviews)
    }

    static seeUsers(event) {
        if ($('#usersList').children().is('li')) {
            $('#usersList').remove()
        } else {
            Product.getProduct().done(function (json) {
                let product = new Product(json)
                let usersHtml = product.renderList(Product.usersTemplate)
            })
        }
        event.preventDefault()
    }

    
    static seeUsersListener() {
        $(document).on('click', '#seeUsers', Product.seeUsers)
    }
}



$(function() {
    Product.reviewsTemplate = HandlebarsTemplates['reviews_list']
    Product.usersTemplate = HandlebarsTemplates['users_list']
    Product.bodyTemplate = HandlebarsTemplates['product_page']
    Product.filterFormListener()
    Product.nextProductListener()
    Product.voteListener()
    Product.differentProductListener()
    Product.seeReviewsListener()
    Product.seeUsersListener()
})