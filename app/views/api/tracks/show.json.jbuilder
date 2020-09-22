# json.set! @track.id do
  json.partial! "api/tracks/track", track: @track
# end

json.annotations do
  @track.annotations.each do |annotation|
    json.set!(annotation.id) do
      json.extract! annotation, :id, :body, :user_id, :track_id, :start_idx, :end_idx
    end
  end
end
