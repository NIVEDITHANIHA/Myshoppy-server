const users = require("../model/ecommerceusers.Schema")

exports.registerEcommerce = async (req, res) => {

    const { username, email, password } = req.body


    try {
        const existingUSer = await users.findOne({ email: email })
        if (existingUSer) {
            res.status(406).json("Existing User ... Please Login")
        } else {
            const newUsers = new users({
                username: username,
                email: email,
                password: password,
            })
            await newUsers.save()
            res.status(200).json(newUsers)


        }



    } catch (err) {
        res.status(401).json(err)
    }

}

const jwt = require('jsonwebtoken');

exports.loginEcommerce = async (req, res) => {

    const { email, password } = req.body

    try {

        const existedUser = await users.findOne({ email, password })

        if (existedUser) {
            const token = jwt.sign({ userId: existedUser._id }, process.env.secretKey);

            res.status(200).json({
                existedUser: existedUser,
                token: token
            })



        } else {
            res.status(406).json("Invalid User ... Please register")
        }

    }
    catch (err) {
        res.status(401).json(err)
    }

}