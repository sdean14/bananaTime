# == Schema Information
#
# Table name: friendships
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  requested_id :integer          not null
#  requester_id :integer          not null
#
# Indexes
#
#  index_friendships_on_requested_id  (requested_id)
#  index_friendships_on_requester_id  (requester_id)
#
class Friendship < ApplicationRecord
  validates :requester_id, :requested_id, presence: true
  # -------------------------
# A User has many Friend Requests
# A Friend Request belongs to a Requestor and a Receiver
# A User has many Friends through Friendships
# A Friendship belongs to two Users
# https://medium.com/@elizabethprendergast/using-custom-relation-queries-to-establish-friends-and-friendships-in-rails-and-activerecord-6c6e5825433a
  # -------------------

  
  belongs_to :follower,
  foreign_key: :requester_id,
  class_name: :"User"
  
  belongs_to :following, #followee
  foreign_key: :requested_id,
  class_name: :"User"

end
