const { Schema, model } = require('mongoose')

const houseSchema = new Schema({
    house_name: { type: String, required: true},
    price: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    house_type: { type: String, required: true },
    rooms: { type: String, required: true },
    area: { type: String, required: true },
    owner_name: { type: String, required: true },
    email: { type: String, required: true },
    owner_id: { type: String, required: true },
    posted_at: { type: Date, default: Date.now },
    availible: { type: Boolean, default: true },
    house_pic: { type: String , required : true }})

const House = model('house', houseSchema)
module.exports = House