class Api::FriendshipsController < ApplicationController
 
  # def index
  #   # make arr of followees & followers
  #   # pass to jbuilder so you have access to arr of followers and followees 
  # end

  def create
    @follow = Friendship.new
    @follow.requester_id = current_user.id
    @follow.requested_id = params[:id]
    
  if @follow.save 
    @following = @follow.following #followee =following
    # render "api/posts/index" 
    render :show
   
  else
    render json: @follow.errors.full_messages
  end   
  end

  def destroy
    @follow = Friendship.find_by(requester_id: current_user.id, requested_id: params[:id])
    @following = @follow.following
    @follow.destroy
    # render "api/posts/index" 
    render :show
  end

  private
  def friendship_params
      params.require(:friendship).permit(:user_id , :requested_id)
  end

end
