class Listing < ApplicationRecord
    validates :title, :location, :price, :bedrooms, :bathrooms, :size, :purpose, :category, :agent, :description, :image, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }
    validates :bedrooms, :bathrooms, :size, numericality: { only_integer: true, greater_than_or_equal_to: 0 }



    has_many :images, dependent: :destroy
    accepts_nested_attributes_for :images, allow_destroy: true

end
