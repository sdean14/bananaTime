class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = current_user.posts.find_by(id: params[:id])

    if @post && @post.update(post_params)
      render :show
    else
      render json: ["You can't edit this post"], status: 422
    end
  end

  def destroy
    @post = current_user.posts.find_by(id: params[:id])

    if @post && @post.destroy
      render :show
    else
      render json: ["You can't delete this post"], status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:body, :author_id)
  end

end
