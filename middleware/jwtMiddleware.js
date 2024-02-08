const jwt = require("jsonwebtoken")

const jwtMiddileware = (req, res, next) => {

    try {

        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);

        const jwtResponse = jwt.verify(token ,process.env.secretKey)
        console.log(jwtResponse);

        req.payload = jwtResponse.userId
        console.log(req.payload);
        next()


    }
    catch (error) {
        res.status(401).json(error)

    }


}

module.exports = jwtMiddileware