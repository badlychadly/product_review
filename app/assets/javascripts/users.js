
function User(attributes) {
    this.id = attributes.id
    this.username = attributes.username
    this.email = attributes.email
    this.reviews = attributes.reviews
}


User.prototype.createReviews = function (reviews) {
    return this.reviews = reviews.map(review => new Review(review))
}

User.createUser = function (json) {
    var user = new User(json)
    user.createReviews(user.reviews)
    return user
}


User.loadReviews = function (event) {
    if ($('#reviewsList').children().is('li')) {
        $('#reviewsList').remove()
    } else {
        $.get(this.href + '.json', function (json) {
            var user = User.createUser(json)
            reviewsHtml = HandlebarsTemplates['reviews_list']({
                reviews: user.reviews
            });
            $('#insert_reviews').append(reviewsHtml)
        })
    }
    event.preventDefault()
}

User.loadReviewsListener = function () {
    $(document).on('click', '.load_reviews', User.loadReviews)
}

$(function () {
    User.loadReviewsListener()
})

// $(document).on('turbolinks:load', function () {
//       User.loadReviewsListener()  
// })