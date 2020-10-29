class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :tracks,
  class_name: :Track,
  foreign_key: :artist_id,
  primary_key: :id

end
