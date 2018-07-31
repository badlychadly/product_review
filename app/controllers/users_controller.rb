class UsersController < ApplicationController
  before_action :current_user
  before_action :require_logged_in, except: [:new, :create]


  def index 
    @users = User.order_with_counted_reviews
  end


  def new
    @user = User.new
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id 
      redirect_to products_path
    else 
      render 'new'
    end
  end

  def show
    respond_to do |format| 
      format.html {render 'show'}
      format.json {render json: current_user, status: 200 }
    end
  end

  def edit
    
  end

  def update
    if @user.update_attributes(user_params)
      redirect_to user_path(@user)
    else 
    render :edit
    end
  end

  def destroy
    @user.destroy 
    session[:user_id] = nil
    redirect_to signup_path, notice: "Your account has been deleted"
  end

  private 

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
