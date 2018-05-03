class User < ApplicationRecord
  has_secure_password
  before_validation :normalize_name
  validates :email, presence: true, uniqueness: true


  private
  def normalize_name
    self.username = self.username.downcase.titleize
  end
end
