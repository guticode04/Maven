class Api::AnnotationsController < ApplicationController
  
  def index
  end

  def show
    @annotation = Annotation.find_by(id: params[:id])
    render :show
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
    @annotation = Annotation.find_by(id: params[:id])
    @annotation.destroy
    render :show
  end

  private
  def annotation_params
    params.require(:annotation).permit(:body)
  end
end
