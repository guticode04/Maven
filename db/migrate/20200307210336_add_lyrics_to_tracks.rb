class AddLyricsToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :lyrics, :text, :null => false
  end
end
