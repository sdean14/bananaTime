json.extract! user, :id, :username, :email, :birthday


json.follow_count user.followings.count

json.followed_by_current_user !!user.fanships.find_by(requester_id: current_user.id)
