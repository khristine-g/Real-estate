class CreateAgents < ActiveRecord::Migration[6.1]
  def change
    create_table :agents do |t|
      t.string :name
      t.string :image
      t.string :email
      t.string :phone
      t.text :about

      t.timestamps
    end
  end
end
