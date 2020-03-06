class Track < ApplicationRecord

  validates :title, :artist_id, presence: true

  # belongs_to :artist
  # belongs_to :album
end