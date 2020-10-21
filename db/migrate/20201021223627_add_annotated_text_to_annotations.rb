class AddAnnotatedTextToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :annotated_text, :string
  end
end
