class Annotation < ApplicationRecord
  validates :body, :track_id, :user_id, presence: true

  belongs_to :track
  # belongs_to :user
end
