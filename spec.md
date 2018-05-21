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
- [ ] Include nested resource show or index (URL e.g. users/2/recipes)
- [ ] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
- [ ] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:
- [ ] The application is pretty DRY
- [ ] Limited logic in controllers
- [ ] Views use helper methods if appropriate
- [ ] Views use partials if appropriate
