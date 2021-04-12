@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user
  end
end


json.follows do
  json.array! user.friends_you_follow do |follow|
    json.extract! follow, :requested_id
  end
end