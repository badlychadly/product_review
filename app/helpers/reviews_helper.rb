module ReviewsHelper

  def review_edit_link(review)  
    
    link_to "Edit Review", edit_product_review_path(review.product, review), class: link_display(review)
  end

  def link_display(review)
    if review.user == current_user && review.persisted?
      "card-link"
    else 
      "card-link d-none"
    end
  end

  def div_card_for_review(review)
    content_tag :div, review, class: "reviewCard card bg-light", data: {id: review.id} do
      yield
    end
  end

  def delete_comment(review)
    # link_to "remove comment", "/products/#{review.product_id}/reviews/#{review.id}", class: "badge badge-danger", id: "deleteComment", method: 'delete' if review.user == current_user

    form_tag "/products/#{review.product_id}/reviews/#{review.id}", id: "deleteComment", data: {num: review.id}, method: 'delete' do 
      submit_tag "remove review", class: "btn btn-sm btn-danger"
    end if review.user == current_user
  end

end
