# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x User has many reviews, Product has many reviews ] Include at least one has_many relationship (x has_many y e.g. User has_many Recipes) 
- [x Reviews belong to User and Review] Include at least one belongs_to relationship (x belongs_to y e.g. Post belongs_to User)
- [x User has many products through reviews, Produc has many users through reviews] Include at least one has_many through relationship (x has_many y through z e.g. Recipe has_many Items through Ingredients)
- [x Reviews have content to be submited about a product] The "through" part of the has_many through includes at least one user submittable attribute (attribute_name e.g. ingredients.quantity)
- [x users must have email, password, and username. Product must have name, description, link, and price. Review must have content.] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
- [x User has class level scope method that orders users based on reviews, Product has class scope methods for most_reviews, best_voted, and most_recent. ] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
- [x The signup link can be found in the navbar, a form is provided, and if all criteria is met the user is saved in the db and given a session[:user_id], otherwise the signup page rerenders and displays the users errors. ] Include signup (how e.g. Devise)
- [x The navbar has a login link, a form is displayed that asks for email and password, on completion they will either be given the session id and access the site, or rerender the form and see the errors ] Include login (how e.g. Devise)
- [x logout link can also be found in the navbar and when clicked will route the http delete request to the destroy action in the sessions controller which will delete the session[:user_id] loging the user out. ] Include logout (how e.g. Devise)
- [x This app uses the omniauth gem, and omniauth-amazon to give the user the option to login via amazon. If a user signs in through the third party my db only saves email, username, and uid ] Include third party signup/login (how e.g. Devise/OmniAuth)
- [x The resource reviews is nested inside of products resource all actions are available except for #new, since a new review is created on the product_review_path page which is the reviews/index page. ] Include nested resource show or index (URL e.g. users/2/recipes)
- [x to create a new review for a product you must scroll down to the bottom of the product_reviews page the form for reviews contains a hidden_field to keep track of the product_id. ] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
- [x the _shared_errors partial displays validation errors for any object if they exist, this partial is included in every form ] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:
- [x ] The application is pretty DRY
- [x Controllers have been thinned out and only contain logic that required redirects, or rendering] Limited logic in controllers
- [x In ApplicationController helper methods can be found, such as current_user, logged_in?, and top_user] Views use helper methods if appropriate
- [x The heft of my html is in views/application which contains partials for cards, modals, and buttons ] Views use partials if appropriate
