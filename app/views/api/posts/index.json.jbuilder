json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
      json.commentIds post.comment_ids
    end
  end
end

json.comments do
  @posts.each do |post|
      post.comments.each do |comment|
          json.set! comment.id do 
              json.partial! 'api/comments/comment', comment: comment
          end 
      end
  end
end


# json.array! @posts do |post|
#   json.partial! 'api/posts/post', post: post

  # json.user do
  #   json.partial! 'api/users/user', user: post.author

    # json.follows do
    #   json.array! post.author.friends_you_follow do |follow|
    #     json.extract! follow, :requested_id
      # end
    # end
  # end
# end