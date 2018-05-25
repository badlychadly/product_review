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

  def delete_product
    link_to "Delete Product", product_path(@product), method: 'delete', class: 'badge badge-danger offset-sm-1' if current_user == top_user
  end

  def edit_product
    link_to "Edit Product", edit_product_path(@product), class: 'badge badge-warning offset-sm-1' if current_user.username == @product.added_by
  end

  def div_flex_for_products
    content_tag :div, class: "d-flex flex-wrap bg-secondary" do 
      yield
    end 
  end

  def remove_price_symbol(product_params)
    product_params.delete!("$")
  end

  def added_by_text(product)
    content_tag :p, "Added By: #{product.added_by}", class: "float-right" if !!product.added_by
  end


end
