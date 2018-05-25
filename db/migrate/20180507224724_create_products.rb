class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :link
      t.string :img
      t.float :price
      t.string :added_by

      t.timestamps
    end
  end
end
