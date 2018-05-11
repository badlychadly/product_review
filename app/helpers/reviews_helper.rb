module ReviewsHelper

  def review_edit_link(review)  
    link_to "Edit Review", edit_product_review_path(review.product, review), class: "card-link" if review.user == current_user 
  end

  def figcaption_for_reviews(review)
    content_tag :figcaption, review , class: "figure-caption" do
      yield
    end
  end

  def div_card_for_review(review)
    content_tag :div, review, class: "card" do
      yield
    end
  end

end
