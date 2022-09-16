const mongoose = require('mongoose');


const conectarBD = async () => {

    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('base de datos conectada')
    } catch (error) {
        console.log('error al iniciar la base de datos')
        console.log(error.message)
    }
}

module.exports = conectarBD;
