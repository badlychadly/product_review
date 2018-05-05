class UsersController < ApplicationController
  before_action :current_user, except: [:edit]
  before_action :require_logged_in, except: [:new, :create]

  def new
    
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id 
      redirect_to user_path(@user)
    else 
      # binding.pry
      render 'new'
    end
  end

  def show
    
  end

  def edit
    @user = User.find_by(params[:id])
    binding.pry
  end

  def update
    if @user.update_attributes(user_params)
      redirect_to user_path(@user)
    else 
    render :edit
    end
  end

  private 

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
