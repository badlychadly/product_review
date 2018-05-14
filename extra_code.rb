


  <%= modal_for_reviews(review) do %>
    <%= review.content %>
  <% end %>


  <%= render collection: product.reviews, partial: "reviews/modal_reviews", as: :review %>
