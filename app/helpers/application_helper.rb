module ApplicationHelper

  def nav_content
    if logged_in?
      user_dropdown_nav
    else
      amazon_img_login_link + login_nav_link + signup_nav_link
    end
  end
  
  def login_nav_link
    content_tag(:li, link_to("Login", login_path, class: "nav-link"), class: "nav-item")
  end

  def signup_nav_link
    content_tag(:li, link_to("Signup", signup_path, class: "nav-link"), class: "nav-item")
  end

  def user_dropdown_nav
    render  "layouts/nav/user_dropdown" if logged_in?
  end 

  def product_dropdown
    render "layouts/nav/product_dropdown" if logged_in?
  end

  def amazon_img_login_link
    link_to('/auth/amazon') do
      image_tag("https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png", alt: "Login with Amazon", class: "nav-link")
    end 
  end

  def flash_message(flash, color)
    if flash
      content_tag :div, flash, 'role' => "alert", class: "alert alert-#{color}"
    end
  end

  def alert_for_errors(obj)
    
  end

end
