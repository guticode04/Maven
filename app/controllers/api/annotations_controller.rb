class Api::AnnotationsController < ApplicationController
  
  # dont think I actually need this because in track show all annotations for
  # that track should show up
  
  # def index
  #   @track = Track.find_by(id: params[:id])
  #   @annotations = @track.annotations
  #   render :index
  #   # @annotation = Track.find(params[:track_id]).annotations.includes(:user)
  # end

  def show
    @annotation = Annotation.includes(:track).find(id: params[:id])
    render :show
  end

  def create
    # debugger
    @annotation = Annotation.new(annotation_params)
    # @annotation = current_user.annotations.new(annotation_params)
    # @annotation.user_id = current_user.id
    # @annotation.track_id = params[:track_id]
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
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
    # params.require(:annotation).permit(:body) #, :start_idx, :end_idx) # :track_id, :user_id)
    params.require(:annotation).permit(:body, :start_idx, :end_idx, :track_id, :user_id)
  end
end
