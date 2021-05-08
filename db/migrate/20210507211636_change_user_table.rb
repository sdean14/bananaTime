class ChangeUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :location, :string
    add_column :users, :work, :string
    
  end
end
