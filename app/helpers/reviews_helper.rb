module ReviewsHelper

  def review_edit_link(review)  
    link_to "Edit Review", edit_product_review_path(@product, review) if review.user == current_user 
  end

end
