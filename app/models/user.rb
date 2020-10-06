class User < ApplicationRecord

  attr_reader :password

  validates :nickname, :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :annotations,
  class_name: :Annotation,
  foreign_key: :user_id,
  primary_key: :id

  has_many :comments,
  class_name: :Comment,
  foreign_key: :user_id,
  primary_key: :id

  after_initialize :ensure_session_token

  def self.find_by_credentials(input, password)
    user = User.find_by(nickname: input)
    if !user 
      user = User.find_by(email: input)
    end

    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.update!(session_token: SecureRandom.urlsafe_base64(16))
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end