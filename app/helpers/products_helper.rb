module ProductsHelper
  def image_link(product)
    link_to product_path(product) do 
      yield
    end
  end

  def products_filter(params)
    if params["filter by"].present?
      if params["filter by"].include?("Most Reviews")
        Product.most_reviews
      else
        Product.best_votes
      end
    else 
      Product.all
    end
  end
end
