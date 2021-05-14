# @comments.each do |comment|
#   json.set! comment.id do
#     json.partial! 'comment', comment: comment
#   end
# end

json.array! @comments do |comment|
  json.partial! 'comment', comment: comment

  json.user do
    json.partial! 'api/users/user', user: comment.commenter
  end

  json.post do
    json.partial! 'api/posts/post', post: comment.post
  end
end

