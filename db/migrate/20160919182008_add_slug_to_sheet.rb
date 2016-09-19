class AddSlugToSheet < ActiveRecord::Migration[5.0]
  def change
    add_column :sheets, :slug, :string
    add_index :sheets, :slug, unique: true
  end
end
