class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(post_params)
    @comment.commenter_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])

    if @comment && @comment.update(post_params)
      render :show
    else
      render json: ["You can't edit this Comment"], status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])

    if @comment && @comment.destroy
      render :show
    else
      render json: ["You can't delete this Comment"], status: 422
    end
  end

  private
  def Comment_params
    params.require(:comment).permit(:body, :commenter_id, :post_id)
  end
end
