class ChangeRepoToLink < ActiveRecord::Migration[5.0]
  def change
		rename_column :sheets, :repo, :link
  end
end
