const mongoose = require("mongoose")

const ecommmercewishlist = new mongoose.Schema({

    id: {
        type: Number,
        require: true
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

    },
    user_id: {
        require: true,
        type: String
    }

})

const wishlist = mongoose.model("wishlist", ecommmercewishlist)
module.exports = wishlist