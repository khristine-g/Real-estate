class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :location
      t.decimal :price
      t.integer :bedrooms
      t.integer :bathrooms
      t.integer :size
      t.string :purpose
      t.string :category
      t.string :agent
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
