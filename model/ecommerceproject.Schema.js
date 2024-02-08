const mongoose = require("mongoose")

const ecommerceproject = new mongoose.Schema(
    {
        id: {
            type: Number,
            require: true,
            unique: true
        },
        title: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        rating: {

            rate: {
                type: Number,
                require: true
            },
            count: {
                type: Number,
                require: true
            }

        }
    }
)

const allprojects = mongoose.model("allprojects", ecommerceproject)
module.exports = allprojects;