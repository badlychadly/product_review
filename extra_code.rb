<div class="col-sm-3">
  
    <figure class="figure bg-light">
      <strong><%= product.name %></strong>
      <h4></h4>
      <img src="<%= product.img %>" class="figure-img img-fluid rounded w-100" alt="A generic square placeholder image with rounded corners in a figure.">
      <%= render collection: product.reviews, partial: "reviews/figcaption", as: :review %>
      <%= render partial: "products/collapse_description", locals: {product: product} %>
    </figure>
  </div>


  <%= modal_for_reviews(review) do %>
    <%= review.content %>
  <% end %>