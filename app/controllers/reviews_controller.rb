class ReviewsController < ApplicationController
  before_action :require_logged_in
  before_action :find_product_review
  

  def index
    @review = Review.new
  end


  def create
    @review = current_user.reviews.build(review_params)
    respond_to do |format|
      if @review.save
        format.js {render 'create.js', :layout => false} 
      else
        format.js {render partial: 'review_form', locals: {review: @review, product: @product}}
        # binding.pry
        
      end
    end
  end

  def edit

  end

  def update
    if @review.update_attributes(review_params) 
      redirect_to product_reviews_path(@product)
    else 
      render :edit 
    end
  end

  def show
    redirect_to edit_product_review_path(@product, @review)
  end

  def destroy
    if @review.user == current_user
      @review.destroy
      render json: @review
    else
      redirect_back(fallback_location: product_reviews_path(@product))
    end
  end


  private 

  def find_product_review
    @product = Product.find_by(id: params[:product_id])
    @review = Review.find_by(id: params[:id])
  end

  def review_params
    params.require(:review).permit(:content, :product_id)
  end

end
