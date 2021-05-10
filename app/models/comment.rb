# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  commenter_id :integer          not null
#  post_id      :integer          not null
#
# Indexes
#
#  index_comments_on_commenter_id  (commenter_id)
#  index_comments_on_post_id       (post_id)
#
class Comment < ApplicationRecord
  validates :body, :commenter_id, presence: true

  
  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :post,
  foreign_key: :post_id,
  class_name: :Post
  

end
