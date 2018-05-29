module SessionsHelper

  def div_for_errors(flash)
    if !!flash 
      content_tag :div, class: "field_with_errors" do 
        yield
      end 
    else 
      yield
    end
  end

  def login_errors(user, params)
    if user.nil? && !user.try(:authenticate, params)
      "Invalid Email/Password"
    elsif user.nil? 
      "Invalid Email"
    else 
      "Invalid Password"
    end
  end
end
