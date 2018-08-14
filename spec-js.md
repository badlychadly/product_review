# Specifications for the Rails with jQuery Assessment

Specs:
- [x] Use jQuery for implementing new requirements
- [x product/show page has a link which has a click event listener through jQuery. On click an ajax request is fired returning a Active Model Serialized json product instance. ] Include a show resource rendered using jQuery and an Active Model Serialization JSON backend.
- [x on users/show a click event listener is attached to a link using jQuery, and an ajax get request fires. The response is the active model serliazed json object of user. The active model of user has_many reviews, and the reviews are rendered to the user/show page. ] Include an index resource rendered using jQuery and an Active Model Serialization JSON backend.
- [x The user_serializer has_many reviews which are appended to the dom on the users/show page when the "List My Reviews" link is clicked ] Include at least one has_many relationship in information rendered via JSON and appended to the DOM.
- [x product_reviews_path has a new review form. On submit an ajax post request fires getting active model review json back. A new review instance is created and a method to render a handlebars template for review is called on the prototype then appended to the dom.  ] Use your Rails API and a form to create a resource and render the response without a page refresh.
- [x reviews.js uses the method valid() to create a prototype from the  json response. products.js uses a method differentProduct() to make an ajax request and create a Product prototype from the json response. users.js creates a new User prototype from the json returned from the ajax request in the loadReviews() method.  ] Translate JSON responses into js model objects.
- [x reviews.js uses the renderCard() on the prototype to bind a handlebars template to the Review instance. ] At least one of the js model objects must have at least one method added by your code to the prototype.

Confirm
- [ x] You have a large number of small Git commits
- [ x] Your commit messages are meaningful
- [ x] You made the changes in a commit that relate to the commit message
- [ x] You don't include changes in a commit that aren't related to the commit message
