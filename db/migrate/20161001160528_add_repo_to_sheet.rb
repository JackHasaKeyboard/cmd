class AddRepoToSheet < ActiveRecord::Migration[5.0]
  def change
    add_column :sheets, :repo, :string
  end
end
