class SessionsController < ApplicationController
  def new
  end

  def create
    binding.pry
    user = User.find_by(email: params[:session][:email])
    if user.try(:authenticate, params[:session][:password])
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      flash[:alert] = "Invalid Email/Password"
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path
  end

  private 

  def auth
    request.env['omniauth.auth']
  end 
end
