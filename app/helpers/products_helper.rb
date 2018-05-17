module ProductsHelper
  def image_link(product)
    link_to product_reviews_path(product) do 
      yield
    end
  end

  def products_filter(params)
    if params["filter by"].present?
      method_name = to_camel_case(params["filter by"])
      Product.send method_name
    else 
      Product.all
    end
  end

  def to_camel_case(string)
    string.parameterize.underscore.to_sym
  end

end
