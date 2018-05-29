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

  def login_errors(user)
    if user.nil? 
      "No account with that email exists"
    else 
      "Invalid Password"
    end
  end
end
