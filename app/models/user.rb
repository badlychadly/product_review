class User < ApplicationRecord
  has_many :reviews
  has_many :products, through: :reviews
  acts_as_voter

  has_secure_password
  before_validation :normalize_name
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true 

  scope :order_by_most_reviews, -> {joins(:reviews).group(:username).order("COUNT(user_id)DESC")}

  def self.first_three
    order(:username).limit(3)
  end

  def self.last_three
    order(username: :desc).limit(3)
  end
  
  def self.top_reviewer
    user = find_by(id: order_by_most_reviews.limit(1).pluck(:id))
    user.tap do |u| 
      u.admin = true
      u.save
    end
  end

  # def self.remove_admins(admins)
  #   admins.each do |user|
  #     if user != self.top_reviewer 
  #       user.admin = false
  #       user.save
  #     end
  #   end 
  # end

  # def self.admin
  #   if where(admin: true).size > 1
  #     remove_admins(where(admin: true)).first
  #   else
  #     top_reviewer
  #   end
  # end



  private
  def normalize_name
    self.username = self.username.downcase.titleize if !!username
  end
end
