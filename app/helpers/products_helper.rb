module ProductsHelper
  def image_link(product)
    link_to product_path(product) do 
      yield
    end
  end
end
