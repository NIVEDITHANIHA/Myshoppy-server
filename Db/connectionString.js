const mongoose = require("mongoose")

const connectionString = process.env.database

mongoose.connect(connectionString).then(() => {
    console.log("mongoose connected Succesfully");

}).catch((err) => {
    console.log(`mongoose connection Failed due to an ${err}`);

})
