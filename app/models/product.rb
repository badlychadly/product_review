class Product < ApplicationRecord
  scope :most_reviews, -> {joins(:reviews).group(:name).order(Arel.sql("COUNT(reviews.id) DESC"))}
  scope :best_voted, -> {order(cached_votes_up: :desc)}
  scope :most_recent, -> {order(:created_at)}

  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
  
  acts_as_votable
  validates :name, presence: true, uniqueness: true
  validates :description, :link, :price, :img, presence: true
  validates :price, numericality: true


  def reviews_content
    reviews.pluck(:content)
  end

  def self.find_previous(params)
    self.find_by(id: (params[:product_id]).to_i - 1)
  end

end

