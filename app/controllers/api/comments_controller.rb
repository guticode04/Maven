class Api::CommentsController < ApplicationController

   def show
      @comment = Comment.find(params[:id])
      if @comment
         render :show
      else
         render json: @comment.errors.full_message, status: 422
      end
   end

   def create
      @comment = Comment.new(comment_params)
      if @annotation.save
         render :show
      else
         render json: @comment.errors.full_message, status: 422
   end

   def update
   end

   def destroy
   end

   private
   def comment_params
      params.require(:comment).permit(:body, track_id, user_id)
   end

end