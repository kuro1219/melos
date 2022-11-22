class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :name, null: false # ユーザ名
      t.string :full_name # 本名
      t.string :email # メールアドレス
      t.date :birthday  # 生年月日
      t.integer :sex, null: false, default: 1 # 性別（1：男、2：女）

      t.timestamps
    end
  end
end
