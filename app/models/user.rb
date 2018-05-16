class User < ApplicationRecord
  has_many :reviews
  has_many :products, through: :reviews
  acts_as_voter

  has_secure_password
  before_validation :normalize_name
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true 

  def self.first_three
    order(:username).limit(3)
  end

  def self.last_three
    order(username: :desc).limit(3)
  end
  


  private
  def normalize_name
    self.username = self.username.downcase.titleize if !!username
  end
end
