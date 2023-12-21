require('dotenv').config()
const userSchema = require('./schema')
const { hash, compare } = require('bcryptjs')
const SignupMail = require('../utils/sendmail')

const all_users = async (req, res) => {
    try {
        const allUsers = await userSchema.find()
        res.status(201).json({ users: allUsers })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const signup = async (req, res) => {
    const { username, email, password, address, city, role } = req.body;
    if (username && email && password && address && city && role) {
        try {
            const checkUser = await userSchema.exists({ email })

            if (!checkUser) {
                await userSchema.create({ role, username, email, address, city, password: await hash(password, 12) })
                await SignupMail(username, email, "Sign Up Successfully")

                res.status(201).json({ message: "User Created Successfully" })

            } else {
                res.json({ message: "user already exist" })
            }

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
    else {
        res.status(400).json({ message: "required field missing" })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (email && password) {
        try {
            const checkUser = await userSchema.findOne({ email })

            if (checkUser) {
                const decryptPass = await compare(password, checkUser.password)

                if (decryptPass && email == checkUser.email) {
                    res.json({ message: "Successfully Login" })
                } else {
                    res.status(400).json({ message: "Incorrect Password" })
                }

            }
            else {
                res.status(404).json("user not found")
            }
        }
        catch (error) {
            res.status(400).json({ message: "Required Field Missing" })
        }
    } else {

    }

}

const update_profile = async (req, res) => {
    const { email, username, address, city, role } = req.body
    try {
        const filter = { email }
        const update = { username, address, city, role }
        const doc = await userSchema.findOneAndUpdate(filter, update, { new: true })
        res.status(201).json({ user: doc, message: "Profile Updated Seccessfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { all_users, signup, login, update_profile }