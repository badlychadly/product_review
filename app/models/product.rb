class Product < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  def reviews_content
    reviews.pluck(:content)
  end
end
