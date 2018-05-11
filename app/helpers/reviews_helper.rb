module ReviewsHelper

  def review_edit_link(review)  
    link_to "Edit Review", edit_product_review_path(@product, review) if review.user == current_user 
  end

  def figcaption_for_reviews(review)
    content_tag :figcaption, review , class: "figure-caption" do
      yield
    end
  end

  def li_for_modal(review)
    content_tag :li, review, class: "list-group-item" do
      yield
    end
  end

end
