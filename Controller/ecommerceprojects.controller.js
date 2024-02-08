const allprojects = require("../model/ecommerceproject.Schema")


exports.ecommerceAllproject = async (req, res) => {
    try {

        const ecommerceProjects = await allprojects.find()
        res.status(200).json(ecommerceProjects)

    }
    catch (err) {
        res.status(401).json(err)

    }
}

exports.getViewProduct = async (req, res) => {

    const id = req.params

    try {
        const ecommerceUserProject = await allprojects.find(id)
        res.status(200).json(ecommerceUserProject)

    }
    catch (err) {

        res.status(406).json(err)

    }






}