@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user
    if user.photo.attached?
    json.photoUrl url_for(user.photo)
    end
  json.follows do
    json.array! user.friends_you_follow do |follow|
      json.extract! follow, :requested_id
      end
    end
  end
end