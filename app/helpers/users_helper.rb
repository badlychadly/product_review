module UsersHelper

  def user_form(user, url, btn_text)
    form_for(user, url: url) do |f|
    
     render partial: "new_user", locals: {f: f, btn_text: btn_text}
     
    end 
  end


  
end
