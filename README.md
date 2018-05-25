# product_review

product_review is a rails web app designed to give a user the opportunity to voice their opinion, or experience with a particular product they have had experience with. A user can Review an existing product or add a new one to the site.
A user can also cast a vote on a particular product they liked or disliked. Users are not able to view other users since the focus of this web app is to review products. Users have the ability to submit, edit, and delete their reviews, but only the user who added the product can edit it. The only user who has the ability to delete a product is the top reviewer.

## Installation

If you wish to add to This web app or, run it from your local server be sure to fork and clone this repository.
This app was built with: 
```
Ruby 2.3.6

```
and depends on the Framework of 
```
Rails 5.2.0
```
Once you have cloned this repo. Be sure to run the following in order
```
bundle install
```
```
rake db:migrate
```
There is also a seed.rb file in the db folder if you wish to plant that data run 
```
rake db:seed
```

## Getting Started

To get started with product_review, you must create an account. An option is available to login through amazon for those who do not wish to have a personal password stored in product_review db. After Signup/Login is complete user will be directed to the products page, which displays all of the products. You may choose to filter the product display by Most Reviewed, Most Recent, or Best Voted. Find products you have used and let others know your experience with it. 

To add a new product you must fill out all of the input fields, otherwise errors will be displayed until you correct them, and your product will not be added. Once added you will want to give a review on that product and give it an up or downvote to let others know what you think about it.


## Contributing 

If you wish to improve the app, report any bugs, or wish to share a better way of doing something please feel free to submit a pull request at https://github.com/badlychadly/product_review



##License 

This project cantains a Learn.co and Flatiron School LLC Educational Content License https://learn.co/content-license

##Authors 
* **Chad Montoya**