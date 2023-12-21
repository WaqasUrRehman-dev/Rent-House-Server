const houseSchema = require('./schema')


const add_house = async (req, res) => {

    const { house_name, price, city, address, rooms, area, owner_name, email, owner_id, house_type, house_pic } = req.body

    if (house_name && price && city && house_type && address && rooms && area && owner_name && email && owner_id && house_pic) {
        try {
            const checkHouse = await houseSchema.exists({ house_name })
            if (!checkHouse) {
                await houseSchema.create({ house_name, price, city, address, house_type, rooms, area, owner_name, email, owner_id, house_pic })
                res.status(200).json({ message: "House added Successfully" })
            } else {
                res.status(400).json({ message: "House already exist" })
            }
        } catch (error) {
            res.status(400).json({ message: error.message })
        }

    } else {
        res.send("Required Field Missing")
    }
}

const update_house = async (req, res) => {
    const { id, house_name, price, city, address, rooms, area, owner_name, email, owner_id, house_type, house_pic } = req.body
    try {
        const filter = { id }
        const update = { house_name, price, city, address, rooms, area, owner_name, email, owner_id, house_type, house_pic }
        const updateHouse = await houseSchema.findOneAndUpdate(filter, update, { new: true })
        res.status(201).json({ message: "House Details updated Successfully", House: updateHouse })
    } catch (error) {
        res.json(404).json({ message: "House Not Found" })
    }
}

const delete_house = async (req, res) => {
    try {
        const delete_house = await houseSchema.findOneAndDelete({ _id: req.body._id })
        res.status(201).json({ message: "Succesfully Deleted", House: delete_house })
    } catch (error) {
        res.json(404).json({ message: "House Not Found" })
    }
}

const all_houses = async (req, res) => {
    try {
        const all_houses = await houseSchema.find()
        res.status(202).json({ Houses: all_houses })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const searchHouseByCity = async (req, res) => {
    const { city } = req.query;
    try {
        const searchHouses = await houseSchema.find({ city })
        if (searchHouses.length > 0) {
            res.json({ searchHouses, found_records: searchHouses.length })
        }
        else {
            res.status(404).json({ message: `Not Found Results for City ${city}` })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { add_house, update_house, delete_house, all_houses, searchHouseByCity }