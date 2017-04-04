class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :body
      t.boolean :done, null: false, default: false

      t.timestamps
    end
  end
end
