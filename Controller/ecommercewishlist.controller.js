const wishlist = require('../model/ecomercewishlist.Schema')



exports.addWishList = async (req, res) => {

    const { id, title, price, description, image, rating } = req.body
    console.log("body", id, title, price, description, image, rating);
    const user_id = req.payload
    console.log(user_id);

    try {
        const existedProduct = await wishlist.findOne({ id, user_id })
        if (existedProduct) {
            res.status(406).json('Products already existed')
        } else {

            const newProducts = new wishlist({ id, title, price, description, image, rating, user_id })
            await newProducts.save()
            res.status(200).json(newProducts)
        }

    }
    catch (err) {

        res.status(401).json(err)

    }




}

exports.getWishlists = async (req, res) => {
    const user_id = req.payload
    try {
        const getAllWishList = await wishlist.find({user_id})
        res.status(200).json(getAllWishList)


    }
    catch (error) {
        res.status(401).json(error)
    }

}


exports.deleteWishLists = async (req, res) => {
    const {id} = req.params
    try {
        const removeWishlist = await wishlist.findByIdAndDelete({ _id: id })
        res.status(200).json(removeWishlist)


    }
    catch (error) {
        res.status(401).json(error)

    }

}