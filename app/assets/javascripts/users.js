
class User {
    constructor(attributes) {
        this.id = attributes.id
        this.username = attributes.username
        this.email = attributes.email
        this.reviews = attributes.reviews
    }


    createReviews(reviews) {
        return this.reviews = reviews.map(review => new Review(review))
    }

    renderList() {
        return User.template(this)
    }

    
    static createUser(json) {
        var user = new User(json)
        user.createReviews(user.reviews)
        return user
    }
    
    
    static loadReviews(event) {
        if ($('#reviewsList').children().is('li')) {
            $('#reviewsList').remove()
        } else {
            $.get(this.href + '.json', function (json) {
                var user = User.createUser(json)
                debugger;
                // reviewsHtml = HandlebarsTemplates['reviews_list'];
                var reviewsList = user.renderList()
                // $('#insert_reviews').append(reviewsList)
            })
        }
        event.preventDefault()
    }
    
    static loadReviewsListener() {
        $(document).on('click', '.load_reviews', User.loadReviews)
    }

}



$(function () {
    // var ast = Handlebars.parse('reviews_list')
    // Handlebars.precompile(ast)
    User.template = HandlebarsTemplates['reviews_list']
    User.loadReviewsListener()
})
