/* Import Express */
const express = require("express")
/* import project conntroller */
const ecommerceprojectController = require("../Controller/ecommerceprojects.controller")
const ecommerceusersController = require("../Controller/ecommmerceusers.controller")
const ecommerceWishlistController = require("../Controller/ecommercewishlist.controller")
const ecommerceCartlistController = require("../Controller/ecommercecartlist.controller")
const jwtMiddileware = require("../middleware/jwtMiddleware")
/* import router */
const router = new express.Router()

/* get Api to display */
router.get("/ecommerce/allproducts", ecommerceprojectController.ecommerceAllproject)

/* post APi For Registration */
router.post("/ecommerce/register", ecommerceusersController.registerEcommerce)

/* post Api For Login */
router.post("/ecommerce/login", ecommerceusersController.loginEcommerce)
/* post Api For Login */
router.get("/ecommerce/product/:id", ecommerceprojectController.getViewProduct)

/* post Api For AddWishlist */
router.post("/ecommerce/wishlist", jwtMiddileware, ecommerceWishlistController.addWishList)

/* get Api For AddWishlist */
router.get("/ecommerce/getAllwishlist", jwtMiddileware, ecommerceWishlistController.getWishlists)

/* Delete Api For Remove WishLists */
router.delete("/ecommerce/removeWishlist/:id", jwtMiddileware, ecommerceWishlistController.deleteWishLists)

/* post Api For AddCartlist */
router.post("/ecommerce/addlist", jwtMiddileware, ecommerceCartlistController.addtoCarttlist)

/* get Api For getCartlist */
router.get("/ecommerce/getCartlist", jwtMiddileware, ecommerceCartlistController.getCartlist)

/* Delete Api For Remove Cartists */
router.delete("/ecommerce/deleteCartlist/:id", jwtMiddileware, ecommerceCartlistController.deleteCartlists)

/* get Api For increment Cartists */
router.get("/ecommerce/incrementCartlist/:id", jwtMiddileware, ecommerceCartlistController.Increment)

/* get Api For decrement Cartists */
router.get("/ecommerce/decrementCartlist/:id", jwtMiddileware, ecommerceCartlistController.Decrement)

/* delete Api For emptycart  */
router.delete("/ecommerce/emptycart", jwtMiddileware, ecommerceCartlistController.emptycartlist)


/* exports the router */
module.exports = router