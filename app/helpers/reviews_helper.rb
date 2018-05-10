module ReviewsHelper

  def review_edit_link(review)  
    link_to "Edit Review", edit_product_review_path(@product, review) if review.user == current_user 
  end

  def figcaption_for_reviews(product)
    product.reviews.each do |r|
      content_tag(:figcaption, r.content, class: "figure-caption")
    end
    # product.reviews_content.each do |content|
    #   content_tag(:figcaption, content, class: "figure-caption")
    # end
  end

end
