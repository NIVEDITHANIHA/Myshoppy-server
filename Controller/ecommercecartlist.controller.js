const carts = require("../model/ecomercecartlist.Schema");


exports.addtoCarttlist = async (req, res) => {
    const user_id = req.payload

    const { id, title, price, description, image, rating, quantity } = req.body
    try {

        const existingProduct = await carts.findOne({ id, user_id })

        if (existingProduct) {
            existingProduct.quantity = existingProduct.quantity + 1
            console.log(existingProduct.quantity);
            existingProduct.grandTotal = existingProduct.quantity * existingProduct.price
            await existingProduct.save()
            res.status(200).json(existingProduct)
        } else {

            const newProducts = new carts({
                id, title, price, description, image, rating, quantity, user_id, grandTotal: price
            })
            await newProducts.save()
            res.status(200).json("New item  Added")
        }

    }
    catch (error) {
        console.log(error);
        res.status(401).json(error)

    }





}


exports.getCartlist = async (req, res) => {
    const user_id = req.payload
    try {
        const cartlistDetail = await carts.find({ user_id })
        res.status(200).json(cartlistDetail)

    }
    catch (error) {
        res.status(401).json(error)

    }



}

exports.deleteCartlists = async (req, res) => {
    const { id } = req.params
    try {
        const removeCartlist = await carts.findByIdAndDelete({ _id: id })
        res.status(200).json(removeCartlist)
    }
    catch (error) {
        res.status(401).json(error)

    }

}


exports.Increment = async (req, res) => {

    const { id } = req.params
    try {
        const selecctedProduct = await carts.findOne({ _id: id })
        if (selecctedProduct) {
            selecctedProduct.quantity += 1
            selecctedProduct.grandTotal = selecctedProduct.price * selecctedProduct.quantity
            await selecctedProduct.save()
            res.status(200).json(selecctedProduct)
        }
        else {
            res.status(406).json("No products Found")

        }



    }
    catch (error) {
        res.status(401).json(error)

    }


}
exports.Decrement = async (req, res) => {

    const { id } = req.params
    try {
        const selectedProduct = await carts.findOne({ _id: id })
        if (selectedProduct) {
            selectedProduct.quantity -= 1
            if (selectedProduct.quantity == 0) {

                await carts.deleteOne({_id:id})
                res.status(200).json("item Removed From the cart")

            } else {
                selectedProduct.grandTotal = selectedProduct.price * selectedProduct.quantity
                await selectedProduct.save()
                res.status(200).json(selectedProduct)
            }

        }
        else {
            res.status(406).json("No products Found")

        }



    }
    catch (error) {
        res.status(401).json(error)

    }


}

exports.emptycartlist = async(req,res)=>{
    try{
        const user_id = req.payload
        console.log(user_id);
        const deleteAllEmptycart = await carts.deleteMany({user_id})
        res.status(200).json(deleteAllEmptycart)


    }
    catch(err){
        res.status(401).json(err)
    }
}