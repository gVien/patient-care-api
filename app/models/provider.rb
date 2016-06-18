class Provider < ActiveRecord::Base
  validates :name, :location, presence: true
end
