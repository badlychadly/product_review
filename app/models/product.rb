class Product < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
  acts_as_votable
  validates :name, presence: true, uniqueness: true
  validates :description, :link, :price, presence: true


  def reviews_content
    reviews.pluck(:content)
  end

  def self.most_reviews 
    joins(:reviews).group(:name).order("COUNT(product_id)DESC")
  end

  def self.best_voted
    order(cached_votes_up: :desc)
  end

  def self.most_recent
    order(:created_at)
  end
end
