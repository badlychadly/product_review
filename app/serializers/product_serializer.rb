class ProductSerializer < ActiveModel::Serializer
  attributes :id, :cached_votes_up, :cached_votes_down
end
