module ApplicationHelper

  def nav_content
    if logged_in?
      drop_down_nav
    else
      login_nav_link + signup_nav_link
    end
  end
  
  def login_nav_link
    content_tag(:li, link_to("Login", login_path, class: "nav-link"), class: "nav-item")
  end

  def signup_nav_link
    content_tag(:li, link_to("Signup", signup_path, class: "nav-link"), class: "nav-item")
  end

  def drop_down_nav
    render  "layouts/nav/dropdown"
  end 

  

end
