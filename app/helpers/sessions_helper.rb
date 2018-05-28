module SessionsHelper

  def div_for_errors(flash)
    if !!flash 
      content_tag :div, class: "field_with_errors" do 
        # content_tag(:small, "#{flash}", class: "form-text text-danger")
          # <small class="form-text text-danger"><%= flash[:alert] %></small>
        
        yield
      end 
    else 
      yield
    end
  end
end
