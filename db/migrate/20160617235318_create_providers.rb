class CreateProviders < ActiveRecord::Migration
  def change
    create_table :providers do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :phone_number
      t.text :provides, array: true, default: []  # alternatively, this can be made into another model, which might be better if we want to add more functionalities to the model

      t.timestamps null: false
    end

    add_index :providers, :name # probably does not need to be unique? since a name can have many branches
  end
end
