const mongoose = require('mongoose')


const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,(err,res) =>{
        if(!err){
            console.log('Database is connect')
        } else {
            console.log(err)
        }
    })
}


module.exports = dbConnect;