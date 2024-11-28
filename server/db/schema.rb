# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_09_17_075740) do

  create_table "agents", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "email"
    t.string "phone"
    t.text "about"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "images", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["listing_id"], name: "index_images_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.decimal "price"
    t.integer "bedrooms"
    t.integer "bathrooms"
    t.integer "size"
    t.string "purpose"
    t.string "category"
    t.string "agent"
    t.text "description"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "agent_id", null: false
    t.index ["agent_id"], name: "index_listings_on_agent_id"
  end

  add_foreign_key "images", "listings"
  add_foreign_key "listings", "agents"
end
