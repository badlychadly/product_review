class Product < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  acts_as_votable


  def reviews_content
    reviews.pluck(:content)
  end

  def self.most_reviews 
    Product.joins(:reviews).group(:name).order("COUNT(product_id)DESC")
  end
end
