class Track < ApplicationRecord

  validates :title, :lyrics, presence: true

  belongs_to :artist
  # belongs_to :album
end