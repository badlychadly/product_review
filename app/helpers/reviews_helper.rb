module ReviewsHelper

  def review_edit_link(review)  
    
    link_to "Edit Review", edit_product_review_path(review.product, review), class: "card-link" if review.user == current_user && review.persisted?
  end

  def div_card_for_review(review)
    content_tag :div, review, class: "card bg-light" do
      yield
    end
  end

  def review_errors(flash)
    if !flash.nil?
      content_tag :div, flash.first, class: "text-danger"
    end
  end

end
