class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img, :cached_votes_up, :cached_votes_down
  has_many :reviews
end
