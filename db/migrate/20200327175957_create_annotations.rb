class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :annotations, :user_id
    add_index :annotations, :track_id
  end
end
