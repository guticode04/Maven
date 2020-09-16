class Api::AnnotationsController < ApplicationController
  
  # def index
  #   @annotation = Track.find(params[:track_id]).annotations.includes(:user)
  # end

  def show
    # @annotation = Annotation.includes(:track_id).find(id: params[:id])
    @annotation = Annotation.includes(:track_id).find(id: params[:id])
    render :show
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.user_id = current_user.id
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
  end

  def update
    @annotation = Annotation.includes(:track).find(params[:id])
    
    if @annotation.update(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_message, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find_by(id: params[:id])
    @annotation.destroy
    render :show
  end

  private
  def annotation_params
    params.require(:annotation).permit(:body, :track_id, :user_id)
  end
end
