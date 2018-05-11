class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  def users_name
    user.username
  end

end
