class Api::FriendshipsController < ApplicationController
 
  def create
    @follow = Friendship.new
    @follow.requested_id = params[:id]
    @follow.requester_id = current_user.id
    render "api/users/show"    
  end

  def destroy
    @follow = Friendship.find(params[:id])
    @follow.destroy
    render "api/users/show" 
  end


end
