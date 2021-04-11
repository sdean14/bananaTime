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
require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
