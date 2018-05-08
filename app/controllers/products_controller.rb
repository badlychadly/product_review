class ProductsController < ApplicationController
  before_action :find_product, only: [:show, :new]
  before_action :require_logged_in

  def index
    @products = Product.all
  end

  def new
    
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to product_path(@product)
    else
      render :new
    end
  end

  def show
    
  end


  private 

  def product_params
    params.require(:product).permit(:name, :description, :link, :img, :price)
  end

  def find_product
    if params[:id].present?
      @product = Product.find_by(id: params[:id])
    else
      @product = Product.new
    end
  end
end
