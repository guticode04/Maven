class Api::AnnotationsController < ApplicationController

  def index
    @annotations = Annotation.all
  end

  def show
    @annotation = Annotation.find(params[:id])
    
    if @annotation
      render :show
    else
      render json: @annotation.errors.full_message, status: 422
    end
  end

  def create
    @annotation = Annotation.new(annotation_params)
   
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
