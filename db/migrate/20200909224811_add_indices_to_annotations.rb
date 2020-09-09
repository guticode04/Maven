class AddIndicesToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :start_idx, :integer
    add_column :annotations, :end_idx, :integer
  end
end
