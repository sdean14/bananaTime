json.partial! "api/users/user", user: @user

json.followings do
  json.array! @follows do |follow|
    json.extract! follow, :requested_id
  end
end

json.followers do
  json.array! @followers do |follower|
    json.extract! follower, :requester_id
  end
end