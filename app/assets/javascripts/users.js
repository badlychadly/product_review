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
    

    renderList() { return User.template(this) }


    static createUser(json) {
        let user = new User(json)
        user.createReviews(json.reviews)
        return user
    }


    static loadReviews(event) {
        if ($('#reviewsList').children().is('li')) {
            $('#reviewsList').remove()
        } else {
            $.get(this.href + '.json', function(json) {
                let user = User.createUser(json)
                let reviewsList = user.renderList()
                $('#insert_reviews').append(reviewsList)
            })
        }
        event.preventDefault()
    }


    static loadReviewsListener() { $(document).on('click', '.load_reviews', User.loadReviews) }

}



$(function() {
    User.template = HandlebarsTemplates['reviews_list']
    User.loadReviewsListener()
})