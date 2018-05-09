module ApplicationHelper
  
  def login_nav_link
    content_tag(:li, link_to("Login", login_path, class: "nav-link"), class: "nav-item")
  end

  def signup_nav_link
    content_tag(:li, link_to("Signup", signup_path, class: "nav-link"), class: "nav-item")
  end

  # def drop_down_nav
  #   content_tag(
  #     :li, content_tag(
  #       :a, class: "nav-link dropdown-toggle",
  #        'href'=>"#",
  #         id: "navbarDropdownMenuLink",
  #        'data-toggle'=>"dropdown",
  #        'aria-haspopup'=>"true",
  #        'aria-expanded'=>"false"),
  #        content_tag(:div,
  #         link_to("Action", "#", class: "dropdown-menu"),
  #         link_to("Another", "#", class: "dropdown-menu"),
  #         link_to("Somethin", "#", class: "dropdown-menu")
  #         class: "nav-link dropdown-toggle", 'aria-labelledby'=>"navbarDropdownMenuLink"),
  #           class: "nav-item dropdown")

    # <li class="nav-item dropdown">
    #       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    #         Dropdown link
    #       </a>
    #       <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    #         <a class="dropdown-item" href="#">Action</a>
    #         <a class="dropdown-item" href="#">Another action</a>
    #         <a class="dropdown-item" href="#">Something else here</a>
    #       </div>
    #     </li>
  # end 

end
