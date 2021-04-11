class Api::FriendshipsController < ApplicationController
 
  def create
    @follow = Friendship.new(friendship_params)
  if @follow.save 
    render "api/users/show" 
  end   
  end

  def destroy
    @follow = Friendship.destroy(params[:id])
    render "api/users/show" 
  end

  private
  def friendship_params
      params.require(:friendship).permit(:user_id , :requested_id)
  end

end
