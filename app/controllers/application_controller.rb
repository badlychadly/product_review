class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  helper_method :logged_in?


  def current_user
      @user ||= User.find_by(id: session[:user_id])
  end
  
  def logged_in?
    !!current_user
  end

  def require_logged_in
   redirect_to(controller: 'sessions', action: 'new') unless logged_in?
  end

end