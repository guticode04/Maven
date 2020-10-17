json.partial! "api/tracks/track", track: @track

# might not need this anymore. Gives issues when trying to grab information
# when too deeply nested
# json.annotations do
#   @track.annotations.each do |annotation|
#     json.set!(annotation.id) do
#       json.extract! annotation, :id, :body, :user_id, :track_id, :start_idx, :end_idx
#     end
#   end
# end

