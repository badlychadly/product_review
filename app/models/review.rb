class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product
  validates :user_id, uniqueness: {scope: :product_id, message: "A user can only review product once!"}
  acts_as_votable

  def users_name
    user.username
  end

end
