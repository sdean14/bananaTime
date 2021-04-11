# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  birthday        :date             not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    validates :username, :email, :session_token, uniqueness: true
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token
    attr_reader :password

# --following relation--
    has_many :friends_you_follow, #followships
    foreign_key: :requester_id,
    class_name: :"Friendship"
    
    has_many :fanships, #friends_following_you, #
    foreign_key: :requested_id,
    class_name: :"Friendship"
    
    has_many :followers,
    through: :fanships, #list of(?)friends_following_you,
    source: :follower

    has_many :followings, #followees  list of(?) friends you follow
    through: :friends_you_follow,
    source: :following

    #posts
    has_many :posts,
    foreign_key: :author_id,
    class_name: :"Post"

 

    # spire
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password) 
            user
        else
            nil
        end
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) 
    end

    def reset_session_token
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end
end
