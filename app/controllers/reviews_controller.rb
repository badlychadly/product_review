class ReviewsController < ApplicationController
  before_action :require_logged_in
  before_action :find_product_review
  

  def index
    @review = Review.new
    if !@product
      @product = Product.find_previous(params[:product_id])
      render :index, layout: false, status: 404
    end
  end


  def create
    @review = current_user.reviews.build(review_params)
    respond_to do |format|
      if @review.save
        format.json {render json: @review, status: 201} 
      else
        format.html {render :index, layout: false, status: :unprocessable_entity}
        
      end
    end
  end

  def edit
    render layout: false
  end

  def update
    respond_to do |format|
      if @review.update_attributes(content: review_params['content']) 
        format.json {render json: @review, status: 202}
      else 
        format.js {render :index, layout: false, status: :unprocessable_entity} 
      end
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
