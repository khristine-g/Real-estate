class ChangeAgentIdToNotNullInListings < ActiveRecord::Migration[6.1]
  def change
    change_column_null :listings, :agent_id, false
  end
end

