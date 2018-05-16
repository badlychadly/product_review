class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product
  validates :content, presence: true
  validates :user_id, uniqueness: {scope: :product_id, message: "A user can only review product once!"}
  

  def users_name
    user.username
  end

end
