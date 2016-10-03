class Sheet < ApplicationRecord
	has_attached_file :md
	validates_attachment_file_name :md, matches: [/md\Z/]
	validates_uniqueness_of :name

	extend FriendlyId
	friendly_id :name, use: :slugged
end
