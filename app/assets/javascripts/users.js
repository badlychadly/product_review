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
    

    renderReviews() { $('#insert_reviews').append(User.template(this)) }


    static createUser(json) {
        let user = new User(json)
        user.createReviews(json.reviews)
        return user
    }

    static fetchSuccess(json) {
        let user = User.createUser(json)
        user.renderReviews()
    }


    static fetchReviews() {
        fetch(this.href + '.json')
            .then(function (resp) {
                return resp.json()
            })
            .then(User.fetchSuccess)
    }


    static loadReviews(event) {
        if ($('#reviewsList').children().is('h4')) {
            $('#reviewsList').remove()
        } else {
            User.fetchReviews()
        }
        event.preventDefault()
    }


    static changeLiText(array) {
        let reversedArray = array.reverse()
                reversedArray.forEach(function (info, index) {
                    for (const key in info) {
                        $('ol div').children('li').eq(index).text(`${key}, Number of Reviews - ${info[key]}`)
                    }
                })
    }


    static reverseOrder(event) {
        let sortedArray = []
        $.get(this.href + '.json')
        .done(function (json) {
            for (let key in json) {
                let val = json[key]
                    let obj = {};
                    obj[key] = val
                    sortedArray.push(obj)
                }
                User.changeLiText(sortedArray)
        })
        event.preventDefault()
    }

    static reverseOrderListener() { $(document).on('click', '#reverse', User.reverseOrder)}


    static loadReviewsListener() { $(document).on('click', '.load_reviews', User.loadReviews) }

}



$(function() {
    User.template = HandlebarsTemplates['reviews_list']
    User.loadReviewsListener()
    User.reverseOrderListener()
})