class ReviewsController < ApplicationController
  before_action :require_logged_in


  def create
    @product = Product.find_by(id: params[:product_id])
    @review = @product.reviews.build(review_params)
    @review.user = current_user
    @review.save
    redirect_to product_path(@product)
  end


  private 

  def review_params
    params.require(:review).permit(:content)
  end
end
