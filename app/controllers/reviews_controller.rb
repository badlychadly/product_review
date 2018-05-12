class ReviewsController < ApplicationController
  before_action :require_logged_in
  before_action :find_product_review, except: [:create]
  helper_method :shared_errors


  def create
    @product = Product.find_by(id: params[:product_id])
    @review = @product.reviews.build(review_params)
    @review.user = current_user
    if @review.save
      redirect_to product_path(@product) 
    else
      
      redirect_to product_path(@product), alert: ApplicationHelper.shared_errors(@review)
    end
  end

  def edit

  end

  def update
     @review.update_attributes(review_params) 
      redirect_to product_path(@product)
  end


  private 

  def find_product_review
    @product = Product.find_by(id: params[:product_id])
    @review = Review.find_by(id: params[:id])
  end

  def review_params
    params.require(:review).permit(:content)
  end
end
