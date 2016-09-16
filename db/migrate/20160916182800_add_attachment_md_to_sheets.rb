class AddAttachmentMdToSheets < ActiveRecord::Migration
  def self.up
    change_table :sheets do |t|
      t.attachment :md
    end
  end

  def self.down
    remove_attachment :sheets, :md
  end
end
