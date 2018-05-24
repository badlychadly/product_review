module UsersHelper

  def form_for_user(user, url, btn_text)
    content_tag :div, class: "row bg-light rounded border d-flex justify-content-center" do 
      content_tag :div, class: "col-md-6" do
        form_for(user, url: url) do |f|
        render partial: "user_form", locals: {f: f, btn_text: btn_text}
        end 
      end
    end 
  end


  
end
