const Phone = require("../models/phoneModel")
exports.getPhone = async (req, res) => {
    try {
        const phoneUsers = await Phone.find()
        res.status(200).json(phoneUsers)
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }
}
exports.postUser = async (req, res) => {
    try {
        const {name, age, number, city } = req.body
        const newUser = new Phone({ name, age, number, city })
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }
}