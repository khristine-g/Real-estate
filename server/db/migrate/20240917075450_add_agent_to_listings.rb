class AddAgentToListings < ActiveRecord::Migration[6.1]
  def change
    add_reference :listings, :agent, null: true, foreign_key: true
  end
end
