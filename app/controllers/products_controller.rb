class ProductsController < ApplicationController
  before_action :find_product, only: [:show]

  def index
    @products = Product.all
  end

  def new
    
  end

  def create
        
  end

  def show

  end


  private 

  def find_product
    @product = Product.find_by(id: params[:id])
  end
end
