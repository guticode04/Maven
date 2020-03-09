class Api::TracksController < ApplicationController

  def index
    @tracks = Track.includes(:artist).all
  end
  
  def create
    @artist = Artist.find_or_create_by(artist_params)
    @track = @artist.tracks.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end
  
  def show
    @track = Track.includes(:artist).find(params[:id])
  end
  
  def update
    @track = Track.includes(:artist).find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @track = Track.includes(:artist).find(params[:id])
    # @track = Track.find(params[:id])
    @track.destroy
    render :show
  end

  private
  def track_params
    params.require(:track).permit(:title,:lyrics)
  end

  def artist_params
    params.require(:track).permit(:artist_name)
  end
end