class Product < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  acts_as_votable
  validates :name, :description, :link, :price, presence: true


  def reviews_content
    reviews.pluck(:content)
  end

  def self.most_reviews 
    Product.joins(:reviews).group(:name).order("COUNT(product_id)DESC")
  end

  def self.best_voted
    order(cached_votes_up: :desc)
  end

  def self.most_recent
    order(:created_at)
  end
end
