class ProductsController < ApplicationController
  before_action :find_product, except: [:index]
  before_action :require_logged_in

  def index
    @products = helpers.products_filter(params)
    respond_to do |format|
      format.html {render 'index'}
      format.js {render 'index.js', :layout => false}
    end
  end


  def show  
    respond_to do |format|
      if !@product
        @product = Product.find_previous(params[:id])
        format.json {render json: @product, layout: false, status: 404}
      else
        format.html {render 'show'}
        format.json {render json: @product, status: 200}
      end
    end
  end 


  def new
    
  end

  def create
    helpers.remove_price_symbol(product_params[:price])
    @product = Product.new(product_params)
    if @product.save
      redirect_to product_reviews_path(@product)
    else
      render :new
    end
  end

  def edit
    
  end

  def update
    if @product.update_attributes(product_params)
      redirect_to product_reviews_path(@product), notice: "Update successful!"
    else
      render :edit
    end
  end

  def upvote
    @product.upvote_by current_user
    render json: @product
  end

  def downvote
    @product.downvote_from current_user
    render json: @product   
  end

  def destroy
    if current_user == top_user
      @product.destroy
      
      redirect_to products_path, notice: "Product has been removed"
    else
      redirect_back(fallback_location: product_reviews_path(@product))
    end
  end


  private 

  def product_params
    params.require(:product).permit(:name, :description, :link, :img, :price, :added_by)
  end

  def find_product
    if params[:id].present?
      @product = Product.find_by(id: params[:id])
    else
      @product = Product.new
    end
  end
end
