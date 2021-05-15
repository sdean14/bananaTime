@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
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