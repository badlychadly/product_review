class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :products, through: :reviews
  acts_as_voter

  has_secure_password
  before_validation :normalize_name
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true 

  scope :order_by_most_reviews, -> {joins(:reviews).group(:username).order("COUNT(user_id)DESC")}
  scope :order_with_counted_reviews, -> {order_by_most_reviews.count}

  def self.first_three
    order(:username).limit(3)
  end

  def self.last_three
    order(username: :desc).limit(3)
  end
  
  def self.most_reviews
    find_by(id: order_by_most_reviews.limit(1))
  end

  def self.find_or_create_omniauth(auth)
    where(email: auth['info']['email']).first_or_create do |user|
      user.username = auth['info']['name']
      user.uid = auth['uid']
      user.password = SecureRandom.hex
    end 
  end
  
  def self.find_user_email(params)
    User.find_by(email: params[:session][:email])
  end

  def authorized?(params)
    try(:authenticate, params[:session][:password])
  end




  private
  def normalize_name
    self.username = self.username.downcase.titleize if !!username
  end
end
