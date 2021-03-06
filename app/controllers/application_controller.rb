class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :top_user


  def current_user
      @user ||= User.find_by(id: session[:user_id]) if session[:user_id].present?
  end
  
  def logged_in?
    !!current_user
  end

  def require_logged_in
   redirect_to(controller: 'sessions', action: 'new') unless logged_in?
  end

  def top_user
    User.most_reviews
  end

end