class Track < ApplicationRecord

  validates :title, :lyrics, presence: true
  
  has_many :annotations,
  class_name: :Annotation,
  foreign_key: :track_id,
  primary_key: :id

  belongs_to :artist,
  class_name: :Artist,
  foreign_key: :artist_id,
  primary_key: :id

  has_many :comments,
  class_name: :Comment,
  foreign_key: :track_id,
  primary_key: :id

end