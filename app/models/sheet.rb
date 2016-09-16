class Sheet < ApplicationRecord
	has_attached_file :md
	validates_attachment_file_name :md, matches: [/md\Z/]
end
