class User < ApplicationRecord
  has_many :reviews
  has_many :products, through: :reviews

  has_secure_password
  before_validation :normalize_name
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true 
  


  private
  def normalize_name
    self.username = self.username.downcase.titleize if !!username
  end
end
